import { random } from '0math'
import { Template } from '../type'
import { mock } from './mock'

export function randomList(min: number, max: number) {
	const __random__ = random(min, max, 0)
	return function (template: Template) {
		const list = []
		for (let i = 0; i < __random__; i++) {
			list.push(mock(template))
		}
		return list
	}
}