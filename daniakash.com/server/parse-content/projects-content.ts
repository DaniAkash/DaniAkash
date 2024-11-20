import projects from "../../src/content/project/projects.json";

export const projectsContent = () => {
  return projects.map((each) => {
    return `Dani Akash's project: ${each.name}, His role: ${each.description}`;
  });
};
