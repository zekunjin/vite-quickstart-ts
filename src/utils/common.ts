export const optionalChaining = (
  obj: { [key: string]: any },
  ...rest: string[]
) => {
  let tmp = obj
  for (const key in rest) {
    const name = rest[key]
    tmp = tmp?.[name]
  }
  return tmp
}
