import { dirname, resolve } from "node:path";
import { readDir } from "../utils/read-dir";
import { fileURLToPath } from "url";
import { mdxToHtml } from "../utils/mdx-to-html";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const blogContent = async () => {
  const blogPosts = readDir(resolve(__dirname, "../../src/content/blog"));
  return await Promise.all(
    blogPosts.map(async (post) => {
      return `Dani Akash's blog post: ${await mdxToHtml(post)}`;
    }),
  );
};
