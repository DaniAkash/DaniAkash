import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import rehypeExternalLinks from "rehype-external-links";

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
  integrations: [
    react(),
    mdx(),
    metaTags(),
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
        },
        // AI search bots — explicitly allow for citation visibility
        { userAgent: "GPTBot", allow: "/" },
        { userAgent: "ChatGPT-User", allow: "/" },
        { userAgent: "PerplexityBot", allow: "/" },
        { userAgent: "ClaudeBot", allow: "/" },
        { userAgent: "anthropic-ai", allow: "/" },
        { userAgent: "Google-Extended", allow: "/" },
        { userAgent: "Googlebot", allow: "/" },
        { userAgent: "Bingbot", allow: "/" },
        { userAgent: "Applebot", allow: "/" },
        { userAgent: "Bytespider", allow: "/" },
      ],
    }),
  ],
});
