import social from "../../src/content/social/social.json";
import type { AIDocumentType } from "../utils/ai-document-type";

export const socialContent = (): AIDocumentType[] => {
  return Object.entries(social).map(([key, value]) => {
    return {
      document_text: `Dani Akash's social info ${key}: ${value}`,
      document_name: `Dani Akash's social info ${key}`,
    };
  });
};
