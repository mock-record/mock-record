import { Mock as RMock } from '../../src'
import { logGroup, once, random } from 'abandonjs'
// const logs = once(logGroup)

logGroup('num',
	// RMock('@num|1,2'),
	RMock('@num(1,2)'),
	RMock('@num(10,20)'),
	RMock('@num(-10,20)'),
	RMock('@num(-10,20)'),
	RMock('@num(-10.123,0)'),
	random(1.001, 10.005),
	random(1.001, 10.005),
	random(1.001, 10.005),
	random(1.001, 10.005)
)