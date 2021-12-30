import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";

import { twoSum } from "./solution.ts";

Deno.test("TwoSum #1", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const output = [0, 1];
  assertEquals(twoSum(nums, target), output);
});

Deno.test("TwoSum #2", () => {
  const nums = [3, 2, 4];
  const target = 6;
  const output = [1, 2];
  assertEquals(twoSum(nums, target), output);
});

Deno.test("TwoSum #3", () => {
  const nums = [3, 3];
  const target = 6;
  const output = [0, 1];
  assertEquals(twoSum(nums, target), output);
});
