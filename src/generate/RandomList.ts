import { random } from 'abandonjs'
import { Template } from '../type'
import { Fake } from './Fake'

export function RandomList(min: number, max: number) {
	const __random__ = random(min, max, 0)
	return function (template: Template) {
		const list = []
		for (let i = 0; i < __random__; i++) {
			list.push(Fake(template))
		}
		return list
	}
}