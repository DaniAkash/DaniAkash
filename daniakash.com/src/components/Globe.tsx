import { useSpring } from "@react-spring/web";
import createGlobe from "cobe";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  s: "bg-yellow",
  c: "bg-green",
  i: "bg-pink",
};

// The globe always sits on the ink tile, so it renders dark in both site themes.
const GLOBE_COLORS = {
  dark: 1,
  baseColor: [0.32, 0.31, 0.36] as [number, number, number],
  markerColor: [1, 0.84, 0.3] as [number, number, number],
  glowColor: [0.16, 0.15, 0.19] as [number, number, number],
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
  const DESTINATIONS = useMemo(
    () => mapDestinations(destinationsProp),
    [destinationsProp],
  );

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

  const updateDestination = useCallback(
    (idx: number) => {
      currentIdxRef.current = idx;
      const dest = DESTINATIONS[idx]!;
      const lngRad = dest.loc[1] * (Math.PI / 180);
      targetPhiRef.current = -lngRad - Math.PI / 2;
      if (globeRef.current) {
        globeRef.current.update({
          markers: [{ location: dest.loc, size: 0.04 }],
        });
      }
    },
    [DESTINATIONS],
  );

  const switchTo = useCallback(
    (idx: number) => {
      const wrapped =
        ((idx % DESTINATIONS.length) + DESTINATIONS.length) %
        DESTINATIONS.length;
      setCurrentIdx(wrapped);
      updateDestination(wrapped);
    },
    [DESTINATIONS, updateDestination],
  );

  const next = useCallback(() => {
    setCurrentIdx((prev) => {
      const nextIdx = (prev + 1) % DESTINATIONS.length;
      updateDestination(nextIdx);
      return nextIdx;
    });
  }, [DESTINATIONS, updateDestination]);

  const prev = useCallback(() => {
    setCurrentIdx((prev) => {
      const nextIdx = (prev - 1 + DESTINATIONS.length) % DESTINATIONS.length;
      updateDestination(nextIdx);
      return nextIdx;
    });
  }, [DESTINATIONS, updateDestination]);

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
      if (progressBarRef.current)
        progressBarRef.current.style.width = `${pct}%`;
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
  // biome-ignore lint/correctness/useExhaustiveDependencies: this effect intentionally runs once on mount; the globe is recreated internally by the theme/resize observers, not by React effect re-runs.
  useEffect(() => {
    if (!canvasRef.current || !wrapRef.current) return;

    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
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
      ...GLOBE_COLORS,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      mapBaseBrightness: 0.03,
      markers: [{ location: DESTINATIONS[currentIdx]!.loc, size: 0.04 }],
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
      if (globeRef.current) globeRef.current.destroy();
      if (animRef.current) cancelAnimationFrame(animRef.current);

      const newGlobe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: wrap.offsetWidth * 2,
        height: wrap.offsetHeight * 2,
        phi: phiRef.current,
        theta: 0.15,
        ...GLOBE_COLORS,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        mapBaseBrightness: 0.03,
        markers: [{ location: DESTINATIONS[currentIdx]!.loc, size: 0.04 }],
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
    const val = Number.parseInt(e.target.value, 10);
    if (val >= 1 && val <= DESTINATIONS.length) {
      switchTo(val - 1);
      resetTimer();
    }
  };

  const arrow = (direction: "left" | "right") => (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      {direction === "left" ? (
        <>
          <path d="M19 12H5" />
          <path d="m11 6-6 6 6 6" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
    </svg>
  );

  return (
    <div className="flex h-full flex-col gap-3">
      {/* Globe */}
      <div ref={wrapRef} className="relative min-h-0 flex-1 overflow-hidden">
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
        {/* Polaroid card, anchored to the marker and clickable */}
        <a
          ref={polaroidRef}
          href={d.w}
          target="_blank"
          rel="noopener"
          className="absolute z-[3] w-[140px] overflow-hidden rounded-xl bg-on-ink p-1.5 text-ink opacity-0"
          style={{
            transition: "opacity 0.6s, filter 0.6s, left 0.3s, top 0.3s",
            pointerEvents: "auto",
          }}
        >
          <img
            src={d.img}
            alt={d.n}
            className="block aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div className="truncate px-1 pt-1.5 pb-0.5 text-center font-medium text-xs">
            {d.n}
          </div>
        </a>
      </div>

      {/* Progress line */}
      <div className="relative h-1 overflow-hidden rounded-full bg-on-ink/15">
        <div
          ref={progressBarRef}
          className="absolute inset-y-0 left-0 rounded-full bg-yellow transition-[width] duration-100 ease-linear"
          style={{ width: "0%" }}
        />
      </div>

      {/* Spotlight panel: clicking empty area advances destination as a mouse affordance; keyboard users use the Prev/Next buttons inside. */}
      {/* biome-ignore lint/a11y/noStaticElementInteractions: redundant mouse affordance; keyboard equivalents are the Prev/Next buttons rendered inside this panel. */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: see note above; keyboard equivalent is the Prev/Next buttons inside this panel. */}
      <div
        className="flex min-h-[112px] cursor-pointer items-start gap-3 rounded-2xl bg-on-ink/[0.07] p-4 transition-colors hover:bg-on-ink/[0.11] sm:gap-4 sm:px-5"
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
            className="block truncate font-semibold text-[15px] text-on-ink leading-tight underline-offset-4 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {d.n}
          </a>
          <div className="mt-0.5 truncate text-on-ink-muted text-xs">{d.c}</div>
          <div
            className="mt-1 line-clamp-1 text-on-ink-muted text-sm leading-snug sm:line-clamp-2"
            title={d.sig}
          >
            {d.sig}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-on-ink/10 text-on-ink transition-colors hover:bg-yellow hover:text-on-yellow"
            onClick={(e) => {
              e.stopPropagation();
              prev();
              resetTimer();
            }}
            aria-label="Previous destination"
          >
            {arrow("left")}
          </button>
          <span className="flex items-center gap-1 font-mono text-on-ink-muted text-xs">
            <input
              type="number"
              aria-label="Destination number"
              className="h-8 w-10 appearance-none rounded-lg bg-on-ink/10 p-0 text-center font-mono text-on-ink text-xs outline-none [-moz-appearance:textfield] focus-visible:ring-2 focus-visible:ring-yellow [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min={1}
              max={DESTINATIONS.length}
              value={currentIdx + 1}
              onChange={handleInputChange}
              onClick={(e) => e.stopPropagation()}
            />
            / {DESTINATIONS.length}
          </span>
          <button
            type="button"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-on-ink/10 text-on-ink transition-colors hover:bg-yellow hover:text-on-yellow"
            onClick={(e) => {
              e.stopPropagation();
              next();
              resetTimer();
            }}
            aria-label="Next destination"
          >
            {arrow("right")}
          </button>
        </div>
      </div>
    </div>
  );
}
