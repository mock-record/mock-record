import { Template, RuleType } from '../type'
import { type } from 'abandonjs'
import { dictionary } from '../generate/dictionary'

const toNumber = (val?: number | string) => {
	if (val === undefined) return undefined
	const result = Number(val)
	if (isNaN(result)) {
		return undefined;
	}
	return result
}

function getRule(rule: string): Record<string, any> {

	let count = undefined
	let random = false
	const [minAndMax, dminAndDmax] = rule.split('.')
	const [min, max] = minAndMax && minAndMax.split('-') || [undefined, undefined]
	const [dmin, dmax] = dminAndDmax && dminAndDmax.split('-') || [undefined, undefined]

	if (max === undefined && min !== undefined) {
		count = min
	}

	if (Number(max) < Number(min)) {
		count = min
	}

	if (min && min.indexOf('+') === 0) {
		random = true
	}

	return {
		random,
		min: toNumber(min),
		max: toNumber(max),
		dmin: toNumber(dmin),
		dmax: toNumber(dmax),
		count: toNumber(count)
	}
}

export function getRuleType(key: string, template: Template): RuleType {
	const RuleType: RuleType = {
		name: '',
		valueType: type(template),
		rule: undefined,
		min: undefined,
		max: undefined,
		dmin: undefined,
		dmax: undefined,
		count: undefined,
		random: false,
		multKey: undefined,
		handler: undefined,
		_this: undefined,
	}

	const types: string[] = key.split('|')


	if (!types || types.length < 1) return;
	if (types[0] !== undefined) RuleType.name = types[0]
	if (types[1] !== undefined) {
		RuleType.rule = types[1]
		Object.assign(RuleType, getRule(types[1]))
	}
	if (types[2] !== undefined) RuleType.multKey = types[2].split(',')
	if (types[3] !== undefined) RuleType.handler = dictionary.get(types[3])

	return RuleType
}
