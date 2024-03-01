import { random } from '0math'
import { toNumber } from 'abandonjs'

// 返回一个随机布尔值
// export function boolean(): boolean {
//   return Math.random() >= 0.5
// }

export const boolean = (min: string | number = 1, max: string | number = 0): boolean => {
  const tmin = toNumber(min)
  const tmax = toNumber(max)
  return random(tmin - 1, tmax || (tmin + 1) * 3 || 3) % 2 === 0
}
