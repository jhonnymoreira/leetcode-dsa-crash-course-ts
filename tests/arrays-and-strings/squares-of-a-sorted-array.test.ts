import { sortedSquares } from '@/arrays-and-strings/squares-of-a-sorted-array.js';

describe('Arrays and Strings: Squares of a Sorted Array', () => {
  test.each([
    { input: [-4, -1, 0, 3, 10], output: [0, 1, 9, 16, 100] },
    { input: [-7, -3, 2, 3, 11], output: [4, 9, 9, 49, 121] },
  ])('sortedSquare($input) === $output', ({ input, output }) => {
    expect(sortedSquares(input)).toStrictEqual(output);
  });
});
