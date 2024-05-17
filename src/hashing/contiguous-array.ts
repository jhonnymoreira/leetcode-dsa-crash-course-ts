export function findMaxLength(nums: number[]): number {
  const indexByCount = new Map<number, number>([[0, -1]]);

  let maxLength = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    count += num === 0 ? -1 : 1;

    if (indexByCount.has(count)) {
      maxLength = Math.max(maxLength, i - indexByCount.get(count)!);
    } else {
      indexByCount.set(count, i);
    }
  }

  return maxLength;
}
