import { assertEquals } from "https://deno.land/std@0.119.0/testing/asserts.ts";
import { numWaterBottles } from "./solution.ts";

Deno.test("Water Bottles #1", () => {
  const input: [number, number] = [9, 3];
  const output = 13;
  assertEquals(numWaterBottles.apply(null, input), output);
});

Deno.test("Water Bottles #2", () => {
  const input: [number, number] = [15, 4];
  const output = 19;
  assertEquals(numWaterBottles.apply(null, input), output);
});
