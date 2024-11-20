import { dirname, resolve } from "node:path";
import { readDir } from "../utils/read-dir";
import { fileURLToPath } from "url";
import { mdxToHtml } from "../utils/mdx-to-html";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const nowContent = () => {
  const nowContent = readDir(resolve(__dirname, "../../src/content/now"));
  return Promise.all(
    nowContent.map(async (post) => {
      return `What is Dani Akash doing now: ${await mdxToHtml(post)}`;
    }),
  );
};
