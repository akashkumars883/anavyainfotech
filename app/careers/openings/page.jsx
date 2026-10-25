import JobOpeningsClient from "@/components/JobOpeningsClient";

export const metadata = {
  title: "Business Development Intern Opening - Anavya Infotech Careers",
  description:
    "Apply for the Business Development Intern role at Anavya Infotech. See the tasks, requirements, pay, and full-time job opportunities, then apply online.",
  keywords: [
    "Business Development Intern Delhi NCR",
    "B2B sales internship India",
    "Anavya Infotech careers",
    "SaaS business development intern",
    "marketing internship Faridabad",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/careers/openings",
  },
  openGraph: {
    title: "Business Development Intern Opening - Anavya Infotech Careers",
    description:
      "Apply for a paid Business Development Intern role with a chance to get a full-time offer.",
    url: "https://www.anavyainfotech.com/careers/openings",
    type: "website",
  },
};

export default function OpeningsPage() {
  return <JobOpeningsClient />;
}
