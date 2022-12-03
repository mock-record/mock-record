import { Mock } from '../../src'

// cases
export const cases = (index: string) => Mock({
	'key1': '@name',
	[`key01${index}`]: 1,
	[`key02${index}`]: 4,
	[`key3${index}`]: '@name',
	[`key4${index}`]: true,
	[`key5${index}`]: false,
	[`key6${index}`]: 'str ',
	[`key7${index}|key1,key2,key3`]: 'str ',
	[`key8${index}|key1,key2,key3|JsonString`]: 'str ',
	[`key800${index}`]: ['@name'],
	[`key801${index}`]: [true],
	[`key802_false${index}`]: [false, undefined, null, NaN],
	[`key810${index}`]: ['@name', 'b', 'c', 'd', true],
	[`key820${index}`]: [1],
	[`key811${index}|key1,key2,key3`]: 'str ',
	[`key812${index}|key1,key2,key3|JsonString`]: 'str ',
	[`key900${index}`]: {
		a: '@name',
		b: 'b',
		c: 'c',
		d: 'd',
		e: 'e',
	},
	[`key901${index}|key1,key2,key3`]: {
		a: '@name',
		b: 'b',
		c: 'c',
		d: 'd',
		e: 'e',
	},
	[`key902${index}|key1,key2,key3|JsonString`]: {
		a: '@name',
		b: 'b',
		c: 'c',
		d: 'd',
		e: 'e',
	},
	[`key1000${index}`]: function () {
		return `fn: key1: ${this.key1} `
	},
})