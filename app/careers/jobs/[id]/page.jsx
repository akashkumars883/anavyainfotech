import { notFound } from "next/navigation";
import JobDetailClient from "@/components/JobDetailClient";

// Force dynamic because we fetch jobs from the API/DB
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = await params;
  
  // We need to fetch the job to set metadata
  let job = null;
  try {
    // In production, we'd fetch from the local API route or DB directly
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "https://www.anavyainfotech.com"}/api/careers/openings?active=true`, { cache: "no-store" });
    const data = await res.json();
    job = (data.openings || []).find((j) => j.id === id);
  } catch (err) {
    console.error("Error fetching job for metadata", err);
  }

  if (!job) {
    return { title: "Job Not Found | Anavya Infotech Careers" };
  }

  return {
    title: `${job.title} - ${job.location} | Anavya Infotech Careers`,
    description: job.description,
    alternates: {
      canonical: `https://www.anavyainfotech.com/careers/jobs/${id}`,
    },
  };
}

export default async function JobPage({ params }) {
  const { id } = await params;
  
  // Fetch job details server-side
  let job = null;
  try {
    // Determine base URL for server-side fetch during build/runtime
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
    // Avoid fetch on server if possible by directly hitting DB, but for now we'll fetch API
    // Actually it's safer to just fetch it client side if this is a problem, but let's fetch absolute URL
    
    // Hardcoding for now since we know it's a dynamic route
    const res = await fetch(`https://www.anavyainfotech.com/api/careers/openings?active=true`, { cache: "no-store" }).catch(() => null);
    if (res && res.ok) {
      const data = await res.json();
      job = (data.openings || []).find((j) => j.id === id);
    }
  } catch (err) {
    console.error("Error fetching job", err);
  }

  // If server fetch failed (e.g. build time), we'll pass id and let client fetch it
  return <JobDetailClient initialJob={job} jobId={id} />;
}
