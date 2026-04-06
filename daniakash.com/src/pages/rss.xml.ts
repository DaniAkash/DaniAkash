import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export const GET: APIRoute = async (context) => {
  const blog = await getCollection("blog");
  const news = await getCollection("rss");
  return rss({
    title: "Dani Akash’s Blog",
    description:
      "Where my thoughts get some air time (and occasionally make sense).",
    site: context.site ?? "",
    items: [
      ...blog.map((post) => {
        return {
          title: post.data.title,
          pubDate: new Date(post.data.date),
          description: post.data.subtitle,
          link: `/posts/${post.id}`,
          content: sanitizeHtml(parser.render(post.body ?? ""), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          }),
        };
      }),
      ...news.map((news) => {
        return {
          title: news.data.title,
          pubDate: new Date(news.data.dateMillis),
          description:
            "🌐 Explore the future of tech, science, and sustainability—one insight-packed issue at a time!",
          link: `/newsletter/${news.data.slug}`,
          content: sanitizeHtml(news.data.description, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          }),
        };
      }),
    ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()),
    stylesheet: "/pretty-feed-v3.xsl",
    customData: `<language>en-us</language>`,
  });
};
