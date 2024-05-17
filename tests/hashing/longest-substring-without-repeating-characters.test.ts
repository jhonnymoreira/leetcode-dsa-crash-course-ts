import { lengthOfLongestSubstring } from '@/hashing/longest-substring-without-repeating-characters.js';

describe('Hashing: Longest Substring Without Repeating Characters', () => {
  test.each([
    { input: 'abcabcbb', output: 3 },
    { input: 'bbbbb', output: 1 },
    { input: 'pwwkew', output: 3 },
  ])('lengthOfLongestSubstring($input) === $output', ({ input, output }) => {
    expect(lengthOfLongestSubstring(input)).toStrictEqual(output);
  });
});
