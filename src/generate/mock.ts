import { isArray, isObject, isString, isFunction } from 'asura-eye'
import type { Template } from '../type'
import { mockString } from './mockString'
import { mockFunction } from './mockFunction'
import { mockObject } from './mockObject'

export function mock(template: Template) {
  try {
    if (isString(template)) {
      return mockString.bind(this)(template)
    }
    if (isObject(template)) {
      return mockObject(mock).bind(this)(template)
    }
    if (isArray(template)) {
      return template.map(tmp => mock(tmp))
    }
    if (isFunction(template)) {
      return mockFunction.bind(this)(template)
    }
    return template
  } catch (error) {
    console.error(error)
    return template
  }
}
