import { countElements } from '@/hashing/counting-elements.js';

describe('Hashing: Counting Elements', () => {
  test.each([
    {
      arr: [1, 2, 3],
      output: 2,
    },
    {
      arr: [1, 1, 3, 3, 5, 5, 7, 7],
      output: 0,
    },
  ])('countElements($nums) === $output', ({ arr, output }) => {
    expect(countElements(arr)).toStrictEqual(output);
  });
});
