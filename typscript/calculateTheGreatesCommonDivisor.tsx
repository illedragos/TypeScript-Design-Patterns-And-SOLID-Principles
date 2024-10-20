const calculateTheGreatestCommonDivisor = (a: number, b: number): number => {
  if (b === 0) {
    return a;
  }
  return calculateTheGreatestCommonDivisor(b, a % b);
};
