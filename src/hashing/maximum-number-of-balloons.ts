export function maxNumberOfBalloons(text: string): number {
  const balloonLetterFrequency = new Map<string, number>([
    ['b', 1],
    ['a', 1],
    ['l', 2],
    ['o', 2],
    ['n', 1],
  ]);

  const letterFrequency = new Map<string, number>();
  for (const letter of text) {
    if (balloonLetterFrequency.has(letter)) {
      const currentFrequency = letterFrequency.get(letter) || 0;
      letterFrequency.set(letter, currentFrequency + 1);
    }
  }

  if (balloonLetterFrequency.size !== letterFrequency.size) {
    return 0;
  }

  let balloons = Number.MAX_SAFE_INTEGER;
  for (const [char, frequency] of balloonLetterFrequency) {
    const maxFrequency = Math.floor(
      (letterFrequency.get(char) || 0) / frequency
    );

    balloons = Math.min(balloons, maxFrequency);
  }

  return balloons;
}
