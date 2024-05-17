import { findWinners } from '@/hashing/find-players-with-zero-or-one-losses.js';

describe('Hashing: Find Players With Zero or One Losses', () => {
  test.each([
    {
      input: [
        [1, 3],
        [2, 3],
        [3, 6],
        [5, 6],
        [5, 7],
        [4, 5],
        [4, 8],
        [4, 9],
        [10, 4],
        [10, 9],
      ] as [number, number][],
      output: [
        [1, 2, 10],
        [4, 5, 7, 8],
      ],
    },
    {
      input: [
        [2, 3],
        [1, 3],
        [5, 4],
        [6, 4],
      ] as [number, number][],
      output: [[1, 2, 5, 6], []],
    },
  ])('findWinners($input) === $output', ({ input, output }) => {
    expect(findWinners(input)).toStrictEqual(output);
  });
});
