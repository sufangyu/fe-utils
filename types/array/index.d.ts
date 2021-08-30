/**
 * @packageDocumentation
 * @module Array(数组类)
 */
/**
 * 数组分割
 *
 * @export
 * @param {any[]} arr 原数组
 * @param {number} size 每个子数组的长度
 * @returns {any[]}
 */
export declare function sliceArray(arr: any[], size: number): any[];
/**
 * 分割数组, 补全长度
 *
 * @export
 * @param {any[]} arr 原数组
 * @param {number} size 每个子数组的长度
 * @param {*} [placeholder=''] 补全占位默认值
 * @returns {any[]}
 */
export declare function sliceArrayCompleteLength(arr: any[], size: number, placeholder?: any): any[];
