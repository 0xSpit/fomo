export function formatNumber(num: number): string {
  if (num >= 1000000000) {
    const billions = num / 1000000000;
    return billions.toFixed(1) + "$ Billions";
  } else if (num >= 1000000) {
    const millions = num / 1000000;
    return millions.toFixed(1) + "$ Millions";
  } else {
    return num.toString();
  }
}
