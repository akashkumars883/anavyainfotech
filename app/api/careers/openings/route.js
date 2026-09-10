import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";

export const dynamic = "force-dynamic";

// In-memory fallback store for job openings
const globalOpeningsStore = globalThis._careerOpeningsStore || [
  {
    id: "business-dev-intern",
    title: "Business Development Intern",
    department: "Sales & Growth",
    location: "Delhi NCR / Remote / Hybrid",
    type: "Internship (Full-Time / Part-Time)",
    experience: "0-1 Years (Fresher Friendly)",
    description: "Looking for an energetic Business Development Intern to assist with B2B client outreach, SaaS solution presentations, market research, and client relationship management across India and global markets.",
    tags: "B2B Sales, Client Outreach, Market Research, Communication, Lead Gen",
    status: "active",
    created_at: new Date().toISOString(),
  },
];
if (!globalThis._careerOpeningsStore) {
  globalThis._careerOpeningsStore = globalOpeningsStore;
}

// Ensure table exists in Turso DB
async function initTursoOpeningsTable() {
  try {
    await tursoClient.execute(`
      CREATE TABLE IF NOT EXISTS career_openings (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        department TEXT,
        location TEXT,
        type TEXT,
        experience TEXT,
        description TEXT,
        tags TEXT,
        status TEXT DEFAULT 'active',
        created_at TEXT
      )
    `);

    // Check count and seed initial Business Development Intern if empty
    const checkRes = await tursoClient.execute("SELECT COUNT(*) as count FROM career_openings");
    if (checkRes.rows[0]?.count === 0) {
      const initOp = globalOpeningsStore[0];
      await tursoClient.execute({
        sql: `INSERT INTO career_openings (id, title, department, location, type, experience, description, tags, status, created_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          initOp.id,
          initOp.title,
          initOp.department,
          initOp.location,
          initOp.type,
          initOp.experience,
          initOp.description,
          initOp.tags,
          initOp.status,
          initOp.created_at,
        ],
      });
    }
  } catch (e) {
    console.warn("Turso career_openings init notice:", e.message);
  }
}

export async function GET(request) {
  try {
    await initTursoOpeningsTable();

    let openings = [];
    try {
      const dbRes = await tursoClient.execute("SELECT * FROM career_openings ORDER BY created_at DESC");
      if (dbRes.rows && dbRes.rows.length > 0) {
        openings = dbRes.rows.map((row) => ({
          id: row.id,
          title: row.title,
          department: row.department,
          location: row.location,
          type: row.type,
          experience: row.experience,
          description: row.description,
          tags: typeof row.tags === "string" ? row.tags.split(",").map((t) => t.trim()) : row.tags || [],
          status: row.status || "active",
          created_at: row.created_at,
        }));
      }
    } catch (dbErr) {
      console.warn("Turso fetch openings fallback:", dbErr.message);
    }

    if (openings.length === 0) {
      openings = globalOpeningsStore.map((row) => ({
        ...row,
        tags: typeof row.tags === "string" ? row.tags.split(",").map((t) => t.trim()) : row.tags || [],
      }));
    }

    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get("active") === "true";

    if (activeOnly) {
      openings = openings.filter((o) => o.status === "active");
    }

    return NextResponse.json({ success: true, openings });
  } catch (err) {
    console.error("GET career openings error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, department, location, type, experience, description, tags, status } = body;

    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 });
    }

    const newOpening = {
      id: `op_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      title: title.trim(),
      department: department?.trim() || "General",
      location: location?.trim() || "Remote / Delhi NCR",
      type: type?.trim() || "Full-Time",
      experience: experience?.trim() || "0-1 Years",
      description: description.trim(),
      tags: Array.isArray(tags) ? tags.join(", ") : tags || "",
      status: status || "active",
      created_at: new Date().toISOString(),
    };

    globalOpeningsStore.unshift(newOpening);

    try {
      await initTursoOpeningsTable();
      await tursoClient.execute({
        sql: `INSERT INTO career_openings (id, title, department, location, type, experience, description, tags, status, created_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          newOpening.id,
          newOpening.title,
          newOpening.department,
          newOpening.location,
          newOpening.type,
          newOpening.experience,
          newOpening.description,
          newOpening.tags,
          newOpening.status,
          newOpening.created_at,
        ],
      });
    } catch (e) {
      console.warn("Turso insert opening error:", e.message);
    }

    return NextResponse.json({ success: true, opening: newOpening });
  } catch (err) {
    console.error("POST career opening error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Opening ID is required" }, { status: 400 });
    }

    const index = globalOpeningsStore.findIndex((o) => o.id === id);
    if (index !== -1) {
      globalOpeningsStore.splice(index, 1);
    }

    try {
      await tursoClient.execute({
        sql: "DELETE FROM career_openings WHERE id = ?",
        args: [id],
      });
    } catch (e) {
      console.warn("Turso delete opening error:", e.message);
    }

    return NextResponse.json({ success: true, message: "Opening deleted" });
  } catch (err) {
    console.error("DELETE career opening error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, title, department, location, type, experience, description, tags, status } = body;

    if (!id || !title || !description) {
      return NextResponse.json({ error: "ID, title, and description are required" }, { status: 400 });
    }

    const updatedTags = Array.isArray(tags) ? tags.join(", ") : tags || "";

    // Update in-memory fallback
    const index = globalOpeningsStore.findIndex((o) => o.id === id);
    if (index !== -1) {
      globalOpeningsStore[index] = {
        ...globalOpeningsStore[index],
        title: title.trim(),
        department: department?.trim(),
        location: location?.trim(),
        type: type?.trim(),
        experience: experience?.trim(),
        description: description.trim(),
        tags: updatedTags,
        status: status || "active",
      };
    }

    // Update Turso
    try {
      await tursoClient.execute({
        sql: `UPDATE career_openings SET 
              title = ?, department = ?, location = ?, type = ?, experience = ?, description = ?, tags = ?, status = ?
              WHERE id = ?`,
        args: [
          title.trim(),
          department?.trim(),
          location?.trim(),
          type?.trim(),
          experience?.trim(),
          description.trim(),
          updatedTags,
          status || "active",
          id,
        ],
      });
    } catch (e) {
      console.warn("Turso update opening error:", e.message);
    }

    return NextResponse.json({ success: true, message: "Opening updated" });
  } catch (err) {
    console.error("PUT career opening error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
