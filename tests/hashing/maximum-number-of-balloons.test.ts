import { maxNumberOfBalloons } from '@/hashing/maximum-number-of-balloons.js';

describe('Hashing: Maximum Number of Balloons', () => {
  test.each([
    {
      input: 'nlaebolko',
      output: 1,
    },
    {
      input: 'leetcode',
      output: 0,
    },
    {
      input: 'loonbalxballpoon',
      output: 2,
    },
    {
      input: 'lloo',
      output: 0,
    },
    {
      input: 'balloonballon',
      output: 1,
    },
  ])('maxNumberOfBalloons($input) === $output', ({ input, output }) => {
    expect(maxNumberOfBalloons(input)).toStrictEqual(output);
  });
});
