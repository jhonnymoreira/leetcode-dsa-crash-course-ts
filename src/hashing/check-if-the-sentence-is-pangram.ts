export function checkIfPangram(sentence: string): boolean {
  const ALPHABET_SIZE = 26;

  const uniqueLetters = new Set(sentence);

  return uniqueLetters.size === ALPHABET_SIZE;
}
