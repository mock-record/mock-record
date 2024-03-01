import { lg } from '../util'
import { ceil, random } from '0math'
console.log(random(1, 1), ceil(11.1))
lg(
  'object',

  {
    // t: '@title(3,4)',
    // 'boolean1|1': true,
    // 'boolean2|1-2': true,
    boolean1: '@boolean(1)',
    boolean2: '@boolean(1,2)',
    num1: '@num(11-12)',
    num2: '@num(11-12.4-8)',
    'list|+1': ['a', 'b', 'c'],
    'list2|1': ['a', 'b', 'c']
  },
  {
    'list2|1': ['a', 'b', 'c']
  },
  // { 'name||a': '@name' },
  { 'name||a,b,c': '@name' },
  { 'name|1|a,b,c': '@name' },
  { 'name|3|a,b,c': '@name' },
  { 'name|3-8|a,b,c': '@name' },
  // { 'name|3': '@name' },
  // { 'name|3-5': '@name' },
  // { 'num|1-9': 1 },
  // { 'num|12': 1 },
  // { 'value|2-4': { name: '@name' } }
)
