import experience from "../../src/content/career/experience.json";

export const careerContent = () => {
  return experience.map((each) => {
    return `From ${each.startDate} to ${each.endDate}, Dani Akash worked at ${each.company} as a ${each.role} in ${each.location}. During this time, he ${each.description}`;
  });
};
