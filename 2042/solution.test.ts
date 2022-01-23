import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import { areNumbersAscending } from "./solution.ts";

Deno.test("Check if Numbers Are Ascending in a Sentence #1", () => {
  const input = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
  const output = true;
  assertEquals(areNumbersAscending(input), output);
});

Deno.test("Check if Numbers Are Ascending in a Sentence #2", () => {
  const input = "hello world 5 x 5";
  const output = false;
  assertEquals(areNumbersAscending(input), output);
});
Deno.test("Check if Numbers Are Ascending in a Sentence #3", () => {
  const input =
    "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s";
  const output = false;
  assertEquals(areNumbersAscending(input), output);
});
