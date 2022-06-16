const dict: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// deno-lint-ignore no-unused-vars
function romanToInt(s: string): number {
  return s.split("").reduce((calc, cur, index, array) => {
    if (dict[cur] < dict[array[index + 1]]) return calc - dict[cur];
    return calc + dict[cur];
  }, 0);
}
