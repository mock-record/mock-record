import { random, select } from 'abandonjs'
import Constant from '../constant'

const { CHARS } = Constant

export function char(): string {
  return select(CHARS.split('')) || ''
}

export function string(min = '0', max = '10'): string {
  let result: string = char()
  let len: number = random(Number(min), Number(max), 0)
  while (--len) { result += char() }
  return result
}

// 返回一个随机布尔值
export function boolean(): boolean {
  return Math.random() >= 0.5
}

// id
export function id(): string {
  // eslint-disable-next-line
  return Math.random().toString().slice(2)
}

/**
 * @param {string} value uuid 的格式 default:'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
 * @returns {string} uuid
 * @description 生成随机uid
 */

export function uuid(value: string): string {
  const val: string = value || 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  let d: number = new Date().getTime() // 随机种子
  return val.replace(/[xy]/g, function (c: string): string {
    const r: number = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}
