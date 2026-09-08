import JobOpeningsClient from "@/components/JobOpeningsClient";

export const metadata = {
  title: "Business Development Intern Opening | Anavya Infotech Careers",
  description:
    "Apply for Business Development Intern role at Anavya Infotech. Learn about key responsibilities, requirements, stipend, PPO opportunities, and submit your application online.",
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
    title: "Business Development Intern Opening | Anavya Infotech Careers",
    description:
      "Apply for Business Development Intern role at Anavya Infotech. Paid internship with PPO opportunities. Apply online now.",
    url: "https://www.anavyainfotech.com/careers/openings",
    type: "website",
  },
};

export default function OpeningsPage() {
  return <JobOpeningsClient />;
}
