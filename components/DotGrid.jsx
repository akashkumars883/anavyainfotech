"use client";

import { useEffect, useRef } from "react";

export default function DotGrid({
  dotSize = 2.5,
  dotSpacing = 28,
  dotColor = "#cbd5e1",
  activeColor = "#1d4ed8",
  interactionRadius = 140,
  maxDisplacement = 18,
  speed = 0.14,
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

    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initDots();
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let dots = [];

    const initDots = () => {
      dots = [];
      const cols = Math.ceil(width / dotSpacing) + 2;
      const rows = Math.ceil(height / dotSpacing) + 2;

      const offsetX = (width - (cols - 1) * dotSpacing) / 2;
      const offsetY = (height - (rows - 1) * dotSpacing) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const originX = offsetX + c * dotSpacing;
          const originY = offsetY + r * dotSpacing;
          dots.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            scale: 1,
          });
        }
      }
    };

    initDots();

    // React Bits Interactive Dot Grid Physics Loop
    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;

      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        const dx = dot.originX - mouse.x;
        const dy = dot.originY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetDisplacementX = 0;
        let targetDisplacementY = 0;
        let targetScale = 1;
        let isActive = false;

        if (dist < interactionRadius) {
          const force = (1 - dist / interactionRadius);
          const angle = Math.atan2(dy, dx);

          // Displace dots upward and outward away from cursor (React Bits Physics)
          targetDisplacementX = Math.cos(angle) * force * maxDisplacement;
          targetDisplacementY = Math.sin(angle) * force * maxDisplacement - (force * 14); // Upward lift
          targetScale = 1 + force * 1.7;
          isActive = true;
        }

        const targetX = dot.originX + targetDisplacementX;
        const targetY = dot.originY + targetDisplacementY;

        dot.vx += (targetX - dot.x) * speed;
        dot.vy += (targetY - dot.y) * speed;
        dot.vx *= 0.8;
        dot.vy *= 0.8;

        dot.x += dot.vx;
        dot.y += dot.vy;

        dot.scale += (targetScale - dot.scale) * 0.25;

        // Draw Dot
        ctx.save();
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize * dot.scale, 0, Math.PI * 2);

        if (isActive) {
          ctx.fillStyle = activeColor;
          ctx.shadowColor = activeColor;
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = dotColor;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dotSize, dotSpacing, dotColor, activeColor, interactionRadius, maxDisplacement, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
    />
  );
}
