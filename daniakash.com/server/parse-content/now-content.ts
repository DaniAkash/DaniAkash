import { dirname, resolve } from "node:path";
import { readDir } from "../utils/read-dir";
import { fileURLToPath } from "url";
import { mdxToText } from "../utils/mdx-to-text";
import type { AIDocumentType } from "../utils/ai-document-type";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const nowContent = async (): Promise<AIDocumentType[]> => {
  const nowContent = readDir(resolve(__dirname, "../../src/content/now"));
  return Promise.all(
    nowContent.map(async (post) => {
      return {
        document_text: `What is Dani Akash doing now: ${await mdxToText(post)}`,
        document_name: `What is Dani Akash doing now`,
      };
    }),
  );
};
