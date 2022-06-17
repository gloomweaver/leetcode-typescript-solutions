function commonPrefix(str1: string, str2: string): string {
  const minLength = Math.min(str1.length, str2.length);
  for (let idx = 0; idx < minLength; idx++) {
    if (str1[idx] !== str2[idx]) {
      if (idx > 0) {
        return str1.slice(0, idx);
      }
      return "";
    } else if (idx === minLength - 1) {
      return str1.slice(0, minLength);
    }
  }
  return "";
}

// deno-lint-ignore no-unused-vars
function longestCommonPrefix(strs: string[]): string {
  let acc = strs[0] ?? "";
  for (let idx = 1; idx < strs.length; idx++) {
    acc = commonPrefix(acc, strs[idx]);
    if (!acc) return "";
  }
  return acc;
}
