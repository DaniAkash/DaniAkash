export const getDateValue = (date: string | number): string => {
  const dateObject = new Date(date);
  return dateObject.toISOString().split("T")[0]!;
};
