import { canConstruct } from '@/hashing/ransom-note.js';

describe('Hashing: Ransom Note', () => {
  test.each([
    {
      ransomNote: 'a',
      magazine: 'b',
      output: false,
    },
    {
      ransomNote: 'aa',
      magazine: 'ab',
      output: false,
    },
    {
      ransomNote: 'aa',
      magazine: 'aab',
      output: true,
    },
  ])(
    'canConstruct($ransomNote, $magazine) === $output',
    ({ ransomNote, magazine, output }) => {
      expect(canConstruct(ransomNote, magazine)).toStrictEqual(output);
    }
  );
});
