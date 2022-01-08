import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import { findTarget, arrayToBinaryTree } from "./solution.ts";

Deno.test("Two Sum IV - Input is a BST #1", () => {
  const tree = arrayToBinaryTree([5, 3, 5, 2, 4, null, 7]);
  const target = 9;
  const output = true;
  assertEquals(findTarget(tree, target), output);
});

Deno.test("Two Sum IV - Input is a BST #2", () => {
  const tree = arrayToBinaryTree([5, 3, 5, 2, 4, null, 7]);
  const target = 28;
  const output = false;
  assertEquals(findTarget(tree, target), output);
});
