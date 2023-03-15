const CURRENTCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
export function formatCurrency(number: number) {
  return CURRENTCY_FORMATTER.format(number);
}
