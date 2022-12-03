import { logGroup } from 'abandonjs'
import { cases } from './caseHoc'

console.log('---issues---')


	// minAndMaxRule

	;[
		// '0-1',
		// '1-1',
		// '2-4',
		// '0-1.5-6',
		// '0.5',
		// '1.5',
		// '1.5-7',
		// '0.5-6',
		// '1-3.5-6',
		'1-3.5',
	].forEach(item => {
		logGroup(`key|${item}`, cases(`|${item}`))
	})