import { isFunction } from 'asura-eye'
import { type Template } from '../type'

export function mockFunction(template: Template) {
  if (isFunction(template)) return (template as (...args: any[]) => any).bind(this)(template)
  return ''
}
