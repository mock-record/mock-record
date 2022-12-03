import { Fake, initDictionary } from '../../src'
import { logGroup } from 'abandonjs'

initDictionary({
  'aaa': '__Dictionary__Value__',
  'bbb': function (a = '1', b = '2') {
    return '__Dictionary__Value__' + a + '---' + b
  }
})

logGroup('test',
  Fake('@bbb(123,456)'),
  Fake('@aaa'),
  Fake({ 'nameX|2': { a: 'a', 'b': 'b', c: 'c' } }),
  Fake({ 'nameX|1': ['a', 'b', 'c'] }),
  Fake({ 'nameX': '@name', 'nameX2': '@name' }),
  Fake({ 'nameOne|10': 10 }),
  Fake({ 'nameOne|1': ['a', 'b', 'c', 'd'] }),
  Fake({ 'nameOne|2': ['a', '@name', 'c', 'd'] }),
  Fake({ 'nameX|2-4': '@name' }),
  Fake({ 'nameX|0-2': '@name' }),
  Fake({ 'nameX|2-4': '@name' }),
  Fake({
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