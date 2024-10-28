import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        },
      ],
    ],
  },
  experimental: {
    contentLayer: true,
    contentIntellisense: true,
  },
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
