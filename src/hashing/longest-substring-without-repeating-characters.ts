export function lengthOfLongestSubstring(s: string): number {
  const charByWindowLength = new Map<string, number>();

  let longestSubstring = 0;
  let leftIndex = 0;
  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    const char = s.charAt(rightIndex);
    if (charByWindowLength.has(char)) {
      leftIndex = Math.max(charByWindowLength.get(char)!, leftIndex);
    }

    longestSubstring = Math.max(rightIndex - leftIndex + 1, longestSubstring);
    charByWindowLength.set(char, rightIndex + 1);
  }

  return longestSubstring;
}
