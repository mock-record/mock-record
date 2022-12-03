import { format } from 'abandonjs'

// 2022-06-08 14:43:06

function randowTime(): Date {
	return new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * Math.floor(Math.random() * 10000))
}

export function time(pattern = 'HH:mm:ss') {
	return format(randowTime(), pattern)
}

export function date(pattern = 'YYYY-MM-DD') {
	return format(randowTime(), pattern)
}

export function now(pattern = 'YYYY-MM-DD HH:mm:ss') {
	return format(new Date(), pattern)
}

export function timeStamp(){
	return randowTime().getTime()
}

export function nowTimeStamp(){
	return new Date().getTime()
}