import { random } from "0math"
import { RuleType } from "../type"

export function dminAndDmaxRule(collect: Record<string, any>, ruleType: RuleType) {

	const { valueType, name, min, max, dmin, dmax } = ruleType

	const integerPart = random(min, max || min)
	const decimalPartLen = random(dmin, dmax || dmin)
	let decimalPart = random(
		(10 ** decimalPartLen) - (10 ** (decimalPartLen - 1)),
		10 ** decimalPartLen - 1
	)
	const decimalPartStr = String(decimalPart)
	if (decimalPartStr[decimalPartStr.length - 1] === '0') {
		++decimalPart;
	}

	if (valueType !== 'Number') return;

	collect[name] = parseFloat(`${integerPart}.${decimalPart}`)

	return
}
