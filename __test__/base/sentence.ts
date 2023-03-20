import { testMock } from "../config"

testMock('sentence',
	[
		('@sentence'),
		('@sent(2)'),
		('@sentence(2)'),
		('@sentence(3)'),
		('@sentence(4)'),
	]
)