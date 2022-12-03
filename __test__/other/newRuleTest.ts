import { Mock } from '../../src'
import { logGroup } from 'abandonjs'

1 && logGroup('test|num',
	Mock({ 'name2-10|1-10': ['@name','@name','@name','@name','@name','@name','@name','@name','@name'] }),
	Mock({ 'name2-10|1-10|b,c,d': ['@name','@name','@name','@name','@name','@name','@name','@name','@name'] }),
	Mock({ 'name2-10|1-10|b,c,d|JsonString': ['@name','@name','@name','@name','@name','@name','@name','@name','@name'] }),
	Mock({ 'name2-10|1-10': '@name' }),
	Mock({ 'name2-10|1-10': '@name' }),
	Mock({ 'name01|+2': ['@name','@name','@name'] }),
	Mock({ 'name01|+2': [1,2,3] }),
	Mock({ 'name0211|+1': [1,2,3] }),
	Mock({ 'name021|1': [1,2,3] }),
	Mock({ 'name02|2': [1,2,3] }),
	Mock({ 'name1|1-50': 12 }),
	Mock({ 'name2|1-50|a,b,c': 12 }),
	Mock({ 'name3|1-50|a,b,c|JsonString': 12 }),
	Mock({ 'name1|1-5': '12' }),
	Mock({ 'name2|1-5|a,b,c': '12' }),
	Mock({ 'name3|1-5|a,b,c|JsonString': '12' }),
)
1 && logGroup('test|+1',
	Mock({ 'name1|+1': 12 }),
	Mock({ 'name2|+1|a,b,c': 12 }),
	Mock({ 'name3|+5||JsonString': 13 }),
	Mock({ 'name4|+1|a,b,c|JsonString': 12 }),
)

1 && logGroup('test|num',

	Mock({ 'name1|1': 12 }),
	Mock({ 'name2|1|a,b,c': 12 }),
	Mock({ 'name3|5': 13 }),
	Mock({
		'name32|2|': {
			a: 'a',
			b: 'b',
			c: 'c',
			d: 'd'
		}
	}),
	Mock({
		'name321|2||JsonString': {
			a: 'a',
			b: 'b',
			c: 'c',
			d: 'd'
		}
	}),
	Mock({ 'name3|5||JsonString': 13 }),
	Mock({ 'name4|1|a,b,c|JsonString': 12 }),
	Mock({ 'name4|1|a,b,c|JsonString': false }),
	Mock({ 'name4|1|a,b,c': false }),
	Mock({ 'name4|1': false }),

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
	      return '123-' + JSON.stringify(this)
	    },
	  },
	  // 'list2|3-6': [{
	  //   a: '@name',
	  //   uid: '@uuid',
	  //   id: '@id',
	  //   fn: function (tmp) {
	  //     return '123-' + JSON.stringify(this)
	  //   },
	  // }],
	  // 'li1&c,d,e': "@name",
	  // 'li1-1&&c,d,e': "@name",
	  // 'li2&(5)c,d,e': "@name",
	  // 'li2-1&&(5)c,d,e': "@name",
	  // 'name&&(2)key1,key2,key3': '@name',
	}),
)