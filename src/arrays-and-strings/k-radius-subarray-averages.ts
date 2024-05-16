export function getAverages(nums: number[], k: number): number[] {
  const n = nums.length;
  const windowSize = 2 * k + 1;

  const averages = Array.from({ length: n }, () => -1);
  if (windowSize - 1 >= n) {
    return averages;
  }

  let windowSum = 0;
  for (let i = 0; i < windowSize; i++) {
    windowSum += nums[i]!;
  }

  averages[k] = Math.floor(windowSum / windowSize);
  for (let i = k + 1; i < n - k; i++) {
    windowSum += nums[i + k]! - nums[i - k - 1]!;

    averages[i] = Math.floor(windowSum / windowSize);
  }

  return averages;
}
