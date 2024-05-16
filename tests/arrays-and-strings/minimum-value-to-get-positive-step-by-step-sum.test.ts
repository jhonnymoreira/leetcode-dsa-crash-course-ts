import { minStartValue } from '@/arrays-and-strings/minimum-value-to-get-positive-step-by-step-sum.js';

describe('Arrays and Strings: Minimum Value to Get Positive Step by Step Sum', () => {
  test.each([
    { input: [-3, 2, -3, 4, 2], output: 5 },
    { input: [1, 2], output: 1 },
    { input: [1, -2, -3], output: 5 },
  ])('minStartValue($input) === $output', ({ input, output }) => {
    expect(minStartValue(input)).toStrictEqual(output);
  });
});
