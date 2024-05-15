export function sortedSquares(nums: number[]): number[] {
  const squares: number[] = [];

  const lastIndex = nums.length - 1;

  let leftIndex = 0;
  let rightIndex = lastIndex;

  let i = lastIndex;
  while (i >= 0) {
    const left = nums[leftIndex]!;
    const right = nums[rightIndex]!;

    if (Math.abs(left) > Math.abs(right)) {
      squares[i] = left * left;
      leftIndex++;
    } else {
      squares[i] = right * right;
      rightIndex--;
    }

    i--;
  }

  return squares;
}
