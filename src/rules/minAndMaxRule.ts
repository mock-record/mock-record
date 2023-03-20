import { random, selects, concat, ceil, ObjectType } from "abandonjs"
import { Template, RuleType } from "../type"

export function minAndMaxRuleHoc(_Fake: (template) => any) {
	return function (collect: ObjectType<any>, ruleType: RuleType, template: Template) {
		const { valueType, name, min, max } = ruleType

		const Fake = _Fake.bind(collect)

		if (Array.isArray(template)) {

			const len = ceil(max / template.length)

			if (len === 1) {
				collect[name] = [Fake(template[0])]
				return
			}

			const newArray = concat(...new Array(len)
				.fill(undefined)
				.map(() => Fake(template)))

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
			collect[name] = new Array(ceil(randomNum)).fill('').map(() => Fake(template)).join('')
			return
		}

		collect[name] = new Array(ceil(randomNum)).fill('').map(() => Fake(template))
		return
	}
}
