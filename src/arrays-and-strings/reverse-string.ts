export function reverseString(s: string[]): void {
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  while (leftIndex < rightIndex) {
    [s[leftIndex], s[rightIndex]] = [s[rightIndex]!, s[leftIndex]!];

    leftIndex++;
    rightIndex--;
  }
}
