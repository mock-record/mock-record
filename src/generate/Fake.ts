import { type, random, select, selects, concat, ceil, ObjectType } from 'abandonjs'
import { Template, RuleType } from '../type'
import * as Random from '../random'
import { dictionary } from './dictionary'
import { getRuleType } from '../rules/getRuleType'
// import { randomRule } from '../rules/randomRule'
// import { countRule } from '../rules/countRule'
// import { minAndMaxRule } from "../rules/minAndMaxRule"
import { dminAndDmaxRule } from '../rules/dminAndDmaxRule'


export function minAndMaxRule(collect: ObjectType<any>, ruleType: RuleType, template: Template) {
	const { valueType, name, min, max } = ruleType

	const _Fake = Fake.bind(collect)

	if (Array.isArray(template)) {

		const len = ceil(max / template.length)

		if (len === 1) {
			collect[name] = [_Fake(template[0])]
			return
		}

		const newArray = concat(...new Array(len)
			.fill(undefined)
			.map(() => _Fake(template)))

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
		collect[name] = new Array(ceil(randomNum)).fill('').map(() => _Fake(template)).join('')
		return
	}

	collect[name] = new Array(ceil(randomNum)).fill('').map(() => _Fake(template))
	return
}

export function randomRule(collect: Record<string, any>, ruleType: RuleType, template: Template) {
	const _Fake = Fake.bind(collect)
	const { name, min, max, handler, valueType } = ruleType

	if (Array.isArray(template)) {
		if (min === 1) {
			collect[name] = select(_Fake(template))
		}
		if (min > 1) {
			collect[name] = selects(_Fake(template), min, min)
		}

	} else if (valueType === 'Number') {
		collect[name] = random(template as number, template as number ** (min + 1))
	} else if (valueType === 'String') {
		collect[name] = new Array(random(min, max)).fill('').map(() => _Fake(template)).join('')
	} else {
		collect[name] = _Fake(template)
	}

	if (handler) collect[name] = handler(collect[name])
}

export function countRule(collect: Record<string, any>, ruleType: RuleType, template: Template) {

	const { valueType, name, count } = ruleType
	const _Fake = Fake.bind(collect)
	const tmp = _Fake(template)

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
					.map(() => _Fake(template))),
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

	collect[name] = new Array(count).fill('').map(() => _Fake(template)).join('')
	return
}


export function FakeRule(collect: Record<string, any>, key: string, template: Template): void {

	const ruleType = getRuleType(key, template)
	const { rule = '', valueType, name, min, max, dmin, multKey = [], count, handler } = ruleType

	// const Fake = _Fake.bind(collect)

	// if (key.indexOf('|') < 0) {
	// 	collect[key] = Fake(template)
	// 	return
	// }

	// 通过 指定key 生成 对象
	if (multKey.length > 0) {
		collect[name] = {}
		multKey.forEach(item => {
			FakeRule(collect[name], item + '|' + rule, template)
		})
		if (handler) collect[name] = handler(collect[name])
		return
	}

	// 对 boolean 进行特殊处理
	if (valueType === 'Boolean') {
		collect[name] = random(min, max || ((min + 1) * 3) || 3) % 2 === 0
		if (handler) collect[name] = handler(collect[name])
		return
	}

	// 使用 +number 格式
	if (ruleType.random) {
		randomRule(collect, ruleType, template)
		if (handler) collect[name] = handler(collect[name])
		return
	}

	if (min !== undefined) {

		if (dmin !== undefined && valueType === 'Number') {
			dminAndDmaxRule(collect, ruleType)
			if (handler) collect[name] = handler(collect[name])
			return
		}

		if (max !== undefined) {
			minAndMaxRule(collect, ruleType, template)
			if (handler) collect[name] = handler(collect[name])
			return
		}

		if (count !== undefined) {
			countRule(collect, ruleType, template)
			if (handler) collect[name] = handler(collect[name])
			return
		}

	}

	if (handler) collect[name] = handler(collect[name])
	return

}




export function RandomList(min: number, max: number) {
	const __random__ = random(min, max, 0)
	return function (template: Template) {
		const list = []
		for (let i = 0; i < __random__; i++) {
			list.push(Fake(template))
		}
		return list
	}
}

export function FakeString(template: Template) {

	if (typeof template === 'string') {
		if (template[0] !== '@') return template

		// eslint-disable-line no-useless-escape
		const [, controlIndex, ...params]: string[] = template.split(/@|\(|\)|,/) || []
		if (dictionary.has(controlIndex)) {
			if (type(dictionary.get(controlIndex)) === 'Function') {
				return dictionary.get(controlIndex).bind(this)(...params)
			}
			return dictionary.get(controlIndex)
		}

		return Random[controlIndex](...params)
	}

	return ''
}

export function FakeObject(template: Record<string, any>): Record<string, any> {
	const result: Record<string, any> = {}

	for (const key in template) {

		if (key.indexOf('|') < 0) {
			result[key] = Fake(template[key])
			continue
		}

		FakeRule(result, key, template[key])
	}

	return result
}

export function FakeFunction(template: Template) {
	if (typeof template === 'function' && type(template) === 'Function')
		return (template as (...args: any[]) => any).bind(this)(template)
	return ''
}

export function FakeArray(template: Template) {

	if (Array.isArray(template)) {
		return template.map(tmp => Fake(tmp))
	}

	return []
}

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