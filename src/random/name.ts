import { nullToStringFn } from '../type'
import { male, female, cfirstNames, clastNames } from '../dictionary'
import { select } from 'abandonjs'

export const first: nullToStringFn = (): string => select(male.concat(female))
export const last: nullToStringFn = (): string => select(male)
export const name: nullToStringFn = (): string => select(male)
export const cfirst: nullToStringFn = (): string => select(cfirstNames)
export const clast: nullToStringFn = (): string => select(clastNames)
export const cname: nullToStringFn = (): string => cfirst() + clast()
