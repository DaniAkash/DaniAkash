import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkMdx from "remark-mdx";
import { unified } from "unified";

const cleanHtml = (input: string) => {
  return input
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&[^;\s]+;/g, "") // Remove HTML entities (e.g., &amp;)
    .trim();
};

const blockTags = [
  "p",
  "div",
  "section",
  "article",
  "blockquote",
  "li",
  "ul",
  "ol",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "table",
  "tr",
  "td",
];

const blockRegex = new RegExp(`</(?:${blockTags.join("|")})>`, "gi");

export const mdxToText = async (mdx: string) => {
  const html = String(
    await unified()
      .use(remarkMdx)
      .use(remarkParse)
      .use(remarkFrontmatter)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(mdx),
  );

  const text = html.split(blockRegex).map(cleanHtml).join("\n");
  return text;
};
