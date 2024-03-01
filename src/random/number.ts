import { random } from '0math'
import { likeNumber } from 'asura-eye'

const numCore = (minOrigin = '0', max = '10') => {

	// '@num(11-12.4-8)'
  if (!likeNumber(minOrigin)) {
    const [minAndMax, dminAndDmax] = minOrigin.split('.')
    const [tmin, tmax] = (minAndMax && minAndMax.split('-')) || [undefined, undefined]
    const [tdmin, tdmax] = (dminAndDmax && dminAndDmax.split('-')) || [undefined, undefined]
    let result = 0
    if (likeNumber(tmin)) {
      result += random(Number(tmin) - 1, likeNumber(tmax) ? Number(tmax) : Number(tmin))
    }
    if (likeNumber(tdmin)) {
      const len = random(Number(tdmin) - 1, likeNumber(tdmax) ? Number(tdmax) : Number(tdmin))
      result += Number(
        '0.' +
          new Array(len)
            .fill('')
            .map(() => random(0, 9))
            .join('')
      )
    }
    return result
  }
  return random(Number(minOrigin) - 1, Number(max))
}

export function num(min = '0', max = '10') {
  return numCore(min, max)
}

export function number(min = '0', max = '10') {
  return numCore(min, max)
}
