import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

export const readDir = (directoryPath: string) => {
  try {
    const files = readdirSync(directoryPath);
    const fileContents: string[] = [];

    for (const file of files) {
      const filePath = join(directoryPath, file);

      if (statSync(filePath).isFile()) {
        const content = readFileSync(filePath, "utf-8");
        fileContents.push(content);
      }
    }

    return fileContents;
  } catch (e) {
    console.error("Error Reading Directory", e);
    throw e;
  }
};
