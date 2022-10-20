export const sumLineItems = (lineItems: lineItem[] | undefined): number => {
    if (!lineItems) return 0
    return lineItems.reduce((preValue, currValue) => preValue + currValue.amount, 0);
}

export const centsToDollars = (cents: number): string => {
    const dollars = cents / 100;
    const addDecimals = formatDecimals(dollars)
    return addCommaSeparator(addDecimals)
}

export const formatDecimals = (num: number): string => {
    return num.toFixed(2)
}

export const addCommaSeparator = (num: string): string => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
