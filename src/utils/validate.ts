export interface IRuleItem {
  type?: 'string' | 'number'
  required?: boolean
  max?: number
  min?: number
  message?: string
}

export interface IRules {
  [key: string]: IRuleItem[]
}

export const checkRequired = (value: any, required: boolean = false): boolean =>
  required ? required && value : true

export const checkcCount = (
  value: number,
  min: number = 0,
  max?: number
): boolean => {
  const vMin = value > min
  const vMax = max ? value < max : true
  return vMin && vMax
}

export const validate: { [func: string]: Function } = {
  string(rule: IRuleItem, value: string): boolean {
    return (
      checkRequired(value, rule.required) &&
      checkcCount(value.length, rule.min, rule.max)
    )
  },
  number(rule: IRuleItem, value: number) {
    return (
      checkRequired(value, rule.required) &&
      checkcCount(value, rule.min, rule.max)
    )
  }
}

export default (rules: IRules) => (source: { [key: string]: any }) => {
  return new Promise((resolve, reject) => {
    for (const key in source) {
      const itemValue = source[key]
      const itemRules = rules[key]
      itemRules.forEach((element) => {
        validate[element.type || 'string'](element, itemValue)
          ? resolve(true)
          : reject(element.message)
      })
    }
  })
}
