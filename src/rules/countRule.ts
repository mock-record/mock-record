import { random, select, selects, concat, ceil } from "abandonjs"
import { Template } from "../type"
import { Mock as _Mock } from '../generate'
import { RuleType } from "./getRuleType"

export function countRule(collect: Record<string, any>, ruleType: RuleType, template: Template) {

	const { valueType, name, count } = ruleType
	const Mock = _Mock.bind(collect)
	const tmp = Mock(template)

	if (count < 1) {
		collect[name] = undefined
	}

	if (valueType === 'Number') {
		collect[name] = random(count, (count ** 3))
		return
	}

	if (valueType === 'Array') {

		if (count === 1) {
			collect[name] = select(tmp)
		}
		if (count > 1) {
			collect[name] = selects(
				concat(...new Array(ceil(count / tmp.length))
					.fill(undefined)
					.map(() => Mock(template))),
				count,
				count
			)
		}
		return
	}

	if (valueType === 'Object') {
		const tmpKeys = Object.keys(tmp) || []
		let len = tmpKeys.length
		while (len > count) {
			const index = select(Object.keys(tmp))
			if (index) {
				delete tmp[index];
				len--;
			}
		}
		collect[name] = tmp
		return
	}

	collect[name] = new Array(count).fill('').map(() => Mock(template)).join('')
	return
}