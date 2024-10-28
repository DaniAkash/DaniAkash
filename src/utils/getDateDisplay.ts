export const getDateDisplay = (date: string | number): string => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
