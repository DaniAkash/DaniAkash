import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";
import metaTags from "astro-meta-tags";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://daniakash.com",
  redirects: {
    "/blog/[...slug]": "/posts/[...slug]",
  },
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
          rel: ["noopener"],
        },
      ],
    ],
  },
  experimental: {
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
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), metaTags(), sitemap()],
});
