import { logGroup } from 'abandonjs'
import { cases } from './caseHoc'

// countRule

[
	// 0,
	1,
	2,
	// 3,
	// 4
].forEach(item => {
	logGroup(`key|${item}`, cases(`|${item}`))
})