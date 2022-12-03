import { Template } from "../type";
import { Mock } from './Mock'

export function MockArray(template: Template) {

	if (Array.isArray(template)) {
		return template.map(tmp => Mock(tmp))
	}

	return []
}