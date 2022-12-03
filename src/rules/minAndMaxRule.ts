import { random, selects, concat, ceil } from "abandonjs"
import { Template } from "../type"
import { Mock as _Mock } from '../generate'
import { RuleType } from "./getRuleType"

export function minAndMaxRule(collect: Record<string, any>, ruleType: RuleType, template: Template) {
	const { valueType, name, min, max } = ruleType

	const Mock = _Mock.bind(collect)

	if (Array.isArray(template)) {

		const len = ceil(max / template.length)

		if (len === 1) {
			collect[name] = [Mock(template[0])]
			return
		}

		const newArray = concat(...new Array(len)
			.fill(undefined)
			.map(() => Mock(template)))

		collect[name] = selects(
			newArray,
			min,
			max < newArray.length ? max : newArray.length
		)
		return
	}



	if (valueType === 'Number') {

		let newValue = random(min, max)

		if (min === 0 && max === undefined) {
			newValue = 0
		}

		if (min === 1 && max === undefined) {
			newValue = collect[name]
		}

		collect[name] = newValue
	
		return
	}

	const randomNum = random(min, max)

	if (valueType === 'String') {
		collect[name] = new Array(ceil(randomNum)).fill('').map(() => Mock(template)).join('')
		return
	}

	collect[name] = new Array(ceil(randomNum)).fill('').map(() => Mock(template))
	return
}
