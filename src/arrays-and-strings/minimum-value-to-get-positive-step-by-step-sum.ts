export function minStartValue(nums: number[]): number {
  let previousSum = 0;
  let minValue = 0;

  for (let i = 0; i < nums.length; i++) {
    previousSum += nums[i]!;
    minValue = Math.min(minValue, previousSum);
  }

  return Math.abs(minValue) + 1;
}
