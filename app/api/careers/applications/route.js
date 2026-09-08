import { NextResponse } from "next/server";
import { tursoClient } from "@/lib/turso";
import { sendLeadNotificationEmails } from "@/lib/email";

export const dynamic = "force-dynamic";

const globalApplicationsStore = globalThis._careerApplicationsStore || [];
if (!globalThis._careerApplicationsStore) {
  globalThis._careerApplicationsStore = globalApplicationsStore;
}

// Ensure table exists in Turso DB with full fields
async function initTursoApplicationsTable() {
  try {
    await tursoClient.execute(`
      CREATE TABLE IF NOT EXISTS career_applications (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        location TEXT,
        education TEXT,
        graduation_year TEXT,
        linkedin_url TEXT,
        resume_url TEXT,
        opening_title TEXT,
        skills TEXT,
        message TEXT,
        created_at TEXT
      )
    `);
  } catch (e) {
    console.warn("Turso career_applications init notice:", e.message);
  }
}

export async function GET() {
  try {
    await initTursoApplicationsTable();

    let applications = [...globalApplicationsStore];

    try {
      const dbRes = await tursoClient.execute("SELECT * FROM career_applications ORDER BY created_at DESC");
      if (dbRes.rows && dbRes.rows.length > 0) {
        const dbApps = dbRes.rows.map((row) => ({
          id: row.id,
          name: row.name,
          email: row.email,
          phone: row.phone,
          location: row.location || "N/A",
          education: row.education || "N/A",
          graduation_year: row.graduation_year || "N/A",
          linkedin_url: row.linkedin_url || "",
          resume_url: row.resume_url || "",
          opening_title: row.opening_title || "Business Development Intern",
          skills: row.skills || "",
          message: row.message || "",
          created_at: row.created_at,
        }));
        applications = [...dbApps, ...applications];
      }
    } catch (dbErr) {
      console.warn("Turso fetch applications fallback:", dbErr.message);
    }

    // Deduplicate applications
    const seen = new Set();
    const uniqueApps = applications.filter((app) => {
      const key = `${app.name}_${app.email}_${app.phone}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return NextResponse.json({ success: true, count: uniqueApps.length, applications: uniqueApps });
  } catch (err) {
    console.error("GET career applications error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      location,
      education,
      graduationYear,
      linkedinUrl,
      resumeUrl,
      openingTitle,
      skills,
      message,
    } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json({ error: "Name and contact details are required" }, { status: 400 });
    }

    const appRecord = {
      id: `app_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: name.trim(),
      email: email?.trim() || "no-email-provided@career.app",
      phone: phone?.trim() || "N/A",
      location: location?.trim() || "N/A",
      education: education?.trim() || "N/A",
      graduation_year: graduationYear?.trim() || "N/A",
      linkedin_url: linkedinUrl?.trim() || "",
      resume_url: resumeUrl?.trim() || "",
      opening_title: openingTitle?.trim() || "Business Development Intern",
      skills: skills?.trim() || "",
      message: message?.trim() || "",
      created_at: new Date().toISOString(),
    };

    globalApplicationsStore.unshift(appRecord);

    try {
      await initTursoApplicationsTable();
      await tursoClient.execute({
        sql: `INSERT INTO career_applications 
              (id, name, email, phone, location, education, graduation_year, linkedin_url, resume_url, opening_title, skills, message, created_at)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          appRecord.id,
          appRecord.name,
          appRecord.email,
          appRecord.phone,
          appRecord.location,
          appRecord.education,
          appRecord.graduation_year,
          appRecord.linkedin_url,
          appRecord.resume_url,
          appRecord.opening_title,
          appRecord.skills,
          appRecord.message,
          appRecord.created_at,
        ],
      });
    } catch (e) {
      console.warn("Turso insert career application error:", e.message);
    }

    // Email alert to admin
    try {
      await sendLeadNotificationEmails({
        name: appRecord.name,
        email: appRecord.email,
        phone: appRecord.phone,
        service: `Career Application - ${appRecord.opening_title}`,
        message: `Location: ${appRecord.location}\nEducation: ${appRecord.education} (${appRecord.graduation_year})\nLinkedIn: ${appRecord.linkedin_url || 'N/A'}\nResume Link: ${appRecord.resume_url || 'N/A'}\nSkills: ${appRecord.skills || 'N/A'}\nNote: ${appRecord.message || 'N/A'}`,
        source: "Career Portal",
      });
    } catch (e) {
      console.error("Career app email alert error:", e);
    }

    return NextResponse.json({ success: true, application: appRecord });
  } catch (err) {
    console.error("POST career application error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
