import { RandomList } from '../../src'
import { test } from 'unit-testing-js'
import { isArray } from 'asura-eye'

test('test', isArray,
  { param: RandomList(3, 5)({ name: '@name' }), tobe: true },
  { param: RandomList(3, 9)('@name'), tobe: true },
)

