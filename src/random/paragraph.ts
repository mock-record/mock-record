import { LoremIpsum } from 'lorem-ipsum'
import { MAX_PARAGRAPH } from '../constant'

export function paragraph(min: string, max: string) {
	return (new LoremIpsum()).generateParagraphs(Math.min(parseInt(min||'1'), parseInt(max) || MAX_PARAGRAPH))
}

export function para(min: string, max: string) {
	return paragraph(min, max)
}