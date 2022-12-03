const Util: Record<string, any> = {};

// 用来判断是obj 类型 ( string, function, object )
Util.type = function (obj: any): string {
	return (obj === null || obj === undefined)
		? String(obj)
		: Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase()
}

Util.pick = function (list: any[]): string {
	return list[Math.floor(Math.random() * list.length)];
}

export default Util;