import { Fake } from '../../src'
import { logGroup } from 'abandonjs'

logGroup('sentence',
	Fake('@sentence'),
	Fake('@sent(2)'),
	Fake('@sentence(2)'),
	Fake('@sentence(3)'),
	Fake('@sentence(4)'),
)