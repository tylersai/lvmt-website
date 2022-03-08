export const formatMoney = (
  num: number,
  minimumFractionDigits: number | undefined = 2,
  useGrouping = true,
  minimumIntegerDigits: number | undefined = undefined
): string => num.toLocaleString("us", { useGrouping, minimumIntegerDigits, minimumFractionDigits });
