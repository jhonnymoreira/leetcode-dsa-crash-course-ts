import { getAverages } from '@/arrays-and-strings/k-radius-subarray-averages.js';

describe('Arrays and Strings: K Radius Subarray Averages', () => {
  test.each([
    {
      nums: [7, 4, 3, 9, 1, 8, 5, 2, 6],
      k: 3,
      output: [-1, -1, -1, 5, 4, 4, -1, -1, -1],
    },
    {
      nums: [100_000],
      k: 0,
      output: [100_000],
    },
    {
      nums: [8],
      k: 100_000,
      output: [-1],
    },
    {
      nums: [18334, 25764, 19780, 92480, 69842, 73255, 89893],
      k: 0,
      output: [18334, 25764, 19780, 92480, 69842, 73255, 89893],
    },
    {
      nums: [40527, 53696, 10730, 66491, 62141, 83909, 78635, 18560],
      k: 2,
      output: [-1, -1, 46717, 55393, 60381, 61947, -1, -1],
    },
  ])('getAverage($nums, $k) === $output', ({ nums, k, output }) => {
    expect(getAverages(nums, k)).toStrictEqual(output);
  });
});
