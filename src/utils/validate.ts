export interface IRuleItem {
  type?: 'string' | 'number' | 'array'
  required?: boolean
  max?: number
  min?: number
  message?: string
}

export interface IRules {
  [key: string]: IRuleItem[]
}

export const checkRequired = (value: any, required: boolean = false): boolean =>
  !required ? true : String(value).length > 0

export const checkcCount = (
  value: number | string | [],
  min: number = 0,
  max?: number
): boolean => {
  const length = typeof value === 'number' ? value : value.length
  const vMin = length > min
  const vMax = max ? length < max : true
  return vMin && vMax
}

export const validate: { [func: string]: Function } = {
  common(rule: IRuleItem, value: string): boolean {
    return (
      checkRequired(value, rule.required) &&
      checkcCount(value, rule.min, rule.max)
    )
  },

  string(rule: IRuleItem, value: string): boolean {
    return true
  },

  number(rule: IRuleItem, value: number) {
    return true
  },

  array(rule: IRuleItem, value: []) {
    return true
  }
}

export default (rules: IRules) => (source: { [key: string]: any }) => {
  return new Promise((resolve, reject) => {
    for (const key in source) {
      const itemValue = source[key]
      const itemRules = rules[key]
      itemRules.forEach((element) => {
        validate.common(element, itemValue) &&
        validate[element.type || 'string'](element, itemValue)
          ? resolve(true)
          : reject(element.message)
      })
    }
  })
}
