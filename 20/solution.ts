// deno-lint-ignore no-unused-vars
function isValid(s: string): boolean {
  const queue = [];
  const match: Record<string, string> = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  for (let idx = 0; idx < s.length; idx++) {
    const el = s[idx];
    if (!match[el]) {
      queue.push(el);
    } else {
      if (queue.pop() !== match[el]) return false;
    }
  }
  return queue.length === 0 && true;
}
