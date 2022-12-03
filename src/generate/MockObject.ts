// import { isEmpty, random, select, selects, type } from 'abandonjs'
// import { Template, BaseSupportObject, BaseSupportArray } from '../type'
// import { Mock } from './Mock'
// import Constant from '../constant'
import { MockRule } from '../rules'

// const { RE_KEY, RE_Object_KEY, RE_Object_str_KEY } = Constant

export function MockObject(template: Record<string, any>): Record<string, any> {
	const result: Record<string, any> = {}

	for (const key in template) {

		MockRule(result, key, template[key])

		// 'type | [数字]' 特殊处理
		// if (RE_KEY.test(key)) {
		// 	// eslint-disable-next-line no-useless-escape
		// 	const [name, min, max]: (string | undefined)[] = key.split(/\||\-/)
		// 	//  多选一
		// 	if (min === '1' && max === undefined) {
		// 		result[name] = select(template[key] as BaseSupportArray)
		// 	}
		// 	// 指定数量
		// 	if (!isEmpty(min) && min !== '1' && max === undefined) {
		// 		const tmp_list: any[] = []
		// 		let count = Number(min)
		// 		while (count--) tmp_list.push(Mock(template[key]));
		// 		result[name] = tmp_list
		// 	}
		// 	// 随机数
		// 	if (!isEmpty(min) && !isEmpty(max) && type(template[key]) === 'Number') {
		// 		result[name] = random(Number(min), Number(max))
		// 	}
		// 	// 按照 generate 生成
		// 	if (!isEmpty(min) && !isEmpty(max)) {
		// 		const tmp_list: any = []
		// 		let tmp_max = Number(max)
		// 		while (tmp_max--) { tmp_list.push(Mock(template[key])) }
		// 		const val: Template = selects(tmp_list, Number(min), Number(max))
		// 		result[name] = val || ''
		// 	}

		// } else if (RE_Object_KEY.test(key)) {
		// 	const tmpVal: any = template[key]
		// 	const [name, ...tkeys] = key.split(/&&|&|,/)
		// 	let len = 0

		// 	if (/\(\d+\)/.test(tkeys[0])) {
		// 		const [, num, tkey]: any = tkeys[0].split(/\(|\)/)
		// 		tkeys[0] = tkey
		// 		len = Number(num)
		// 	}

		// 	// eslint-disable-next-line no-useless-escape
		// 	if (/(\d+\-\d+)/.test(tkeys[0])) {
		// 		// eslint-disable-next-line no-useless-escape
		// 		const [min, max, , tkey]: any = tkeys[0].split(/\-|\(|\)/)
		// 		tkeys[0] = tkey
		// 		len = random(Number(min), Number(max))
		// 	}

		// 	if (len > 0) {

		// 		result[name] = []
		// 		while (len--) {
		// 			const result_tmp: BaseSupportObject = {}
		// 			tkeys.forEach((item: string): void => {
		// 				result_tmp[item] = Mock(tmpVal)
		// 			})

		// 				; (result[name] as BaseSupportArray).push(result_tmp)
		// 		}
		// 	} else {
		// 		result[name] = {}
		// 		tkeys.forEach((item: string): void => {
		// 			(result[name] as BaseSupportObject)[item] = Mock(tmpVal)
		// 		})
		// 	}
		// 	if (RE_Object_str_KEY.test(key)) { result[name] = JSON.stringify(result[name]) }
		// } else {
		// 	result[key] = Mock(template[key])
		// }
	}

	return result
}



