import { useCallback, useEffect, useRef } from "react";

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });

  const isDark = useCallback(() => {
    return document.documentElement.classList.contains("dark");
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      targetMouseRef.current.x = e.clientX / width;
      targetMouseRef.current.y = e.clientY / height;
    };
    document.addEventListener("mousemove", onMouseMove);

    function draw() {
      if (!ctx) return;
      timeRef.current += 0.003;
      const time = timeRef.current;
      const mouse = mouseRef.current;
      const targetMouse = targetMouseRef.current;

      mouse.x += (targetMouse.x - mouse.x) * 0.02;
      mouse.y += (targetMouse.y - mouse.y) * 0.02;

      ctx.clearRect(0, 0, width, height);

      const dark = isDark();

      // Soft gradient orbs
      const orbs = [
        {
          x: width * (0.15 + Math.sin(time * 0.7) * 0.08 + mouse.x * 0.05),
          y: height * (0.3 + Math.cos(time * 0.5) * 0.1 + mouse.y * 0.03),
          r: Math.min(width, height) * 0.4,
          color: dark ? "rgba(45, 212, 191," : "rgba(13, 148, 136,",
          alpha: dark ? 0.15 : 0.08,
        },
        {
          x: width * (0.75 + Math.cos(time * 0.6) * 0.06 - mouse.x * 0.03),
          y: height * (0.6 + Math.sin(time * 0.4) * 0.08 - mouse.y * 0.04),
          r: Math.min(width, height) * 0.35,
          color: dark ? "rgba(99, 102, 241," : "rgba(79, 70, 229,",
          alpha: dark ? 0.12 : 0.06,
        },
        {
          x: width * (0.5 + Math.sin(time * 0.3 + 1.5) * 0.1),
          y: height * (0.15 + Math.cos(time * 0.35) * 0.05),
          r: Math.min(width, height) * 0.3,
          color: dark ? "rgba(168, 85, 247," : "rgba(147, 51, 234,",
          alpha: dark ? 0.08 : 0.04,
        },
      ];

      for (const orb of orbs) {
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.r,
        );
        gradient.addColorStop(0, `${orb.color}${orb.alpha})`);
        gradient.addColorStop(0.5, `${orb.color}${orb.alpha * 0.5})`);
        gradient.addColorStop(1, `${orb.color}0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Sweeping light arc
      ctx.save();
      const arcX =
        width * (0.25 + Math.sin(time * 0.2) * 0.05 + mouse.x * 0.05);
      const arcY = height * 0.5;
      const arcR = Math.min(width, height) * 0.6;

      const sweepAlpha = dark ? 0.2 : 0.1;
      const sweepGradient = ctx.createRadialGradient(
        arcX,
        arcY,
        arcR * 0.85,
        arcX,
        arcY,
        arcR,
      );
      sweepGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      sweepGradient.addColorStop(0.92, "rgba(255, 255, 255, 0)");
      sweepGradient.addColorStop(
        0.96,
        dark
          ? `rgba(180, 220, 255, ${sweepAlpha})`
          : `rgba(100, 160, 200, ${sweepAlpha})`,
      );
      sweepGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = sweepGradient;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 size-full opacity-60 dark:opacity-100"
      style={{ mixBlendMode: "normal" }}
    />
  );
}
