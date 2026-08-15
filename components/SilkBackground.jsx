"use client";

import { useEffect, useRef } from "react";

export default function SilkBackground({
  speed = 1.0,
  scale = 1.0,
  color = "#1d4ed8",
  secondaryColor = "#3b82f6",
  noiseStrength = 0.5,
  interactive = true,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    let time = 0;

    // React Bits Silk Wave Ribbons Render Loop
    const render = () => {
      time += 0.006 * speed;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const numRibbons = 6;
      const pointsPerRibbon = 35;

      for (let r = 0; r < numRibbons; r++) {
        const progress = r / numRibbons;
        ctx.beginPath();

        const ribbonYOffset = height * (0.25 + progress * 0.5);
        const amplitude = (40 + r * 14) * scale;
        const wavelength = 0.0035 / scale;

        // Gradient for Silk Ribbon
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        const alpha = Math.max(0.06, 0.22 - progress * 0.025);

        if (r % 2 === 0) {
          gradient.addColorStop(0, `rgba(29, 78, 216, ${alpha})`); // Deep Blue
          gradient.addColorStop(0.5, `rgba(59, 130, 246, ${alpha * 1.4})`); // Light Blue Sheen
          gradient.addColorStop(1, `rgba(15, 23, 42, ${alpha * 0.4})`);
        } else {
          gradient.addColorStop(0, `rgba(59, 130, 246, ${alpha * 0.9})`);
          gradient.addColorStop(0.6, `rgba(99, 102, 241, ${alpha * 1.3})`); // Indigo Silk
          gradient.addColorStop(1, `rgba(29, 78, 216, ${alpha * 0.3})`);
        }

        ctx.fillStyle = gradient;
        ctx.strokeStyle = `rgba(147, 197, 253, ${alpha * 0.7})`;
        ctx.lineWidth = 1.2;

        ctx.moveTo(0, height);

        // Top wave path of silk ribbon
        for (let i = 0; i <= pointsPerRibbon; i++) {
          const x = (i / pointsPerRibbon) * width;

          // React Bits Silk Wave Equation
          const mouseDist = (x - mouse.x) / width;
          const mouseInfluence = Math.exp(-mouseDist * mouseDist * 5) * (mouse.y - height / 2) * 0.3;

          const wave1 = Math.sin(x * wavelength + time * (1 + r * 0.25) + r * 1.2) * amplitude;
          const wave2 = Math.cos(x * wavelength * 1.6 - time * 0.7 + r * 1.4) * (amplitude * 0.5);
          const wave3 = Math.sin(x * wavelength * 0.4 + time * 0.3) * 15;

          const y = ribbonYOffset + wave1 + wave2 + wave3 + mouseInfluence;

          if (i === 0) {
            ctx.lineTo(x, y);
          } else {
            const prevX = ((i - 1) / pointsPerRibbon) * width;
            const xc = (prevX + x) / 2;
            ctx.quadraticCurveTo(prevX, y, xc, y);
          }
        }

        // Complete polygon down to bottom
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [speed, scale, color, secondaryColor, noiseStrength, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
    />
  );
}
