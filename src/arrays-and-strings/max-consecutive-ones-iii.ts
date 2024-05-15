export function longestOnes(nums: number[], k: number): number {
  const n = nums.length;
  let leftIndex = 0;
  let rightIndex = 0;

  while (rightIndex < n) {
    if (nums[rightIndex] === 0) {
      k--;
    }

    if (k < 0) {
      k += 1 - nums[leftIndex]!;
      leftIndex++;
    }

    rightIndex++;
  }

  return rightIndex - leftIndex;
}
