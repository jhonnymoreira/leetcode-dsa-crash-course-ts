import { reverseString } from '@/arrays-and-strings/reverse-string.js';

describe('Arrays and Strings: Reverse String', () => {
  test.each([
    { input: ['h', 'e', 'l', 'l', 'o'], output: ['o', 'l', 'l', 'e', 'h'] },
    {
      input: ['H', 'a', 'n', 'n', 'a', 'h'],
      output: ['h', 'a', 'n', 'n', 'a', 'H'],
    },
  ])('reverseString($input) === $output', ({ input, output }) => {
    reverseString(input);

    expect(input).toStrictEqual(output);
  });
});
