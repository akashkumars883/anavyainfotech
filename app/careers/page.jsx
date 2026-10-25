import CareersClient from "@/components/CareersClient";

export const metadata = {
  title: "Careers & Open Job Opportunities - Anavya Infotech",
  description:
    "Explore jobs at Anavya Infotech. Learn about our team, hiring process, and roles in web development, AI, and digital marketing.",
  keywords: [
    "Anavya Infotech careers",
    "web developer jobs Delhi NCR",
    "Next.js developer hiring India",
    "AI engineer jobs Faridabad",
    "SEO strategist jobs",
    "software development careers",
  ],
  alternates: {
    canonical: "https://www.anavyainfotech.com/careers",
  },
  openGraph: {
    title: "Careers & Open Job Opportunities - Anavya Infotech",
    description:
      "Join Anavya Infotech to work on web development, AI, and digital marketing. See our team culture and open roles.",
    url: "https://www.anavyainfotech.com/careers",
    type: "website",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
