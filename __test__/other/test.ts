import { Mock, initDictionary } from '../../src'
import { logGroup } from 'abandonjs'

initDictionary({
  'aaa': '__Dictionary__Value__',
  'bbb': function (a = '1', b = '2') {
    return '__Dictionary__Value__' + a + '---' + b
  }
})

logGroup('test',
  Mock('@bbb(123,456)'),
  Mock('@aaa'),
  Mock({ 'nameX|2': { a: 'a', 'b': 'b', c: 'c' } }),
  Mock({ 'nameX|1': ['a', 'b', 'c'] }),
  Mock({ 'nameX': '@name', 'nameX2': '@name' }),
  Mock({ 'nameOne|10': 10 }),
  Mock({ 'nameOne|1': ['a', 'b', 'c', 'd'] }),
  Mock({ 'nameOne|2': ['a', '@name', 'c', 'd'] }),
  Mock({ 'nameX|2-4': '@name' }),
  Mock({ 'nameX|0-2': '@name' }),
  Mock({ 'nameX|2-4': '@name' }),
  Mock({
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