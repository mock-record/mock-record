import { Fake } from '../../src'
import { logGroup } from 'abandonjs'

1 && logGroup('test|num',
	Fake({ 'name2-10|1-10': ['@name','@name','@name','@name','@name','@name','@name','@name','@name'] }),
	Fake({ 'name2-10|1-10|b,c,d': ['@name','@name','@name','@name','@name','@name','@name','@name','@name'] }),
	Fake({ 'name2-10|1-10|b,c,d|JsonString': ['@name','@name','@name','@name','@name','@name','@name','@name','@name'] }),
	Fake({ 'name2-10|1-10': '@name' }),
	Fake({ 'name2-10|1-10': '@name' }),
	Fake({ 'name01|+2': ['@name','@name','@name'] }),
	Fake({ 'name01|+2': [1,2,3] }),
	Fake({ 'name0211|+1': [1,2,3] }),
	Fake({ 'name021|1': [1,2,3] }),
	Fake({ 'name02|2': [1,2,3] }),
	Fake({ 'name1|1-50': 12 }),
	Fake({ 'name2|1-50|a,b,c': 12 }),
	Fake({ 'name3|1-50|a,b,c|JsonString': 12 }),
	Fake({ 'name1|1-5': '12' }),
	Fake({ 'name2|1-5|a,b,c': '12' }),
	Fake({ 'name3|1-5|a,b,c|JsonString': '12' }),
)
1 && logGroup('test|+1',
	Fake({ 'name1|+1': 12 }),
	Fake({ 'name2|+1|a,b,c': 12 }),
	Fake({ 'name3|+5||JsonString': 13 }),
	Fake({ 'name4|+1|a,b,c|JsonString': 12 }),
)

1 && logGroup('test|num',

	Fake({ 'name1|1': 12 }),
	Fake({ 'name2|1|a,b,c': 12 }),
	Fake({ 'name3|5': 13 }),
	Fake({
		'name32|2|': {
			a: 'a',
			b: 'b',
			c: 'c',
			d: 'd'
		}
	}),
	Fake({
		'name321|2||JsonString': {
			a: 'a',
			b: 'b',
			c: 'c',
			d: 'd'
		}
	}),
	Fake({ 'name3|5||JsonString': 13 }),
	Fake({ 'name4|1|a,b,c|JsonString': 12 }),
	Fake({ 'name4|1|a,b,c|JsonString': false }),
	Fake({ 'name4|1|a,b,c': false }),
	Fake({ 'name4|1': false }),

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