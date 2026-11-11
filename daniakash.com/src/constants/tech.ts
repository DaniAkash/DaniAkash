/** Display names for the logos in public/tech, keyed by file name. Logos come from svgl. */
export const techLabels: Record<string, string> = {
  "ai-sdk": "Vercel AI SDK",
  android: "Android",
  astro: "Astro",
  bash: "Bash",
  bun: "Bun",
  chrome: "Chrome Extension",
  chromium: "Chromium",
  claude: "Claude",
  docusaurus: "Docusaurus",
  drizzle: "Drizzle ORM",
  expo: "Expo",
  git: "Git",
  hono: "Hono",
  ios: "iOS",
  "jetpack-compose": "Jetpack Compose",
  javascript: "JavaScript",
  kotlin: "Kotlin",
  markdown: "Markdown",
  mcp: "MCP",
  openclaw: "OpenClaw",
  react: "React",
  "react-native": "React Native",
  redux: "Redux",
  rust: "Rust",
  "shadcn-ui": "shadcn/ui",
  svelte: "Svelte",
  swift: "Swift",
  tailwindcss: "Tailwind CSS",
  tanstack: "TanStack",
  tauri: "Tauri",
  typescript: "TypeScript",
  vite: "Vite",
  vitest: "Vitest",
};

/** Logos svgl does not carry, supplied as PNG. */
const rasterLogos = new Set(["jetpack-compose"]);

export const techLogo = (slug: string) =>
  `/tech/${slug}.${rasterLogos.has(slug) ? "png" : "svg"}`;
