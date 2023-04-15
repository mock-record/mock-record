import { format } from 'abandonjs'

function randomTime(): Date {
	return new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * Math.floor(Math.random() * 10000))
}

export function time(pattern = 'HH:mm:ss') {
	return format(randomTime(), pattern)
}

export function date(pattern = 'YYYY-MM-DD') {
	return format(randomTime(), pattern)
}

export function now(pattern = 'YYYY-MM-DD HH:mm:ss') {
	return format(new Date(), pattern)
}

export function timeStamp(){
	return randomTime().getTime()
}

export function nowTimeStamp(){
	return new Date().getTime()
}