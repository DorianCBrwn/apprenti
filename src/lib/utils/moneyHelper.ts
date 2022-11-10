/**
 * Takes in an array of line items and returns a sum
 * @param  {lineItem[]|undefined} lineItems
 * @returns {number}
 */
export const sumLineItems = (lineItems: lineItem[] | undefined): number => {
  if (!lineItems) return 0;
  return lineItems.reduce(
    (preValue, currValue) => preValue + currValue.amount,
    0
  );
};

/**
 * Takes in a number and returns it formatted as dollars and cents
 * @param  {number} cents
 * @returns {string}
 */
export const centsToDollars = (cents: number): string => {
  const dollars = cents / 100;
  const addDecimals = formatDecimals(dollars);
  return addCommaSeparator(addDecimals);
};
/**
 * Takes in a number and returns a string representation of a number formatted to 2 decimal places
 * @param  {number} num
 * @returns {string}
 */
export const formatDecimals = (num: number): string => {
  return num.toFixed(2);
};

/**
 * adds a comma separator to string
 * @param  {string} num
 * @returns {string}
 */
export const addCommaSeparator = (num: string): string => {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
/**
 * takes in an array of invoices and returns the total sum of invoices.
 * @param  {Invoice[]|undefined} invoices
 * @returns {number}
 */
export const sumInvoices = (invoices: Invoice[] | undefined): number => {
  if (!invoices) return 0;
  return invoices.reduce((sum, num) => {
    const invoiceSum = sumLineItems(num.lineItems);
    return sum + invoiceSum;
  }, 0);
};
