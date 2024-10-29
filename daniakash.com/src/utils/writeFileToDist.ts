import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

export const writeFileToDist = async (filePath: string, fileBuffer: Buffer) => {
  const imagePath = resolve(process.cwd(), `dist${filePath}`);
  const imageDir = dirname(imagePath);
  mkdirSync(imageDir, { recursive: true });
  writeFileSync(imagePath, fileBuffer);
};
