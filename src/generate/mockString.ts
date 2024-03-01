import { isFunction, isString } from 'asura-eye'
import { Template } from '../type'
import * as Random from '../random'
import { dictionary } from './dictionary'

// console.log(Object.keys(Random))

export function mockString(template: Template) {
  if (isString(template)) {
    if (template[0] !== '@') return template

    // eslint-disable-line no-useless-escape
    const [, controlIndex, ...params]: string[] = template.split(/@|\(|\)|,/) || []
    if (dictionary.has(controlIndex)) {
      if (isFunction(dictionary.get(controlIndex))) {
        return dictionary.get(controlIndex).bind(this)(...params)
      }
      return dictionary.get(controlIndex)
    }

    return Random[controlIndex](...params)
  }

  return ''
}
