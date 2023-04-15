
/**
 * @description 随机的十六进制颜色值
 * @returns {string}
 */
export const hex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

/**
 * @description 随机的十六进制颜色值
 * @returns {string}
 */
export const color = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

/**
 * @description 随机的rgb颜色值
 * @returns {string} `rgb(255,255,255)`
 */
export const rgb = () => `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;

/**
 * @description 随机的十六进制颜色值
 * @returns {string[]} [255,255,255]
 */
export const rgb2 = () => [
	Math.floor(Math.random() * 255),
	Math.floor(Math.random() * 255),
	Math.floor(Math.random() * 255)
];