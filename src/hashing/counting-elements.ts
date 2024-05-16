export function countElements(arr: number[]): number {
  const uniqueNumbers = new Set(arr);

  let count = 0;
  for (const num of arr) {
    if (uniqueNumbers.has(num + 1)) {
      count++;
    }
  }

  return count;
}
