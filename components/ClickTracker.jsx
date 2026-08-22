"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClickTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Strictly ignore tracking inside admin panel routes (/admin, /admin/*)
    const currentPath = pathname || window.location.pathname;
    if (currentPath && currentPath.startsWith("/admin")) {
      return;
    }

    // Generate or fetch persistent visitor session ID
    let visitorId = "";
    let userEmail = "";
    try {
      visitorId = localStorage.getItem("anavya_visitor_id");
      if (!visitorId) {
        visitorId = `v_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        localStorage.setItem("anavya_visitor_id", visitorId);
      }
      userEmail = localStorage.getItem("anavya_user_email") || localStorage.getItem("user_email") || "";
    } catch {
      visitorId = `v_temp_${Date.now()}`;
    }

    const handleClick = (event) => {
      const activePath = pathname || window.location.pathname;
      if (activePath && activePath.startsWith("/admin")) {
        return; // Ignore admin clicks
      }

      // Find closest interactive or tracked target element
      const target = event.target.closest(
        "button, a, input, select, textarea, [role='button'], [data-track], .cursor-pointer"
      ) || event.target;

      // Extract meaningful text label
      let elementText = (
        target.innerText ||
        target.ariaLabel ||
        target.title ||
        target.value ||
        target.alt ||
        ""
      ).trim().slice(0, 150);

      // If text is empty (e.g. icon button), check child SVG/image or parent text
      if (!elementText && target.parentElement) {
        elementText = (target.parentElement.innerText || "").trim().slice(0, 100);
      }

      // Refresh email if captured recently in form
      try {
        userEmail = localStorage.getItem("anavya_user_email") || localStorage.getItem("user_email") || "";
      } catch {
        userEmail = "";
      }

      const payload = {
        visitor_id: visitorId,
        user_email: userEmail || null,
        page_path: activePath,
        element_tag: target.tagName ? target.tagName.toLowerCase() : "unknown",
        element_text: elementText || null,
        element_id: target.id || null,
        element_class: typeof target.className === "string" ? target.className.slice(0, 200) : null,
        data_track: target.getAttribute("data-track") || null,
        click_x: Math.round(event.clientX),
        click_y: Math.round(event.clientY),
        screen_width: window.innerWidth,
        screen_height: window.innerHeight,
        timestamp: new Date().toISOString(),
      };

      // Send payload without blocking main UI / navigation
      const payloadString = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        const blob = new Blob([payloadString], { type: "application/json" });
        navigator.sendBeacon("/api/track-click", blob);
      } else {
        fetch("/api/track-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payloadString,
          keepalive: true,
        }).catch(() => {});
      }
    };

    window.addEventListener("click", handleClick, { capture: true });
    return () => window.removeEventListener("click", handleClick, { capture: true });
  }, [pathname]);

  return null;
}
