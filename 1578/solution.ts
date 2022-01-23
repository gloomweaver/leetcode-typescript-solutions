type Reducer = [
  color: string,
  totalCountCurrent: number,
  maxCurrent: number,
  result: number
];

// Нет никакого смысла писать так, когда можно просто использовать for loop, но мне по приколу
export const minCost = (colors: string, neededTime: number[]): number => {
  return (colors + " ").split("").reduce<Reducer>(
    (acc, cur, index) => {
      const color = cur;
      if (color === acc[0]) {
        return [
          color,
          acc[1] + neededTime[index],
          Math.max(neededTime[index], acc[2]),
          acc[3],
        ];
      } else {
        return [
          color,
          neededTime[index],
          neededTime[index],
          acc[3] + (acc[1] - acc[2]),
        ];
      }
    },
    ["", 0, 0, 0]
  )[3];
};
