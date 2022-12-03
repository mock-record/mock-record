import { RandomList } from '../../src'
import { logGroup } from 'abandonjs'

logGroup('test',
  RandomList(3, 5)({ name: '@name' }),
  RandomList(3, 9)('@name'),
)

