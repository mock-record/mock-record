import Util from '../util'
import { nullToStringFn } from '../type'
import { male, female, cfirstNames, clastNames } from '../dictionary'
const { pick } = Util

export const first: nullToStringFn = (): string => pick(male.concat(female))
export const last: nullToStringFn = (): string => pick(male)
export const name: nullToStringFn = (): string => pick(male)
export const cfirst: nullToStringFn = (): string => pick(cfirstNames)
export const clast: nullToStringFn = (): string => pick(clastNames)
export const cname: nullToStringFn = (): string => cfirst() + clast()
