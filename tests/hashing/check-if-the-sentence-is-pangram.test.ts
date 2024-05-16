import { checkIfPangram } from '@/hashing/check-if-the-sentence-is-pangram.js';

describe('Hashing: Check if the Sentence Is Pangram', () => {
  test.each([
    {
      sentence: 'thequickbrownfoxjumpsoverthelazydog',
      output: true,
    },
    { sentence: 'leetcode', output: false },
  ])('checkIfPangram($sentence) === $output', ({ sentence, output }) => {
    expect(checkIfPangram(sentence)).toStrictEqual(output);
  });
});
