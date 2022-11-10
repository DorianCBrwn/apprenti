import dayjs from "dayjs";

/**
 * Takes a date string and returns a string formatted as mm/dd/yyyy
 * @param  {string} dateString
 * @returns {string}
 */
export const formatDate = (dateString: string): string => {
  const [year, month, day] = splitDate(dateString);
  return `${month}/${day}/${year}`;
};

/**
 * Takes a date string and returns an array.
 * @param  {string} dateString
 * @returns {string}
 */
export const splitDate = (dateString: string): string[] => {
  return dateString.split("-");
};

/**
 * Takes in a date and returns if the given date is later than today.
 * @param  {string} dateString
 * @returns {boolean}
 */
export const isLate = (dateString: string): boolean => {
  const date = dayjs(dateString);
  const today = dayjs();

  return date.isBefore(today);
};
