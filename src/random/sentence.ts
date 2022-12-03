import { LoremIpsum } from 'lorem-ipsum'
import { MAX_SENTENCE } from '../constant'

export function sentence(min: string, max: string) {
	return (new LoremIpsum()).generateSentences(Math.min(parseInt(min || '1'), parseInt(max) || MAX_SENTENCE))
}

export function sent(min: string, max: string) {
	return sentence(min, max)
}