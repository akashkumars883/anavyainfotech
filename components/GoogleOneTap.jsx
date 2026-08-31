"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function GoogleOneTap() {
  const pathname = usePathname();
  const [signedInUser, setSignedInUser] = useState(null);

  useEffect(() => {
    // 1. Skip on admin panel routes
    if (pathname && pathname.startsWith("/admin")) {
      return;
    }

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId) {
      console.warn("[GoogleOneTap] NEXT_PUBLIC_GOOGLE_CLIENT_ID is missing.");
      return;
    }

    // 2. Check if user is already signed in
    try {
      const existingEmail = localStorage.getItem("anavya_user_email");
      const existingName = localStorage.getItem("anavya_user_name");
      if (existingEmail) {
        setSignedInUser({ email: existingEmail, name: existingName || "" });
        return; // Already captured email, no need to prompt again
      }
    } catch {
      // Storage access error fallback
    }

    // 3. Callback function when user completes One-Tap
    const handleCredentialResponse = async (response) => {
      try {
        if (!response.credential) return;

        const res = await fetch("/api/auth/google-one-tap", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ credential: response.credential }),
        });

        const result = await res.json();
        if (result.success && result.user?.email) {
          const userEmail = result.user.email;
          const userName = result.user.name || "";

          // Save to localStorage for persistent visitor tracking across sessions
          try {
            localStorage.setItem("anavya_user_email", userEmail);
            localStorage.setItem("user_email", userEmail);
            if (userName) localStorage.setItem("anavya_user_name", userName);
          } catch (e) {
            console.warn("[GoogleOneTap] LocalStorage save error:", e);
          }

          setSignedInUser({ email: userEmail, name: userName });
        }
      } catch (err) {
        console.error("[GoogleOneTap] Handle credential error:", err);
      }
    };

    // 4. Dynamically load Google Identity Services Script
    const scriptId = "google-gsi-script";
    let script = document.getElementById(scriptId);

    const initOneTap = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
          auto_select: false,
          cancel_on_tap_outside: false,
          itp_support: true,
          use_fedcm_for_prompt: true,
        });

        window.google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed()) {
            console.warn("[GoogleOneTap] Prompt not displayed reason:", notification.getNotDisplayedReason());
          } else if (notification.isSkippedMoment()) {
            console.warn("[GoogleOneTap] Prompt skipped reason:", notification.getSkippedReason());
          } else if (notification.isDismissedMoment()) {
            console.warn("[GoogleOneTap] Prompt dismissed reason:", notification.getDismissedReason());
          }
        });
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initOneTap;
      document.body.appendChild(script);
    } else {
      initOneTap();
    }
  }, [pathname]);

  if (!signedInUser) return null;

  return null;
}
