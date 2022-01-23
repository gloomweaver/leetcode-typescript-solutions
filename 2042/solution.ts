export const areNumbersAscending = (sentence: string): boolean => {
  return sentence.split(" ").reduce<[boolean, number]>(
    (acc, val) => {
      const num = Number(val);
      if (isNaN(num)) return acc;
      return acc[0] && num > acc[1] ? [true, num] : [false, Infinity];
    },
    [true, -Infinity]
  )[0];
};
