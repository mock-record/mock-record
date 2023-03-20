import { mock, initDictionary } from '../../src'
import { logGroup } from 'abandonjs'

initDictionary({
  'aaa': '__Dictionary__Value__',
  'bbb': function (a = '1', b = '2') {
    return '__Dictionary__Value__' + a + '---' + b
  }
})

logGroup('test',
  mock('@bbb(123,456)'),
  mock('@aaa'),
  mock({ 'nameX|2': { a: 'a', 'b': 'b', c: 'c' } }),
  mock({ 'nameX|1': ['a', 'b', 'c'] }),
  mock({ 'nameX': '@name', 'nameX2': '@name' }),
  mock({ 'nameOne|10': 10 }),
  mock({ 'nameOne|1': ['a', 'b', 'c', 'd'] }),
  mock({ 'nameOne|2': ['a', '@name', 'c', 'd'] }),
  mock({ 'nameX|2-4': '@name' }),
  mock({ 'nameX|0-2': '@name' }),
  mock({ 'nameX|2-4': '@name' }),
  mock({
    'list|1-3': {
      a: '@name',
      uid: '@uuid',
      id: '@id',
      fn: function (tmp) {
        return '123'
      },
    },
    'li1&c,d,e': "@name",
    'li1-1&&c,d,e': "@name",
    'li2&(5)c,d,e': "@name",
    'li2-1&&(5)c,d,e': "@name",
    'name&&(2)key1,key2,key3': '@name',
  }),
)