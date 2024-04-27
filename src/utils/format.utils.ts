/**
 * Formats a number as currency.
 *
 * @param {number} amount - The amount to format.
 * @param {string} currency - The ISO currency code, e.g., 'USD', 'EUR', 'ETH'.
 * @param {string} locale - Optional. The locale to use for formatting, defaults to 'en-US'.
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(amount : number, currency : string, locale: string = 'en-US'): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
}
