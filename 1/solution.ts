// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
export function twoSum(nums: number[], target: number): number[] {
  // stores number and its index in array
  const elementExistsMap = new Map<number, number>();
  for (let curIndex = 0; curIndex < nums.length; curIndex++) {
    const cur = nums[curIndex];
    const pair = elementExistsMap.get(target - cur);
    if (pair !== undefined) {
      return [pair, curIndex];
    }
    // order matters, if we do before finding a pair we risk of getting curIndex = pair
    if (!elementExistsMap.get(cur)) {
      elementExistsMap.set(cur, curIndex);
    }
  }
  return [NaN, NaN];
}

// Solution worst time complexity O(n)
// Solution worst memory complexity O(n) if we have to iterate thought all array, so Map includes all array elements
