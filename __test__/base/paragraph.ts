import { Fake } from '../../src'
import { logGroup } from 'abandonjs'

logGroup('paragraph',
	Fake('@para(2)'),
	// Fake('@paragraph'),
	// Fake('@paragraph(2)'),
	// Fake('@paragraph(3)'),
	// Fake('@paragraph(4)'),
)