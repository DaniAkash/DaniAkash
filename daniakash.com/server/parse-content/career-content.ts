import experience from "../../src/content/career/experience.json";
import type { AIDocumentType } from "../utils/ai-document-type";

export const careerContent = (): AIDocumentType[] => {
  return experience.map((each) => {
    return {
      document_name: `Experience at ${each.company}`,
      document_text: `From ${each.startDate} to ${each.endDate}, Dani Akash worked at ${each.company} as a ${each.role} in ${each.location}. During this time, he ${each.description}`,
    };
  });
};
