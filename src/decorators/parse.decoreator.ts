import { optionalChaining } from '@/utils/common'

/**
 * json解析ts实体类装饰器
 * @param {constructor} entity - 包含fromJSON静态方法的实体类
 * @param {string[]} options.properties - 接口返回值嵌套属性
 * @param {function} options.func - 自定义解析处理函数
 * @returns 实体类
 */
const Parse =
  (
    entity: any,
    options: {
      properties?: string[]
      func?: (...args: any[]) => any
    } = { properties: [] }
  ) =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const func = descriptor.value
    descriptor.value = (...args: any[]) => {
      return new Promise((resolve, reject) => {
        func(...args)
          .then((res: any) => {
            // 返回值存在嵌套关系时 用可选链获取目标对象
            const data = optionalChaining(
              res.data,
              ...(options.properties || [])
            )

            // 不存在fromJSON处理方法时默认返回
            if (!Reflect.has(entity, 'fromJSON')) {
              entity.fromJSON = (json: any) => json
            }

            // 当存在自定义函数时优先处理 判断返回值是否需要遍历解析
            resolve({
              ...res,
              data: options.func
                ? options.func(res)
                : Array.isArray(data)
                ? {
                    rows: data.map((item: any) => entity.fromJSON(item)),
                    pagination: res.data?.pagination
                  }
                : entity.fromJSON(data)
            })
          })
          .catch((error: any) => {
            reject(error)
          })
      })
    }
    return descriptor
  }

export default Parse
