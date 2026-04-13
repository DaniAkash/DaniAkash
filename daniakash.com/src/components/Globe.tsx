import { useSpring } from "@react-spring/web";
import createGlobe from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { ASSET_PREFIX } from "../constants/asset-prefix";

interface DestinationInput {
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  category: "science" | "culture" | "cinema";
  significance: string;
  wikipedia: string;
  "image-name": string;
}

interface Destination {
  n: string;
  c: string;
  loc: [number, number];
  cat: "s" | "c" | "i";
  w: string;
  sig: string;
  img: string;
}

const CAT_MAP: Record<string, "s" | "c" | "i"> = {
  science: "s",
  culture: "c",
  cinema: "i",
};

function mapDestinations(input: DestinationInput[]): Destination[] {
  return input.map((d) => ({
    n: d.name,
    c: `${d.city}, ${d.country}`,
    loc: [d.lat, d.lng],
    cat: CAT_MAP[d.category] ?? "s",
    w: d.wikipedia,
    sig: d.significance,
    img: `${ASSET_PREFIX}/destinations/${d["image-name"]}`,
  }));
}

const CAT_COLORS: Record<string, string> = {
  s: "bg-primary",
  c: "bg-amber-500",
  i: "bg-rose-400",
};

// Replicate cobe's exact internal projection (from cobe source: functions U, O, W)
function cobeLatLngTo3D(lat: number, lng: number): [number, number, number] {
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latRad);
  return [
    -cosLat * Math.cos(lngRad),
    Math.sin(latRad),
    cosLat * Math.sin(lngRad),
  ];
}

function projectMarker(
  lat: number,
  lng: number,
  phi: number,
  theta: number,
  width: number,
  height: number,
): { x: number; y: number; visible: boolean } {
  const t = cobeLatLngTo3D(lat, lng);
  const elevation = 0.85; // cobe ee(0.8) + markerElevation(0.05)
  const p0 = t[0] * elevation;
  const p1 = t[1] * elevation;
  const p2 = t[2] * elevation;

  // Cobe's O() function: rotation by phi (f) and theta (l)
  const cosTheta = Math.cos(theta);
  const sinTheta = Math.sin(theta);
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);

  const c = cosPhi * p0 + sinPhi * p2;
  const s = sinPhi * sinTheta * p0 + cosTheta * p1 - cosPhi * sinTheta * p2;

  // Cobe returns [0-1] percentages. Scale=1, offset=[0,0] for our case.
  const aspect = width / height;
  const px = (c / aspect + 1) / 2;
  const py = (-s + 1) / 2;

  // Visibility check from cobe
  const visible =
    -sinPhi * cosTheta * p0 + sinTheta * p1 + cosPhi * cosTheta * p2 >= 0 ||
    c * c + s * s >= 0.64;

  return { x: px * width, y: py * height, visible };
}

interface GlobeProps {
  destinations: DestinationInput[];
}

export default function Globe({ destinations: destinationsProp }: GlobeProps) {
  const DESTINATIONS = mapDestinations(destinationsProp);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const polaroidRef = useRef<HTMLAnchorElement>(null);
  const [startIdx] = useState(() =>
    Math.floor(Math.random() * DESTINATIONS.length),
  );
  const [currentIdx, setCurrentIdx] = useState(startIdx);
  const initialPhi =
    -(DESTINATIONS[startIdx]!.loc[1] * (Math.PI / 180)) - Math.PI / 2;
  const phiRef = useRef(initialPhi);
  const targetPhiRef = useRef(initialPhi);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const animRef = useRef<number | null>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentIdxRef = useRef(startIdx);
  const pointerRef = useRef<number | null>(null);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 40 },
  }));

  const d = DESTINATIONS[currentIdx]!;

  const updateDestination = useCallback((idx: number) => {
    currentIdxRef.current = idx;
    const dest = DESTINATIONS[idx]!;
    const lngRad = dest.loc[1] * (Math.PI / 180);
    targetPhiRef.current = -lngRad - Math.PI / 2;
    if (globeRef.current) {
      globeRef.current.update({
        markers: [{ location: dest.loc, size: 0.03 }],
      });
    }
  }, []);

  const switchTo = useCallback(
    (idx: number) => {
      const wrapped =
        ((idx % DESTINATIONS.length) + DESTINATIONS.length) %
        DESTINATIONS.length;
      setCurrentIdx(wrapped);
      updateDestination(wrapped);
    },
    [updateDestination],
  );

  const next = useCallback(() => {
    setCurrentIdx((prev) => {
      const nextIdx = (prev + 1) % DESTINATIONS.length;
      updateDestination(nextIdx);
      return nextIdx;
    });
  }, [updateDestination]);

  const prev = useCallback(() => {
    setCurrentIdx((prev) => {
      const nextIdx = (prev - 1 + DESTINATIONS.length) % DESTINATIONS.length;
      updateDestination(nextIdx);
      return nextIdx;
    });
  }, [updateDestination]);

  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = useCallback(() => {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    let pct = 0;
    if (progressBarRef.current) progressBarRef.current.style.width = "0%";
    const interval = 100;
    const duration = 30000;
    const step = (interval / duration) * 100;
    progressTimerRef.current = setInterval(() => {
      pct = Math.min(pct + step, 100);
      if (progressBarRef.current) progressBarRef.current.style.width = pct + "%";
    }, interval);
  }, []);

  const resetTimer = useCallback(() => {
    if (cycleRef.current) clearInterval(cycleRef.current);
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    cycleRef.current = setInterval(() => {
      next();
      startProgress();
    }, 30000);
    startProgress();
  }, [next, startProgress]);

  // Create globe
  useEffect(() => {
    if (!canvasRef.current || !wrapRef.current) return;

    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const isDark = document.documentElement.classList.contains("dark");
    const w = wrap.offsetWidth;
    const h = wrap.offsetHeight;

    if (globeRef.current) globeRef.current.destroy();
    if (animRef.current) cancelAnimationFrame(animRef.current);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: w * 2,
      height: h * 2,
      phi: phiRef.current,
      theta: 0.15,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      mapBaseBrightness: 0.05,
      baseColor: isDark ? [0.3, 0.3, 0.3] : [1, 1, 1],
      markerColor: isDark ? [0.18, 0.83, 0.75] : [0.05, 0.58, 0.53],
      glowColor: isDark ? [0.15, 0.15, 0.2] : [1, 1, 1],
      markers: [{ location: DESTINATIONS[currentIdx]!.loc, size: 0.03 }],
    });
    globeRef.current = globe;

    const theta = 0.15;
    function animate() {
      let diff = targetPhiRef.current - phiRef.current;
      while (diff > Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      phiRef.current += diff * 0.03;
      const finalPhi = phiRef.current + r.get();
      globe.update({ phi: finalPhi });

      // Position polaroid on the marker
      if (polaroidRef.current && wrapRef.current) {
        const dest = DESTINATIONS[currentIdxRef.current]!;
        const wrapW = wrapRef.current.offsetWidth;
        const wrapH = wrapRef.current.offsetHeight;
        const proj = projectMarker(
          dest.loc[0],
          dest.loc[1],
          finalPhi,
          theta,
          wrapW,
          wrapH,
        );

        if (proj.visible) {
          polaroidRef.current.style.opacity = "1";
          polaroidRef.current.style.filter = "none";
          // Clamp so polaroid (140px wide) doesn't overflow either edge
          const clampedX = Math.min(proj.x, wrapW - 70); // 70 = half of 140px card width
          const clampedX2 = Math.max(clampedX, 70);
          polaroidRef.current.style.left = `${clampedX2}px`;
          polaroidRef.current.style.top = `${proj.y}px`;
          polaroidRef.current.style.transform =
            "translate(-50%, -100%) translateY(-12px)";
        } else {
          polaroidRef.current.style.opacity = "0";
          polaroidRef.current.style.filter = "blur(4px)";
        }
      }

      animRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Auto-cycle
    cycleRef.current = setInterval(() => {
      next();
      startProgress();
    }, 30000);
    startProgress();

    // Theme observer
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains("dark");
      if (globeRef.current) globeRef.current.destroy();
      if (animRef.current) cancelAnimationFrame(animRef.current);

      const newGlobe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: wrap.offsetWidth * 2,
        height: wrap.offsetHeight * 2,
        phi: phiRef.current,
        theta: 0.15,
        dark: dark ? 1 : 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        mapBaseBrightness: 0.05,
        baseColor: dark ? [0.3, 0.3, 0.3] : [1, 1, 1],
        markerColor: dark ? [0.18, 0.83, 0.75] : [0.05, 0.58, 0.53],
        glowColor: dark ? [0.15, 0.15, 0.2] : [1, 1, 1],
        markers: [{ location: DESTINATIONS[currentIdx]!.loc, size: 0.03 }],
      });
      globeRef.current = newGlobe;

      function animateNew() {
        let diff = targetPhiRef.current - phiRef.current;
        while (diff > Math.PI) diff -= 2 * Math.PI;
        while (diff < -Math.PI) diff += 2 * Math.PI;
        phiRef.current += diff * 0.03;
        newGlobe.update({ phi: phiRef.current });
        animRef.current = requestAnimationFrame(animateNew);
      }
      animateNew();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        observer.disconnect();
        // Trigger re-mount by observer logic
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["class"],
        });
      }, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (globeRef.current) globeRef.current.destroy();
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (cycleRef.current) clearInterval(cycleRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val >= 1 && val <= DESTINATIONS.length) {
      switchTo(val - 1);
      resetTimer();
    }
  };

  return (
    <div className="flex h-full flex-col">
      {/* Globe */}
      <div ref={wrapRef} className="globe-wrap">
        <canvas
          ref={canvasRef}
          className="block h-full w-full cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => {
            pointerRef.current = e.clientX;
            if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
          }}
          onPointerMove={(e) => {
            if (pointerRef.current !== null) {
              const delta = e.clientX - pointerRef.current;
              api.start({ r: delta / 200 });
            }
          }}
          onPointerUp={() => {
            pointerRef.current = null;
            api.start({ r: 0 });
            if (canvasRef.current) canvasRef.current.style.cursor = "grab";
          }}
          onPointerLeave={() => {
            if (pointerRef.current !== null) {
              pointerRef.current = null;
              api.start({ r: 0 });
              if (canvasRef.current) canvasRef.current.style.cursor = "grab";
            }
          }}
        />
        {/* Polaroid card — anchored to marker, clickable */}
        <a
          ref={polaroidRef}
          href={d.w}
          target="_blank"
          rel="noopener"
          className="polaroid"
          style={{
            transition: "opacity 0.6s, filter 0.6s, left 0.3s, top 0.3s",
            pointerEvents: "auto",
          }}
        >
          <img src={d.img} alt={d.n} className="polaroid-img" />
          <div className="polaroid-caption">{d.n}</div>
        </a>
        <span className="absolute bottom-2 right-4 pointer-events-none font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">
          DESTINATIONS // WISHLIST
        </span>
      </div>

      {/* Progress line */}
      <div className="relative h-[2px] bg-foreground/10">
        <div
          ref={progressBarRef}
          className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-100 ease-linear"
          style={{ width: "0%" }}
        />
      </div>

      {/* Spotlight panel */}
      <div
        className="spotlight"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a, button, input")) return;
          next();
          resetTimer();
        }}
      >
        <span
          className={`mt-1.5 size-2.5 shrink-0 rounded-full ${CAT_COLORS[d.cat]}`}
        />
        <div className="min-w-0 flex-1">
          <a
            href={d.w}
            target="_blank"
            rel="noopener"
            className="block truncate text-[15px] font-semibold leading-tight text-foreground hover:text-primary hover:underline hover:underline-offset-2"
            onClick={(e) => e.stopPropagation()}
          >
            {d.n}
          </a>
          <div className="mt-0.5 truncate font-mono text-[11px] text-muted-foreground">
            {d.c}
          </div>
          <div
            className="mt-1 line-clamp-1 text-[13px] leading-snug text-muted-foreground/80 sm:line-clamp-2"
            title={d.sig}
          >
            {d.sig}
          </div>
        </div>
        <div className="mt-1 flex shrink-0 items-center gap-2">
          <button
            className="spotlight-btn"
            onClick={(e) => {
              e.stopPropagation();
              prev();
              resetTimer();
            }}
            aria-label="Previous"
          >
            ←
          </button>
          <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
            <input
              type="number"
              className="spotlight-input"
              min={1}
              max={DESTINATIONS.length}
              value={currentIdx + 1}
              onChange={handleInputChange}
              onClick={(e) => e.stopPropagation()}
            />
            / {DESTINATIONS.length}
          </span>
          <button
            className="spotlight-btn"
            onClick={(e) => {
              e.stopPropagation();
              next();
              resetTimer();
            }}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
