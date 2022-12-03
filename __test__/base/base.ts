import { Mock } from '../../src'
import { logGroup } from 'abandonjs'

logGroup(
	'test-item',
	Mock('@num(1.1,2.3)'),
	Mock('@num(1.1,2.3)'),
	Mock({ 'num|1-9': 1 }),
	Mock({ 'num|12': 1 }),
	Mock({
		"value|2-4": {
			name: "@name"
		}
	}),
	Mock('@name'),
	Mock('@cname'),
	Mock('@first'),
	Mock('@last'),
	Mock('@cfirst'),
	Mock('@clast'),
	Mock('@name'),
	Mock('@char'),
	Mock('@string'),
	Mock('@title'),
	Mock('@title(1,30)'),
	Mock('@id'),
	Mock('@uuid'),
	Mock('@boolean'),
	Mock('@cword'),
	Mock('@uuid(xxyxxxyyy)'),
	Mock('@string(3,4)'),
	Mock('@uuid(xxx)'),
	Mock({ t: '@title(3,4)' }),
	Mock('@image(晓峰也牛逼,400x400,30)'),
	Mock('@image(文字,200x200,123,456,png)'),

	Mock({ "name&&a": "@name" }),
	Mock({ 'name|3': '@name' }),
	Mock({ 'name|3-5': '@name' }), 

	Mock('@char'),
	Mock('@name'),
	Mock('@cname'),
	Mock('@string'),
	Mock('@title'),
	Mock('@title(1,30)')
)