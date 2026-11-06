import createGlobe from "cobe";
import { useEffect, useRef } from "react";

interface GlobeMiniProps {
  markers: [number, number][];
}

export default function GlobeMini({ markers }: GlobeMiniProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // cobe owns a WebGL canvas and its own animation loop, so it has to be wired up imperatively.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = canvas.offsetWidth;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let phi = 4.2;
    let visible = true;
    let frame = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi,
      theta: 0.3,
      dark: 1,
      diffuse: 1.1,
      mapSamples: 12000,
      mapBrightness: 5,
      mapBaseBrightness: 0.02,
      baseColor: [0.32, 0.31, 0.36],
      markerColor: [1, 0.84, 0.3],
      glowColor: [0.16, 0.15, 0.19],
      markers: markers.map((location) => ({ location, size: 0.045 })),
    });

    const observer = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
    });
    observer.observe(canvas);

    function animate() {
      if (visible && !reduceMotion) {
        phi += 0.0035;
        globe.update({ phi });
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    canvas.style.opacity = "1";

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      globe.destroy();
    };
  }, [markers]);

  return (
    <canvas
      ref={canvasRef}
      className="aspect-square w-full opacity-0 transition-opacity duration-700"
    />
  );
}
