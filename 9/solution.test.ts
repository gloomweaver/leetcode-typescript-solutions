import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import { isPalindrome } from "./solution.ts";

Deno.test("Palindrome Number #1", () => {
  const input = 121;
  const output = true;
  assertEquals(isPalindrome(input), output);
});

Deno.test("Palindrome Number #2", () => {
  const input = -121;
  const output = false;
  assertEquals(isPalindrome(input), output);
});

Deno.test("Longest Substring Without Repeating Characters #3", () => {
  const input = 10;
  const output = false;
  assertEquals(isPalindrome(input), output);
});
