import { random, select, selects } from "abandonjs"
import { Template } from "../type"
import { Mock as _Mock } from '../generate'
import { RuleType } from "./getRuleType"

// 使用 +number 格式
export function randomRule(collect: Record<string, any>, ruleType: RuleType, template: Template) {
	const Mock = _Mock.bind(collect)
	const { name, min, max, handler, valueType } = ruleType

	if (Array.isArray(template)) {
		if (min === 1) {
			collect[name] = select(Mock(template))
		}
		if (min > 1) {
			collect[name] = selects(Mock(template), min, min)
		}

	} else if (valueType === 'Number') {
		collect[name] = random(template as number, template as number ** (min + 1))
	} else if (valueType === 'String') {
		collect[name] = new Array(random(min, max)).fill('').map(() => Mock(template)).join('')
	} else {
		collect[name] = Mock(template)
	}

	if (handler) collect[name] = handler(collect[name])
}