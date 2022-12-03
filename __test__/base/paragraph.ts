import { Mock } from '../../src'
import { logGroup } from 'abandonjs'

logGroup('paragraph',
	Mock('@para(2)'),
	// Mock('@paragraph'),
	// Mock('@paragraph(2)'),
	// Mock('@paragraph(3)'),
	// Mock('@paragraph(4)'),
)