import { ObjectType } from 'abandonjs'
import { isEffectArray, isNumber } from 'asura-eye'
import type { Template, Mock } from '../type'
import { getRuleType } from './getRuleType'

const mockRule = (mock: Mock) =>
  function (collect: Record<string, any>, key: string, template: Template): void {
    const ruleType = getRuleType(key, template)
    const { name, keys = [], count, handler } = ruleType
    // console.log({ ruleType })
    // 通过 指定key 生成 对象
    let result = template
    if (isEffectArray(keys)) {
      const temp = {}
      keys.forEach(key => {
        temp[key] = template
      })
      result = temp
    }

    if (isNumber(count)) {
      collect[name] = new Array(count).fill('').map(() => mock.bind(this)(result))
    } else {
      collect[name] = mock.bind(this)(result)
    }
    console.log({ ruleType })
    if (handler) collect[name] = handler(collect[name])
    return
  }

export const mockObject = (mock: Mock) =>
  function mockObject(template: ObjectType<any>): ObjectType<any> {
    const result: ObjectType<any> = {}

    for (const key in template) {
      if (key.indexOf('|') === -1) {
        result[key] = mock.bind(this)(template[key])
        continue
      }

      mockRule(mock).bind(this)(result, key, template[key])
    }

    return result
  }
