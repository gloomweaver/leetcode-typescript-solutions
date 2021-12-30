import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";

import { addTwoNumbers, listToArray, arrayToList } from "./solution.ts";

Deno.test("Add Two Numbers #1", () => {
  const l1 = arrayToList([2, 4, 3]);
  const l2 = arrayToList([5, 6, 4]);
  const output = [7, 0, 8];
  assertEquals(listToArray(addTwoNumbers(l1, l2)), output);
});

Deno.test("Add Two Numbers  #2", () => {
  const l1 = arrayToList([0]);
  const l2 = arrayToList([0]);
  const output = [0];
  assertEquals(listToArray(addTwoNumbers(l1, l2)), output);
});

Deno.test("Add Two Numbers  #3", () => {
  const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
  const l2 = arrayToList([9, 9, 9, 9]);
  const output = [8, 9, 9, 9, 0, 0, 0, 1];
  assertEquals(listToArray(addTwoNumbers(l1, l2)), output);
});
