import uses from "../../src/content/uses/uses.json";
import type { AIDocumentType } from "../utils/ai-document-type";

export const usesContent = (): AIDocumentType[] => {
  return uses
    .flatMap((each) => {
      return each.tools.map((tool) => tool);
    })
    .map((tool) => {
      return {
        document_text: `Dani Akash uses ${tool.title}, because: ${tool.description}`,
        document_name: `Dani Akash uses ${tool.title}`,
      };
    });
};
