export const numWaterBottles = (
  numBottles: number,
  numExchange: number
): number => {
  const recursiveCount = (
    numFull: number,
    numExchange: number,
    totalCount = 0,
    numEmpty = 0
  ): number => {
    if (!numFull && numEmpty < numExchange) return totalCount;
    return recursiveCount(
      Math.floor(numEmpty / numExchange),
      numExchange,
      totalCount + numFull,
      numFull ? numFull + numEmpty : numEmpty % numExchange
    );
  };
  return recursiveCount(numBottles, numExchange);
};
