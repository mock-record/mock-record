import { type } from 'abandonjs'
import { Template } from '../type'
import { FakeArray } from './FakeArray'
import { FakeObject } from './FakeObject'
import { FakeFunction } from './FakeFunction'
import { FakeString } from './FakeString'

export function Fake(template: Template) {

	try {
		switch (type(template)) {
			case 'Object': return FakeObject.bind(this)(template)
			case 'String': return FakeString.bind(this)(template)
			case 'Array': return FakeArray.bind(this)(template)
			case 'Function': return FakeFunction.bind(this)(template)
			default:
				return template
		}
	} catch (error) {
		console.error(error)
		return template
	}
}



export default Fake
