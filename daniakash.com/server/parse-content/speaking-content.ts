import events from "../../src/content/speaking/events.json";

export const speakingContent = () => {
  return events
    .flatMap((each) => {
      return each.events.map((event) => event);
    })
    .map((event) => {
      return `On ${event.date}, Dani Akash spoke at ${event.name} about ${event.title}, explaining: ${event.description}`;
    });
};
