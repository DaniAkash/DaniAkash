import uses from "../../src/content/uses/uses.json";

export const usesContent = () => {
  return uses
    .flatMap((each) => {
      return each.tools.map((tool) => tool);
    })
    .map((tool) => {
      return `Dani Akash uses ${tool.title}, because: ${tool.description}`;
    });
};
