// 当前包支持的基础数据类型
export type BaseSupportType = string | number | boolean | undefined | null | never | unknown
// export type BaseSupportType = string | number | boolean | undefined | null
export type BaseSupportArray = (BaseSupportType | BaseSupportObject)[]
export type BaseSupportObject = {
	[key: string]: BaseSupportType | BaseSupportArray | BaseSupportObject
}

export type tRule = {
	key: string;
	min?: number;
	max?: number;
	count?: number;
	range?: any[];
}

export type Template = BaseSupportType | BaseSupportArray | BaseSupportObject

// export type TemplateArray = BaseSupportType[]

export type tContext = {
	type: string;
	template: Template;
	name: string;
	rule?: tRule;
	context?: tContext;
}

export interface iHandler {
	generate: (template: Template) => Template;
	generateChooseOne: (template: Template) => Template;
	generateString: (template: string) => Template;
	generateObject: (template: { [key: string]: any }) => Template;
}

export type nullToVoidFn = () => void;
export type nullToStringFn = () => string;
export type nullToNumberFn = () => number;
export type stringToString = (value: string) => string;
export type anyToNumberFn = (value: any) => number;
export type anyToStringFn = (value: any) => string;