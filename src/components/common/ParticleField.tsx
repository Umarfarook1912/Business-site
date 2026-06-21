"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { PARTICLE_FIELD } from "@/lib/constants/animations";
import type { ParticleFieldProps } from "@/types";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

export function ParticleField({ className }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from(
      { length: PARTICLE_FIELD.count },
      () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size:
          Math.random() *
            (PARTICLE_FIELD.maxSize - PARTICLE_FIELD.minSize) +
          PARTICLE_FIELD.minSize,
        speedX: (Math.random() - 0.5) * PARTICLE_FIELD.speed,
        speedY: (Math.random() - 0.5) * PARTICLE_FIELD.speed,
        opacity: Math.random() * 0.5 + 0.2,
      })
    );

    let frameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.4})`; // softer white particles
        ctx.fill();
      }

      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    />
  );
}
