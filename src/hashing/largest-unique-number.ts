export function largestUniqueNumber(nums: number[]): number {
  const frequencies = new Map<number, number>();

  for (const num of nums) {
    const currentFrequency = frequencies.get(num) || 0;

    frequencies.set(num, currentFrequency + 1);
  }

  let largestUniqueNum = -1;
  for (const [num, frequency] of frequencies) {
    if (frequency === 1) {
      largestUniqueNum = Math.max(num, largestUniqueNum);
    }
  }

  return largestUniqueNum;
}
