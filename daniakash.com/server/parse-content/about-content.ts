import { dirname, resolve } from "node:path";
import { readDir } from "../utils/read-dir";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const aboutContent = () => {
  const about = readDir(resolve(__dirname, "../../src/content/about"));
  return about.map((post) => {
    return `About Dani Akash: ${post}`;
  });
};
