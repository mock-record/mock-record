// import { random } from "abandonjs"
// import { Template } from "../type"
// import { Mock as _Mock } from '../generate'
// import { getRuleType } from './getRuleType'
// import { randomRule } from './randomRule'
// import { countRule } from './countRule'
// import { minAndMaxRule } from "./minAndMaxRule"
// import { dminAndDmaxRule } from './dminAndDmaxRule'

// export function MockRule(collect: Record<string, any>, key: string, template: Template): void {

// 	const ruleType = getRuleType(key, template)
// 	const { rule = '', valueType, name, min, max, dmin, multKey = [], count, handler } = ruleType

// 	// const Mock = _Mock.bind(collect)

// 	// if (key.indexOf('|') < 0) {
// 	// 	collect[key] = Mock(template)
// 	// 	return
// 	// }

// 	// 通过 指定key 生成 对象
// 	if (multKey.length > 0) {
// 		collect[name] = {}
// 		multKey.forEach(item => {
// 			MockRule(collect[name], item + '|' + rule, template)
// 		})
// 		if (handler) collect[name] = handler(collect[name])
// 		return
// 	}

// 	// 对 boolean 进行特殊处理
// 	if (valueType === 'Boolean') {
// 		collect[name] = random(min, max || ((min + 1) * 3) || 3) % 2 === 0
// 		if (handler) collect[name] = handler(collect[name])
// 		return
// 	}

// 	// 使用 +number 格式
// 	if (ruleType.random) {
// 		randomRule(collect, ruleType, template)
// 		if (handler) collect[name] = handler(collect[name])
// 		return
// 	}

// 	if (min !== undefined) {

// 		if (dmin !== undefined && valueType === 'Number') {
// 			dminAndDmaxRule(collect, ruleType)
// 			if (handler) collect[name] = handler(collect[name])
// 			return
// 		}

// 		if (max !== undefined) {
// 			minAndMaxRule(collect, ruleType, template)
// 			if (handler) collect[name] = handler(collect[name])
// 			return
// 		}

// 		if (count !== undefined) {
// 			countRule(collect, ruleType, template)
// 			if (handler) collect[name] = handler(collect[name])
// 			return
// 		}
		
// 	}

// 	if (handler) collect[name] = handler(collect[name])
// 	return

// }