import { findMaxAverage } from '@/arrays-and-strings/maximum-average-subarray-i.js';

describe('Arrays and Strings: Maximum Average Subarray I', () => {
  test.each([
    { nums: [1, 12, -5, -6, 50, 3], k: 4, output: 12.75 },
    { nums: [5], k: 1, output: 5 },
  ])('findMaxAverage($nums, $k) === $output', ({ nums, k, output }) => {
    expect(findMaxAverage(nums, k)).toStrictEqual(output);
  });
});
