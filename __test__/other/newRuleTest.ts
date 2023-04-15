import { mock } from '../../src'
import { isNoEmpty } from 'abandonjs'
import { test } from 'unit-testing-js'


test('test|num', isNoEmpty,
	...[

		({ 'name2-10|1-10': ['@name', '@name', '@name', '@name', '@name', '@name', '@name', '@name', '@name'] }),
		({ 'name2-10|1-10|b,c,d': ['@name', '@name', '@name', '@name', '@name', '@name', '@name', '@name', '@name'] }),
		({ 'name2-10|1-10|b,c,d|JsonString': ['@name', '@name', '@name', '@name', '@name', '@name', '@name', '@name', '@name'] }),
		({ 'name2-10|1-10': '@name' }),
		({ 'name2-10|1-10': '@name' }),
		({ 'name01|+2': ['@name', '@name', '@name'] }),
		({ 'name01|+2': [1, 2, 3] }),
		({ 'name0211|+1': [1, 2, 3] }),
		({ 'name021|1': [1, 2, 3] }),
		({ 'name02|2': [1, 2, 3] }),
		({ 'name1|1-50': 12 }),
		({ 'name2|1-50|a,b,c': 12 }),
		({ 'name3|1-50|a,b,c|JsonString': 12 }),
		({ 'name1|1-5': '12' }),
		({ 'name2|1-5|a,b,c': '12' }),
		({ 'name3|1-5|a,b,c|JsonString': '12' }),
		({ 'name1|+1': 12 }),
		({ 'name2|+1|a,b,c': 12 }),
		({ 'name3|+5||JsonString': 13 }),
		({ 'name4|+1|a,b,c|JsonString': 12 }),
		({ 'name1|1': 12 }),
		({ 'name2|1|a,b,c': 12 }),
		({ 'name3|5': 13 }),
		({
			'name32|2|': {
				a: 'a',
				b: 'b',
				c: 'c',
				d: 'd'
			}
		}),
		({
			'name321|2||JsonString': {
				a: 'a',
				b: 'b',
				c: 'c',
				d: 'd'
			}
		}),
		({ 'name3|5||JsonString': 13 }),
		({ 'name4|1|a,b,c|JsonString': 12 }),
		({ 'name4|1|a,b,c|JsonString': false }),
		({ 'name4|1|a,b,c': false }),
		({ 'name4|1': false }),

		({ 'nameX|2': { a: 'a', 'b': 'b', c: 'c' } }),
		({ 'nameX|1': ['a', 'b', 'c'] }),
		({ 'nameX': '@name', 'nameX2': '@name' }),
		({ 'nameOne|10': 10 }),
		({ 'nameOne|1': ['a', 'b', 'c', 'd'] }),
		({ 'nameOne|2': ['a', '@name', 'c', 'd'] }),
		({ 'nameX|2-4': '@name' }),
		({ 'nameX|0-2': '@name' }),
		({ 'nameX|2-4': '@name' }),
		({
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
	].map(item => {
		return { param: item !== mock(item), tobe: true }
	})
)