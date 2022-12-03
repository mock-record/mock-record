import { Template } from "../type";
import { Fake } from './Fake'

export function FakeArray(template: Template) {

	if (Array.isArray(template)) {
		return template.map(tmp => Fake(tmp))
	}

	return []
}