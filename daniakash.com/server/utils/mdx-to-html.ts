import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkMdx from "remark-mdx";
import { unified } from "unified";

export const mdxToHtml = async (mdx: string) => {
  return String(
    await unified()
      .use(remarkMdx)
      .use(remarkParse)
      .use(remarkFrontmatter)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(mdx),
  );
};
