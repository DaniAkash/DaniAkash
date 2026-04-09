import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

interface Destination {
  n: string;
  c: string;
  loc: [number, number];
  cat: "s" | "c" | "i";
  w: string;
  sig: string;
}

const DESTINATIONS: Destination[] = [
  {n:"Great Pyramid of Giza",c:"Giza, Egypt",loc:[29.98,31.13],cat:"s",w:"https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",sig:"Last surviving Wonder of the Ancient World, built ~2560 BCE"},
  {n:"CERN — Large Hadron Collider",c:"Geneva, Switzerland",loc:[46.23,6.05],cat:"s",w:"https://en.wikipedia.org/wiki/Large_Hadron_Collider",sig:"World's largest particle accelerator. Site of the Higgs boson discovery"},
  {n:"Colosseum",c:"Rome, Italy",loc:[41.89,12.49],cat:"s",w:"https://en.wikipedia.org/wiki/Colosseum",sig:"Largest ancient amphitheatre ever built (70-80 CE)"},
  {n:"Machu Picchu",c:"Cusco, Peru",loc:[-13.16,-72.55],cat:"s",w:"https://en.wikipedia.org/wiki/Machu_Picchu",sig:"15th-century Inca citadel at 2,430m altitude"},
  {n:"NASA Kennedy Space Center",c:"Florida, USA",loc:[28.57,-80.65],cat:"s",w:"https://en.wikipedia.org/wiki/Kennedy_Space_Center",sig:"Primary launch site for Apollo Moon missions and Space Shuttle"},
  {n:"Stonehenge",c:"Wiltshire, England",loc:[51.18,-1.83],cat:"s",w:"https://en.wikipedia.org/wiki/Stonehenge",sig:"Prehistoric monument aligned with solstices (~3000 BCE)"},
  {n:"Acropolis & Parthenon",c:"Athens, Greece",loc:[37.97,23.73],cat:"s",w:"https://en.wikipedia.org/wiki/Acropolis_of_Athens",sig:"Birthplace of democracy and classical architecture"},
  {n:"Galápagos Islands",c:"Ecuador",loc:[-0.95,-90.97],cat:"s",w:"https://en.wikipedia.org/wiki/Gal%C3%A1pagos_Islands",sig:"Darwin's living laboratory of evolution"},
  {n:"Hiroshima Peace Memorial",c:"Hiroshima, Japan",loc:[34.40,132.45],cat:"s",w:"https://en.wikipedia.org/wiki/Hiroshima_Peace_Memorial",sig:"Symbol of nuclear devastation and the global peace movement"},
  {n:"Bibliotheca Alexandrina",c:"Alexandria, Egypt",loc:[31.21,29.91],cat:"s",w:"https://en.wikipedia.org/wiki/Bibliotheca_Alexandrina",sig:"Modern revival of the ancient Great Library"},
  {n:"Pompeii",c:"Naples, Italy",loc:[40.75,14.48],cat:"s",w:"https://en.wikipedia.org/wiki/Pompeii",sig:"Roman city preserved by Vesuvius eruption in 79 CE"},
  {n:"Chernobyl Exclusion Zone",c:"Pripyat, Ukraine",loc:[51.39,30.10],cat:"s",w:"https://en.wikipedia.org/wiki/Chernobyl_Exclusion_Zone",sig:"Site of the 1986 nuclear disaster"},
  {n:"Jantar Mantar",c:"Jaipur, India",loc:[26.92,75.82],cat:"s",w:"https://en.wikipedia.org/wiki/Jantar_Mantar,_Jaipur",sig:"18th-century astronomical site with world's largest stone sundial"},
  {n:"Great Wall of China",c:"Beijing, China",loc:[40.43,116.57],cat:"s",w:"https://en.wikipedia.org/wiki/Great_Wall_of_China",sig:"Largest military structure ever built"},
  {n:"Trinity Test Site",c:"New Mexico, USA",loc:[33.68,-106.48],cat:"s",w:"https://en.wikipedia.org/wiki/Trinity_(nuclear_test)",sig:"Site of the first nuclear weapon detonation, 1945"},
  {n:"Petra",c:"Jordan",loc:[30.33,35.44],cat:"s",w:"https://en.wikipedia.org/wiki/Petra",sig:"Ancient city carved into rose-red rock cliffs (~300 BCE)"},
  {n:"Olduvai Gorge",c:"Tanzania",loc:[-2.99,35.35],cat:"s",w:"https://en.wikipedia.org/wiki/Olduvai_Gorge",sig:"2 million years of hominin evolution discovered here"},
  {n:"Royal Greenwich Observatory",c:"London, England",loc:[51.48,-0.001],cat:"s",w:"https://en.wikipedia.org/wiki/Royal_Observatory,_Greenwich",sig:"Home of the Prime Meridian and Greenwich Mean Time"},
  {n:"Angkor Wat",c:"Siem Reap, Cambodia",loc:[13.41,103.87],cat:"s",w:"https://en.wikipedia.org/wiki/Angkor_Wat",sig:"World's largest religious monument, 12th century"},
  {n:"Mohenjo-daro",c:"Sindh, Pakistan",loc:[27.32,68.14],cat:"s",w:"https://en.wikipedia.org/wiki/Mohenjo-daro",sig:"Indus Valley Civilisation — one of the world's earliest cities"},
  {n:"Deutsches Museum",c:"Munich, Germany",loc:[48.13,11.58],cat:"s",w:"https://en.wikipedia.org/wiki/Deutsches_Museum",sig:"World's largest museum of science and technology"},
  {n:"Easter Island",c:"Chile",loc:[-27.11,-109.35],cat:"s",w:"https://en.wikipedia.org/wiki/Easter_Island",sig:"Nearly 1,000 monolithic Moai statues"},
  {n:"Darwin's Down House",c:"Kent, England",loc:[51.33,0.05],cat:"s",w:"https://en.wikipedia.org/wiki/Down_House",sig:"Where Darwin wrote 'On the Origin of Species'"},
  {n:"Taj Mahal",c:"Agra, India",loc:[27.18,78.04],cat:"s",w:"https://en.wikipedia.org/wiki/Taj_Mahal",sig:"Mughal architectural masterpiece completed in 1653"},
  {n:"Arecibo Observatory",c:"Puerto Rico",loc:[18.35,-66.75],cat:"s",w:"https://en.wikipedia.org/wiki/Arecibo_Observatory",sig:"Once the world's largest radio telescope (1963-2020)"},
  {n:"Valley of the Kings",c:"Luxor, Egypt",loc:[25.74,32.60],cat:"s",w:"https://en.wikipedia.org/wiki/Valley_of_the_Kings",sig:"Tutankhamun's tomb discovered here in 1922"},
  {n:"Smithsonian Air & Space Museum",c:"Washington DC, USA",loc:[38.89,-77.02],cat:"s",w:"https://en.wikipedia.org/wiki/National_Air_and_Space_Museum",sig:"Wright Flyer, Apollo 11, Spirit of St. Louis"},
  {n:"Göbekli Tepe",c:"Şanlıurfa, Turkey",loc:[37.22,38.92],cat:"s",w:"https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe",sig:"World's oldest known megalithic temple (~9500 BCE)"},
  {n:"Alhambra",c:"Granada, Spain",loc:[37.18,-3.59],cat:"s",w:"https://en.wikipedia.org/wiki/Alhambra",sig:"Peak of Moorish Islamic art and hydraulic engineering"},
  {n:"Nalanda University Ruins",c:"Bihar, India",loc:[25.14,85.44],cat:"s",w:"https://en.wikipedia.org/wiki/Nalanda",sig:"One of the world's first residential universities"},
  {n:"Teotihuacan",c:"Mexico",loc:[19.69,-98.84],cat:"s",w:"https://en.wikipedia.org/wiki/Teotihuacan",sig:"Pyramid of the Sun — largest structure in ancient Americas"},
  {n:"Musée Curie",c:"Paris, France",loc:[48.84,2.34],cat:"s",w:"https://en.wikipedia.org/wiki/Mus%C3%A9e_Curie",sig:"Where Marie Curie researched radioactivity"},
  {n:"Terracotta Army",c:"Xi'an, China",loc:[34.38,109.28],cat:"s",w:"https://en.wikipedia.org/wiki/Terracotta_Army",sig:"Thousands of life-size clay soldiers (~210 BCE)"},
  {n:"Bletchley Park",c:"Milton Keynes, England",loc:[52.00,-0.74],cat:"s",w:"https://en.wikipedia.org/wiki/Bletchley_Park",sig:"Alan Turing cracked the Enigma code here"},
  {n:"Hagia Sophia",c:"Istanbul, Turkey",loc:[41.01,28.98],cat:"s",w:"https://en.wikipedia.org/wiki/Hagia_Sophia",sig:"World's largest dome for nearly a millennium (537 CE)"},
  {n:"Chichén Itzá",c:"Yucatán, Mexico",loc:[20.68,-88.57],cat:"s",w:"https://en.wikipedia.org/wiki/Chichen_Itza",sig:"Mayan pyramid with equinox serpent shadow"},
  {n:"Los Alamos National Lab",c:"New Mexico, USA",loc:[35.88,-106.30],cat:"s",w:"https://en.wikipedia.org/wiki/Los_Alamos_National_Laboratory",sig:"Birthplace of the Manhattan Project"},
  {n:"Lascaux Caves",c:"Dordogne, France",loc:[45.05,1.17],cat:"s",w:"https://en.wikipedia.org/wiki/Lascaux",sig:"17,000-year-old Paleolithic cave paintings"},
  {n:"Konark Sun Temple",c:"Odisha, India",loc:[19.89,86.09],cat:"s",w:"https://en.wikipedia.org/wiki/Konark_Sun_Temple",sig:"Giant chariot with wheels functioning as sundials"},
  {n:"Dead Sea Scrolls Caves",c:"Qumran",loc:[31.74,35.46],cat:"s",w:"https://en.wikipedia.org/wiki/Qumran",sig:"Oldest manuscripts of the Hebrew Bible"},
  {n:"Svalbard Seed Vault",c:"Norway",loc:[78.24,15.45],cat:"s",w:"https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault",sig:"Humanity's agricultural backup"},
  {n:"Persepolis",c:"Iran",loc:[29.94,52.89],cat:"s",w:"https://en.wikipedia.org/wiki/Persepolis",sig:"Ceremonial capital of the Achaemenid Empire"},
  {n:"Einstein House",c:"Bern, Switzerland",loc:[46.95,7.45],cat:"s",w:"https://en.wikipedia.org/wiki/Einstein_House",sig:"Where Einstein developed special relativity"},
  {n:"Robben Island",c:"Cape Town, South Africa",loc:[-33.81,18.37],cat:"s",w:"https://en.wikipedia.org/wiki/Robben_Island",sig:"Where Nelson Mandela was held for 18 years"},
  {n:"Hampi",c:"Karnataka, India",loc:[15.34,76.46],cat:"s",w:"https://en.wikipedia.org/wiki/Hampi",sig:"Ruins of Vijayanagara — richest city of its era"},
  {n:"Auschwitz-Birkenau",c:"Poland",loc:[50.03,19.18],cat:"s",w:"https://en.wikipedia.org/wiki/Auschwitz_concentration_camp",sig:"Essential memorial to the Holocaust"},
  {n:"ALMA Telescope",c:"Atacama, Chile",loc:[-23.02,-67.75],cat:"s",w:"https://en.wikipedia.org/wiki/Atacama_Large_Millimeter_Array",sig:"Most powerful radio telescope array at 5,000m altitude"},
  {n:"JPL",c:"Pasadena, USA",loc:[34.20,-118.17],cat:"s",w:"https://en.wikipedia.org/wiki/Jet_Propulsion_Laboratory",sig:"NASA's centre for Mars rovers and Voyager probes"},
  {n:"Baikonur Cosmodrome",c:"Kazakhstan",loc:[45.97,63.31],cat:"s",w:"https://en.wikipedia.org/wiki/Baikonur_Cosmodrome",sig:"Launch site of Sputnik and Gagarin's first flight"},
  {n:"Akihabara",c:"Tokyo, Japan",loc:[35.70,139.77],cat:"c",w:"https://en.wikipedia.org/wiki/Akihabara",sig:"Global epicentre of anime, manga, and otaku culture"},
  {n:"Hollywood",c:"Los Angeles, USA",loc:[34.13,-118.32],cat:"c",w:"https://en.wikipedia.org/wiki/Hollywood_Sign",sig:"The iconic sign and Walk of Fame"},
  {n:"Ghibli Museum",c:"Mitaka, Tokyo",loc:[35.70,139.57],cat:"c",w:"https://en.wikipedia.org/wiki/Ghibli_Museum",sig:"Studio Ghibli and Miyazaki's animation world"},
  {n:"Skywalker Ranch",c:"California, USA",loc:[38.06,-122.68],cat:"c",w:"https://en.wikipedia.org/wiki/Skywalker_Ranch",sig:"George Lucas's Star Wars filmmaking compound"},
  {n:"Tezuka Osamu Manga Museum",c:"Takarazuka, Japan",loc:[34.81,135.34],cat:"c",w:"https://en.wikipedia.org/wiki/Osamu_Tezuka_Manga_Museum",sig:"'God of Manga' who created Astro Boy"},
  {n:"Weta Workshop",c:"Wellington, NZ",loc:[-41.31,174.83],cat:"c",w:"https://en.wikipedia.org/wiki/Weta_Workshop",sig:"VFX behind Lord of the Rings and Avatar"},
  {n:"Pinewood Studios",c:"England",loc:[51.55,-0.53],cat:"c",w:"https://en.wikipedia.org/wiki/Pinewood_Studios",sig:"James Bond, Star Wars, Marvel MCU, Harry Potter"},
  {n:"Vasquez Rocks",c:"California, USA",loc:[34.49,-118.32],cat:"c",w:"https://en.wikipedia.org/wiki/Vasquez_Rocks",sig:"Iconic Star Trek and sci-fi filming location"},
  {n:"Toei Animation Museum",c:"Tokyo, Japan",loc:[35.76,139.63],cat:"c",w:"https://en.wikipedia.org/wiki/Toei_Animation",sig:"Dragon Ball, One Piece, Sailor Moon"},
  {n:"Ramoji Film City",c:"Hyderabad, India",loc:[17.25,78.68],cat:"i",w:"https://en.wikipedia.org/wiki/Ramoji_Film_City",sig:"World's largest film studio complex (Guinness Record)"},
  {n:"Film City Mumbai",c:"Mumbai, India",loc:[19.17,72.87],cat:"i",w:"https://en.wikipedia.org/wiki/Film_City,_Mumbai",sig:"Where countless Bollywood films are shot"},
  {n:"AVM Studios",c:"Chennai, India",loc:[13.04,80.22],cat:"i",w:"https://en.wikipedia.org/wiki/AVM_Productions",sig:"India's oldest surviving film studio (est. 1946)"},
  {n:"National Museum of Indian Cinema",c:"Mumbai, India",loc:[18.96,72.81],cat:"i",w:"https://en.wikipedia.org/wiki/National_Museum_of_Indian_Cinema",sig:"India's first national museum dedicated to cinema"},
];

const CAT_COLORS: Record<string, string> = {
  s: "bg-primary",
  c: "bg-amber-500",
  i: "bg-rose-400",
};

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const phiRef = useRef(0);
  const targetPhiRef = useRef(0);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const animRef = useRef<number | null>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const d = DESTINATIONS[currentIdx]!;

  const switchTo = useCallback((idx: number) => {
    const wrapped = ((idx % DESTINATIONS.length) + DESTINATIONS.length) % DESTINATIONS.length;
    setCurrentIdx(wrapped);
    const dest = DESTINATIONS[wrapped]!;
    const lngRad = dest.loc[1] * (Math.PI / 180);
    targetPhiRef.current = -lngRad - Math.PI / 2;

    if (globeRef.current) {
      globeRef.current.update({
        markers: [{ location: dest.loc, size: 0.03 }],
      });
    }
  }, []);

  const next = useCallback(() => {
    setCurrentIdx((prev) => {
      const nextIdx = (prev + 1) % DESTINATIONS.length;
      const dest = DESTINATIONS[nextIdx]!;
      const lngRad = dest.loc[1] * (Math.PI / 180);
      targetPhiRef.current = -lngRad - Math.PI / 2;
      if (globeRef.current) {
        globeRef.current.update({ markers: [{ location: dest.loc, size: 0.03 }] });
      }
      return nextIdx;
    });
  }, []);

  const prev = useCallback(() => {
    setCurrentIdx((prev) => {
      const nextIdx = ((prev - 1) + DESTINATIONS.length) % DESTINATIONS.length;
      const dest = DESTINATIONS[nextIdx]!;
      const lngRad = dest.loc[1] * (Math.PI / 180);
      targetPhiRef.current = -lngRad - Math.PI / 2;
      if (globeRef.current) {
        globeRef.current.update({ markers: [{ location: dest.loc, size: 0.03 }] });
      }
      return nextIdx;
    });
  }, []);

  const resetTimer = useCallback(() => {
    if (cycleRef.current) clearInterval(cycleRef.current);
    cycleRef.current = setInterval(next, 30000);
  }, [next]);

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

    function animate() {
      let diff = targetPhiRef.current - phiRef.current;
      while (diff > Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      phiRef.current += diff * 0.03;
      globe.update({ phi: phiRef.current });
      animRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Auto-cycle
    cycleRef.current = setInterval(next, 30000);

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
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        observer.disconnect();
        // Trigger re-mount by observer logic
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      }, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (globeRef.current) globeRef.current.destroy();
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (cycleRef.current) clearInterval(cycleRef.current);
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
        <canvas ref={canvasRef} className="block h-full w-full cursor-grab active:cursor-grabbing" />
        <span className="absolute bottom-2 right-4 pointer-events-none font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">
          DESTINATIONS // WISHLIST
        </span>
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
        <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${CAT_COLORS[d.cat]}`} />
        <div className="min-w-0 flex-1">
          <a
            href={d.w}
            target="_blank"
            rel="noopener"
            className="block text-[15px] font-semibold leading-tight text-foreground hover:text-primary hover:underline hover:underline-offset-2"
            onClick={(e) => e.stopPropagation()}
          >
            {d.n}
          </a>
          <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">{d.c}</div>
          <div className="mt-1 line-clamp-2 text-[13px] leading-snug text-muted-foreground/80">{d.sig}</div>
        </div>
        <div className="mt-1 flex shrink-0 items-center gap-2">
          <button
            className="spotlight-btn"
            onClick={(e) => { e.stopPropagation(); prev(); resetTimer(); }}
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
            onClick={(e) => { e.stopPropagation(); next(); resetTimer(); }}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
