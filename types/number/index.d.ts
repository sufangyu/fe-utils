/**
 * @packageDocumentation
 * @module Number(数字)
 */
/**
 * 数值千分位格式化
 *
 * @export
 * @param {number} num 数字
 * @returns {string}
 *
 * @example
 * 12345 => '12,345'
 * 12345.0 => '12,345'
 */
export declare function toThousands(num: number): string;
/**
 * 格式化小数位(四舍五入)
 *
 * @export
 * @param {string | number} val 小数
 * @param {number} [pos=2] 保留的小数位
 * @returns {(string | false)}
 */
export declare function formatFloat(val: string | number, pos?: number): string | false;
/**
 * 阿拉伯数字转中文数字
 *
 * @export
 * @param {(string | number)} money 金额
 * @returns {string}
 */
export declare function convertCurrency(money: string | number): string;
