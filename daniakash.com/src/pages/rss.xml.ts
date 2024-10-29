import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import type { APIRoute } from "astro";
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
          link: `/posts/${post.slug}`,
          content: sanitizeHtml(parser.render(post.body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          }),
        };
      }),
      ...news.map((news) => {
        return {
          title: news.data.title,
          pubDate: new Date(news.data.dateMillis),
          description:
            "Get interesting reads delivered to your inbox. Subscribe to Dani's Newsletter.",
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
