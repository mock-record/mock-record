import { testMock } from "../config"

testMock('paragraph',
	[
		('@para(2)'),
		('@paragraph'),
		('@paragraph(2)'),
		('@paragraph(3)'),
		('@paragraph(4)'),
	]
)