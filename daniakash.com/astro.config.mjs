import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";
import metaTags from "astro-meta-tags";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://daniakash.com",
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
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
  integrations: [tailwind(), mdx(), metaTags(), sitemap()],
});