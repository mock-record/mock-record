import { default as  DICT } from './dict.json'
import { REGION } from './region'
export { REGION }

function tree(list: any[]) {
	const mapped = {}
	for (let i = 0, item; i < list.length; i++) {
		item = list[i]
		if (!item || !item.id) { continue }
		mapped[item.id] = item
	}

	const result: any[] = []
	for (let ii = 0, item; ii < list.length; ii++) {
		item = list[ii]

		if (!item) { continue }
		if (item.pid == undefined && item.parentId == undefined) {
			result.push(item)
			continue
		}
		const parent = mapped[item.pid] || mapped[item.parentId]
		if (!parent) { continue }
		if (!parent.children) { parent.children = [] }
		parent.children.push(item)
	}
	return result
}

export const DICT_FIXED = (function () {
	const fixed: {
		id: string,
		pid: string | undefined,
		name: string
	}[] = []
	for (const id in DICT) {
		const pid = id.slice(2, 6) === '0000'
			? undefined : id.slice(4, 6) == '00'
				? (id.slice(0, 2) + '0000') :
				id.slice(0, 4) + '00'
	
		fixed.push({
			id: id,
			pid: pid,
			name: DICT[id]
		})
	}
	return tree(fixed)
})();
