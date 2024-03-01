import { Template, RuleType } from '../type'
import { type, likeNumber, isNaN } from 'asura-eye'
import { dictionary } from '../generate/dictionary'
import { random } from '0math'

const toNumber = (val?: number | string) => {
  if (val === undefined) return undefined
  const result = Number(val)
  if (isNaN(result)) {
    return undefined
  }
  return result
}

const getCount = (min?: string, max?: string) => {
  if (max === undefined && min !== undefined) {
    return Number(min)
  }

  if (Number(max) < Number(min)) {
    return Number(min)
  }

  if (likeNumber(min) && likeNumber(max)) {
    return random(Number(min) - 1, Number(max))
  }

  return undefined
}

export function getRuleType(key: string, template: Template): RuleType {
  const types: string[] = key.split('|')
  const [name, rule, keysString, handler]: string[] = types
  console.log(types)
  const [minAndMax, dminAndDmax] = rule.split('.')
  const [min, max] = (minAndMax && minAndMax.split('-')) || [undefined, undefined]
  const [dmin, dmax] = (dminAndDmax && dminAndDmax.split('-')) || [undefined, undefined]

  const ruleType: RuleType = {
    name,
    rule,
    template,
    valueType: type(template),
    min: toNumber(min),
    max: toNumber(max),
    dmin: toNumber(dmin),
    dmax: toNumber(dmax),
    count: getCount(min, max),
    random: min && min.indexOf('+') === 0,
    keys: keysString.split(',').filter(Boolean),
    handler: dictionary.get(handler),
    _this: this
  }

  return ruleType
}
