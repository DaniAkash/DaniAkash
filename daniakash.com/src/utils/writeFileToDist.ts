import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

export const writeFileToDist = async (filePath: string, fileBuffer: Buffer) => {
  const targetDir = import.meta.env.DEV ? "public" : "dist";
  const imagePath = resolve(process.cwd(), `${targetDir}${filePath}`);
  const imageDir = dirname(imagePath);
  mkdirSync(imageDir, { recursive: true });
  writeFileSync(imagePath, fileBuffer);
};
