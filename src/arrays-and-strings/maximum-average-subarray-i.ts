export function findMaxAverage(nums: number[], k: number): number {
  const numsLength = nums.length;
  let sum = 0;

  for (let leftBound = 0; leftBound < k; leftBound++) {
    sum += nums[leftBound]!;
  }

  let rightBound = k;
  let longestSum = sum;
  while (rightBound < numsLength) {
    const previousLeftBound = rightBound - k;
    sum += nums[rightBound]! - nums[previousLeftBound]!;
    longestSum = Math.max(longestSum, sum);

    rightBound++;
  }

  return longestSum / k;
}
