import { Template } from "../type";
import { mock } from './mock'

export function mockArray(template: Template) {

	if (Array.isArray(template)) {
		return template.map(tmp => mock(tmp))
	}

	return []
}