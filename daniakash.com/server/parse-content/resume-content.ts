import { dirname, resolve } from "node:path";
import { readDir } from "../utils/read-dir";
import { fileURLToPath } from "url";
import { mdxToHtml } from "../utils/mdx-to-html";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const resumeContent = () => {
  const resume = readDir(resolve(__dirname, "../../src/content/resume"));
  return Promise.all(
    resume.map(async (each) => {
      return `Dani's Resume: ${mdxToHtml(each)}`;
    }),
  );
};
