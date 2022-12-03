export function image(
	text = '',
	size = '200x200',
	background = '000',
	foreground = 'fff',
	format: '' | 'png' | 'gif' | 'jpg' = '',

) {
	return 'http://dummyimage.com/' + size +
		(background ? '/' + background : '') +
		(foreground ? '/' + foreground : '') +
		(format ? '.' + format : '') +
		(text ? '&text=' + text : '')
}