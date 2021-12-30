// Given a string s, find the length of the longest substring without repeating characters.
export function lengthOfLongestSubstring(str: string): number {
  const lastPos = new Map<string, number>();
  let maxLength = 0;
  let length = 0;
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    const prev = lastPos.get(char);
    if (prev !== undefined) {
      length = Math.min(length + 1, index - prev);
    } else {
      length++;
    }
    if (length > maxLength) maxLength = length;
    lastPos.set(char, index);
  }
  return maxLength;
}
