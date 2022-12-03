import { type } from 'abandonjs'
import { Template } from '../type'
import { MockArray } from './MockArray'
import { MockObject } from './MockObject'
import { MockFunction } from './MockFunction'
import { MockString } from './MockString'

export function Mock(template: Template) {

	try {
		switch (type(template)) {
			case 'Object': return MockObject.bind(this)(template)
			case 'String': return MockString.bind(this)(template)
			case 'Array': return MockArray.bind(this)(template)
			case 'Function': return MockFunction.bind(this)(template)
			default:
				return template
		}
	} catch (error) {
		console.error(error)
		return template
	}
}



export default Mock
