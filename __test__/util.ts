import { mock } from '../src'
import { color } from 'rh-color'
import { isObject } from 'asura-eye'
import { stringify } from 'abandonjs'

const noLogs = [
  //
  'address',
  'base',
  'color',
  'time',
  'num',
  'paragraph',
  'sentence',
  // 'object',
]
export const lg = (name: string, ...list: any[]) => {
  if (noLogs.includes(name)) return
  console.log(`---${name}---`)
  list.forEach((_, i) => {
    if(isObject(_)){

    console.log(color(i + 1 + '.' + stringify(_) + ': ', 'Cyan'), mock(_))
      return
    }
    console.log(color(i + 1 + '.' + _ + ': ', 'Cyan'), mock(_))
    // log(color(i + '.' + _ + ': ', 'Cyan'), mock(_))
  })
}
