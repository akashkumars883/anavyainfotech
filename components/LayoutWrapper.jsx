"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import ClickTracker from "@/components/ClickTracker";
import GoogleOneTap from "@/components/GoogleOneTap";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return <div className="flex-1 flex flex-col min-h-screen">{children}</div>;
  }

  return (
    <SmoothScrollProvider>
      <GoogleOneTap />
      <ClickTracker />
      <AnnouncementBanner />
      <Navbar />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
      <CookieConsentBanner />
    </SmoothScrollProvider>
  );
}



