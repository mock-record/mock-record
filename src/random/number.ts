import { random } from 'abandonjs'

export function num(min = '0', max = '10') {
	return random(Number(min), Number(max))
}