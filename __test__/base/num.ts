import { Fake as RFake } from '../../src'
import { logGroup, once, random } from 'abandonjs'
// const logs = once(logGroup)

logGroup('num',
	// RFake('@num|1,2'),
	RFake('@num(1,2)'),
	RFake('@num(10,20)'),
	RFake('@num(-10,20)'),
	RFake('@num(-10,20)'),
	RFake('@num(-10.123,0)'),
	random(1.001, 10.005),
	random(1.001, 10.005),
	random(1.001, 10.005),
	random(1.001, 10.005)
)