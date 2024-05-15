export function runningSum(nums: number[]): number[] {
  let previousSum = 0;

  for (let i = 0; i < nums.length; i++) {
    previousSum += nums[i]!;
    nums[i] = previousSum;
  }

  return nums;
}
