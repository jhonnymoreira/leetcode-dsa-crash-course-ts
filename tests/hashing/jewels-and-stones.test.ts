import { numJewelsInStones } from '@/hashing/jewels-and-stones.js';

describe('Hashing: Jewels and Stones', () => {
  test.each([
    {
      jewels: 'aA',
      stones: 'aAAbbbb',
      output: 3,
    },
    {
      jewels: 'z',
      stones: 'ZZ',
      output: 0,
    },
    {
      jewels: 'k',
      stones: 'abcD',
      output: 0,
    },
  ])(
    'numJewelsInStones($jewels, $stones) === $output',
    ({ jewels, stones, output }) => {
      expect(numJewelsInStones(jewels, stones)).toStrictEqual(output);
    }
  );
});
