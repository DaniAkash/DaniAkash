import { dirname, resolve } from "node:path";
import { readDir } from "../utils/read-dir";
import { fileURLToPath } from "url";
import { mdxToText } from "../utils/mdx-to-text";
import type { AIDocumentType } from "../utils/ai-document-type";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const aboutContent = (): Promise<AIDocumentType[]> => {
  const about = readDir(resolve(__dirname, "../../src/content/about"));
  return Promise.all(
    about.map(async (post) => {
      return {
        document_name: `About Dani Akash`,
        document_text: `About Dani Akash: ${await mdxToText(post)}`,
      };
    }),
  );
};
