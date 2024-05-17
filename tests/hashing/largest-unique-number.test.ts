import { largestUniqueNumber } from '@/hashing/largest-unique-number.js';

describe('Hashing: Largest Unique Number', () => {
  test.each([
    {
      input: [5, 7, 3, 9, 4, 9, 8, 3, 1],
      output: 8,
    },
    {
      input: [9, 9, 8, 8],
      output: -1,
    },
  ])('largestUniqueNumber($input) === $output', ({ input, output }) => {
    expect(largestUniqueNumber(input)).toStrictEqual(output);
  });
});
