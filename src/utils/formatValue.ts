export function formatValue(value: string) {
  const onlyDigits = value.replace(/[^\d,]+/g, '');
  const replaceComma = onlyDigits.replace(',', '.');
  return parseFloat(replaceComma);
}
