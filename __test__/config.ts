import { test, toBe } from 'unit-testing-js'
import { isEmpty, isEqual } from 'abandonjs'
import { mock } from '../src'

export const config = {
	log: false,
}

export function testMock(name: string, list: string[]) {
	test(name, toBe,
		...list.map((item, index) => {
			const value = mock(item);

			if (config.log) {
				console.log(`${name}:${index} ${item} ${value}`)
			}

			if (
				isEmpty(value) || isEmpty(item)
				|| isEqual(value, item)
			) {
				console.log(`${name}:${index} ${item} ${value}`)
			}

			return ({ param: value !== item, tobe: true })
		})
	)
}



