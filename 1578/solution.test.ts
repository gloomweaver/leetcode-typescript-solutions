import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import { minCost } from "./solution.ts";

Deno.test("Minimum Time to Make Rope Colorful #1", () => {
  const input: [string, number[]] = ["abaac", [1, 2, 3, 4, 5]];
  const output = 3;
  assertEquals(minCost.apply(null, input), output);
});

Deno.test("Minimum Time to Make Rope Colorful #2", () => {
  const input: [string, number[]] = ["abc", [1, 2, 3]];
  const output = 0;
  assertEquals(minCost.apply(null, input), output);
});

Deno.test("Minimum Time to Make Rope Colorful #3", () => {
  const input: [string, number[]] = ["aabaa", [1, 2, 3, 4, 1]];
  const output = 2;
  assertEquals(minCost.apply(null, input), output);
});
