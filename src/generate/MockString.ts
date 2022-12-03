import { type } from 'abandonjs'
import { Template } from '../type'
import * as Random from '../random'
import { dictionary } from './dictionary'

export function MockString(template: Template) {

	if (typeof template === 'string') {
		if (template[0] !== '@') return template

		// eslint-disable-line no-useless-escape
		const [, controlIndex, ...params]: string[] = template.split(/@|\(|\)|,/) || []
		if (dictionary.has(controlIndex)) {
			if (type(dictionary.get(controlIndex)) === 'Function') {
				return dictionary.get(controlIndex).bind(this)(...params)
			}
			return dictionary.get(controlIndex)
		}

		return Random[controlIndex](...params)
	}

	return ''
}