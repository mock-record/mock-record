import { random } from 'abandonjs'
import { Template } from '../type'
import { Mock } from './Mock'

export function RandomList(min: number, max: number) {
	const __random__ = random(min, max, 0)
	return function (template: Template) {
		const list = []
		for (let i = 0; i < __random__; i++) {
			list.push(Mock(template))
		}
		return list
	}
}