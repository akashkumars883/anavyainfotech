import CareersClient from "@/components/CareersClient";

export const metadata = {
  title: "Careers & Open Job Opportunities | Anavya Infotech",
  description:
    "Explore career opportunities at Anavya Infotech. Learn about our company culture, selection process, and open positions in web engineering, AI automation, and digital growth.",
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
    title: "Careers & Open Job Opportunities | Anavya Infotech",
    description:
      "Build the future of web development, AI automation, and performance marketing with Anavya Infotech. Explore company culture & open positions.",
    url: "https://www.anavyainfotech.com/careers",
    type: "website",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
