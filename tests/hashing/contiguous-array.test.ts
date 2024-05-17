import { findMaxLength } from '@/hashing/contiguous-array.js';

describe('Hashing: Contiguous Array', () => {
  test.each([
    {
      input: [0, 1],
      output: 2,
    },
    {
      input: [0, 1, 0],
      output: 2,
    },
    {
      input: [0, 1, 0, 0, 1, 1, 0],
      output: 6,
    },
  ])('findMaxLength($input) === $output', ({ input, output }) => {
    expect(findMaxLength(input)).toStrictEqual(output);
  });
});
