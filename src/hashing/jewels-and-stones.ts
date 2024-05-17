export function numJewelsInStones(jewels: string, stones: string): number {
  const availableJews = new Set(jewels);

  let totalJewels = 0;
  for (const stone of stones) {
    if (availableJews.has(stone)) {
      totalJewels++;
    }
  }

  return totalJewels;
}
