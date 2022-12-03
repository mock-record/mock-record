import { random, select } from 'abandonjs'
import Constant from '../constant';

const { CHINESE } = Constant;

export function cword() {
	return select(CHINESE.split(''))
}

export function title(min = '3', max = '5'): string {
	let result = '';
	let len: number = random(Number(min), Number(max));
	while (len--) {
		result += cword();
	}
	return result;
}