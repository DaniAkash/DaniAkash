import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["daniakash.com"],
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  integrations: [react(), tailwind(), mdx()],
});
