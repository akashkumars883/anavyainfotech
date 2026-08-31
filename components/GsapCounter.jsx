"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapCounter({ end, prefix = "", suffix = "", duration = 2, decimals = 0, className = "" }) {
  const countRef = useRef(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const targetVal = parseFloat(end);
    const obj = { val: 0 };

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: targetVal,
          duration: duration,
          ease: "power2.out",
          onUpdate: () => {
            if (el) {
              const formattedVal = decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val).toLocaleString();
              el.innerText = `${prefix}${formattedVal}${suffix}`;
            }
          },
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [end, prefix, suffix, duration, decimals]);

  return <span ref={countRef} className={className}>{prefix}0{suffix}</span>;
}
