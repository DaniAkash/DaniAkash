import social from "../../src/content/social/social.json";

export const socialContent = () => {
  return Object.entries(social).map(([key, value]) => {
    return `Dani Akash's social info ${key}: ${value}`;
  });
};
