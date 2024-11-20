import events from "../../src/content/speaking/events.json";
import type { AIDocumentType } from "../utils/ai-document-type";

export const speakingContent = (): AIDocumentType[] => {
  return events
    .flatMap((each) => {
      return each.events.map((event) => event);
    })
    .map((event) => {
      return {
        document_text: `On ${event.date}, Dani Akash spoke at ${event.name} about ${event.title}, explaining: ${event.description}`,
        document_name: `Speaking at ${event.name}`,
      };
    });
};
