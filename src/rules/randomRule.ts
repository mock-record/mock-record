import { random, select, selects } from "abandonjs"
import { Template } from "../type"
import { Fake as _Fake } from '../generate'
import { RuleType } from "./getRuleType"

// 使用 +number 格式
export function randomRule(collect: Record<string, any>, ruleType: RuleType, template: Template) {
	const Fake = _Fake.bind(collect)
	const { name, min, max, handler, valueType } = ruleType

	if (Array.isArray(template)) {
		if (min === 1) {
			collect[name] = select(Fake(template))
		}
		if (min > 1) {
			collect[name] = selects(Fake(template), min, min)
		}

	} else if (valueType === 'Number') {
		collect[name] = random(template as number, template as number ** (min + 1))
	} else if (valueType === 'String') {
		collect[name] = new Array(random(min, max)).fill('').map(() => Fake(template)).join('')
	} else {
		collect[name] = Fake(template)
	}

	if (handler) collect[name] = handler(collect[name])
}