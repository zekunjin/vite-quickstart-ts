export const between = (target: number, range: number[]) => {
  const [min, max] = range
  return target >= min && target < max
}
