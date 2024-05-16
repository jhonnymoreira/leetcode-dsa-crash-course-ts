import { countElements } from '@/hashing/counting-elements.js';

describe('Hashing: Counting Elements', () => {
  test.each([
    {
      nums: [1, 2, 3],
      output: 0,
    },
    {
      nums: [1, 1, 3, 3, 5, 5, 7, 7],
      output: 0,
    },
  ])('countElements($nums) === $output', ({ nums, output }) => {
    expect(countElements(nums)).toStrictEqual(output);
  });
});
