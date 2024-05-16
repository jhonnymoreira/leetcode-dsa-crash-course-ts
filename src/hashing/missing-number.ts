export function missingNumber(nums: number[]): number {
  const n = nums.length;

  /**
   * Partial sums
   * @see https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF#Partial_sums
   */
  const rangeSum = (n * (n + 1)) / 2;
  const numsSum = nums.reduce((total, num) => total + num, 0);

  return rangeSum - numsSum;
}
