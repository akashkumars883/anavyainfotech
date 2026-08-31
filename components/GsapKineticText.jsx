"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapKineticText({ text, className = "", delay = 0 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = text.split(" ");
    container.innerHTML = "";

    words.forEach((word, wIdx) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.whiteSpace = "nowrap";
      wordSpan.style.marginRight = "0.28em";
      wordSpan.className = "will-change-transform";

      Array.from(word).forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.innerText = char;
        charSpan.style.display = "inline-block";
        charSpan.style.opacity = "0";
        charSpan.style.transform = "translateY(24px) rotateX(-90deg)";
        charSpan.className = "char-item";
        wordSpan.appendChild(charSpan);
      });

      container.appendChild(wordSpan);
    });

    const chars = container.querySelectorAll(".char-item");

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.7,
      stagger: 0.02,
      delay: delay,
      ease: "back.out(1.7)",
    });
  }, [text, delay]);

  return <span ref={containerRef} className={`inline-block ${className}`}>{text}</span>;
}
