import { Fake } from '../../src'
import { logGroup } from 'abandonjs'

logGroup(
	'test-item',
	Fake('@num(1.1,2.3)'),
	Fake('@num(1.1,2.3)'),
	Fake({ 'num|1-9': 1 }),
	Fake({ 'num|12': 1 }),
	Fake({
		"value|2-4": {
			name: "@name"
		}
	}),
	Fake('@name'),
	Fake('@cname'),
	Fake('@first'),
	Fake('@last'),
	Fake('@cfirst'),
	Fake('@clast'),
	Fake('@name'),
	Fake('@char'),
	Fake('@string'),
	Fake('@title'),
	Fake('@title(1,30)'),
	Fake('@id'),
	Fake('@uuid'),
	Fake('@boolean'),
	Fake('@cword'),
	Fake('@uuid(xxyxxxyyy)'),
	Fake('@string(3,4)'),
	Fake('@uuid(xxx)'),
	Fake({ t: '@title(3,4)' }),
	Fake('@image(晓峰也牛逼,400x400,30)'),
	Fake('@image(文字,200x200,123,456,png)'),

	Fake({ "name&&a": "@name" }),
	Fake({ 'name|3': '@name' }),
	Fake({ 'name|3-5': '@name' }), 

	Fake('@char'),
	Fake('@name'),
	Fake('@cname'),
	Fake('@string'),
	Fake('@title'),
	Fake('@title(1,30)')
)