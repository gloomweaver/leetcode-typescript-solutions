export function reverse(x: number): number {
  let reversedNum = 0;
  while (x != 0) {
    const digit = x % 10;
    reversedNum = reversedNum * 10 + digit;
    x = Math.floor(x / 10);
  }
  return reversedNum;
}

export function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  return reverse(x) === x;
}
