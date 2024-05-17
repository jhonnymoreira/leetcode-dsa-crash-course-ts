export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const ransomNoteFrequency = new Map<string, number>();
  for (const char of ransomNote) {
    const currentFrequency = ransomNoteFrequency.get(char) || 0;
    ransomNoteFrequency.set(char, currentFrequency + 1);
  }

  const magazineFrequency = new Map<string, number>();
  for (const char of magazine) {
    const currentFrequency = magazineFrequency.get(char) || 0;
    magazineFrequency.set(char, currentFrequency + 1);
  }

  for (const [char, frequency] of ransomNoteFrequency) {
    const magazineCharFrequency = magazineFrequency.get(char) || -1;
    if (frequency > magazineCharFrequency) {
      return false;
    }
  }

  return true;
}
