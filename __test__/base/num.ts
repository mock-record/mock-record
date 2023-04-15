import { testMock } from '../config'

testMock('num',
	[
		('@num|1,2'),
		('@num(1,2)'),
		('@num(10,20)'),
		('@num(-10,20)'),
		('@num(-10,20)'),
		('@num(-10.123)'),
	]
)