import { dirname, resolve } from "node:path";
import { readDir } from "../utils/read-dir";
import { fileURLToPath } from "url";
import { mdxToText } from "../utils/mdx-to-text";
import type { AIDocumentType } from "../utils/ai-document-type";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const blogContent = async (): Promise<AIDocumentType[]> => {
  const blogPosts = readDir(resolve(__dirname, "../../src/content/blog"));
  return Promise.all(
    blogPosts.map(async (post, index) => {
      return {
        document_name: `Dani Akash's blog post No.${index + 1}`,
        document_text: `Dani Akash's blog post: ${await mdxToText(post)}`,
      };
    }),
  );
};
