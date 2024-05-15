import { longestOnes } from '@/arrays-and-strings/max-consecutive-ones-iii.js';

describe('Arrays and Strings: Max Consecutive Ones III', () => {
  test.each([
    { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2, output: 6 },
    {
      nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      k: 3,
      output: 10,
    },
    { nums: [0, 1, 1], k: 0, output: 2 },
  ])('longestOnes($nums, $k) === $output', ({ nums, k, output }) => {
    expect(longestOnes(nums, k)).toStrictEqual(output);
  });
});
