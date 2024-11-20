import { dirname, resolve } from "node:path";
import { readDir } from "../utils/read-dir";
import { fileURLToPath } from "url";
import { mdxToText } from "../utils/mdx-to-text";
import type { AIDocumentType } from "../utils/ai-document-type";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const resumeContent = async (): Promise<AIDocumentType[]> => {
  const resume = readDir(resolve(__dirname, "../../src/content/resume"));
  return Promise.all(
    resume.map(async (each) => {
      return {
        document_text: `Dani's Resume: ${await mdxToText(each)}`,
        document_name: `Dani's Resume`,
      };
    }),
  );
};
