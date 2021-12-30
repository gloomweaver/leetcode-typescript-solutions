import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import { lengthOfLongestSubstring } from "./solution.ts";

Deno.test("Longest Substring Without Repeating Characters #1", () => {
  const input = "abcabcbb";
  const output = 3;
  assertEquals(lengthOfLongestSubstring(input), output);
});

Deno.test("Longest Substring Without Repeating Characters #2", () => {
  const input = "bbbbb";
  const output = 1;
  assertEquals(lengthOfLongestSubstring(input), output);
});

Deno.test("Longest Substring Without Repeating Characters #3", () => {
  const input = "pwwkew";
  const output = 3;
  assertEquals(lengthOfLongestSubstring(input), output);
});

Deno.test("Longest Substring Without Repeating Characters #4", () => {
  const input = "";
  const output = 0;
  assertEquals(lengthOfLongestSubstring(input), output);
});

Deno.test("Longest Substring Without Repeating Characters #4", () => {
  const input = "tmmzuxt";
  const output = 5;
  assertEquals(lengthOfLongestSubstring(input), output);
});
