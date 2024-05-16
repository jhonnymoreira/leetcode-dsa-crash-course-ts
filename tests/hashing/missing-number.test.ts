import { missingNumber } from '@/hashing/missing-number.js';

describe('Hashing: Missing Number', () => {
  test.each([
    {
      nums: [3, 0, 1],
      output: 2,
    },
    {
      nums: [0, 1],
      output: 2,
    },
    {
      nums: [9, 6, 4, 2, 3, 5, 7, 0, 1],
      output: 8,
    },
  ])('missingNumber($nums) === $output', ({ nums, output }) => {
    expect(missingNumber(nums)).toStrictEqual(output);
  });
});
