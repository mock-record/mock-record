export const dictionary = new Map()

dictionary.set('JsonString', JSON.stringify)

export function initDictionary(row: Record<string, any>) {
	for (const key in row) {
		dictionary.set(key, row[key])
	}
}


