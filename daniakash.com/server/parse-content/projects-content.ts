import projects from "../../src/content/project/projects.json";
import type { AIDocumentType } from "../utils/ai-document-type";

export const projectsContent = (): AIDocumentType[] => {
  return projects.map((each) => {
    return {
      document_text: `Dani Akash's project: ${each.name}, His role: ${each.description}`,
      document_name: `Dani Akash's project: ${each.name}`,
    };
  });
};
