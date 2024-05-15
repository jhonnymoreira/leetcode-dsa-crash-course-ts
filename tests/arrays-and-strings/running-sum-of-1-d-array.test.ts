import { runningSum } from '@/arrays-and-strings/running-sum-of-1-d-array.js';

describe('Arrays and Strings: Running Sum of 1D Array', () => {
  test.each([
    { input: [1, 2, 3, 4], output: [1, 3, 6, 10] },
    { input: [1, 1, 1, 1, 1], output: [1, 2, 3, 4, 5] },
    { input: [3, 1, 2, 10, 1], output: [3, 4, 6, 16, 17] },
  ])('runningSum($input) === $output', ({ input, output }) => {
    expect(runningSum(input)).toStrictEqual(output);
  });
});
