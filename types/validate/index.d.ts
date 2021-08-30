/**
 * @packageDocumentation
 * @module 值的校验
 */
/**
 * 是否是外部网址
 *
 * @export
 * @param {string} path 网址
 * @returns {boolean}
 */
export declare function isExternal(path: string): boolean;
/**
 * 校验 手机
 *
 * @export
 * @param {string} val 校验的值
 * @returns {boolean}
 */
export declare function isMobile(val: string): boolean;
/**
 * 校验 邮箱
 *
 * @export
 * @param {string} val 校验的值
 * @returns {boolean}
 */
export declare function isEmail(val: string): boolean;
/**
 * 校验 QQ
 *
 * 规则: 5~10位数字
 *
 * @export
 * @param {string} val 校验的值
 * @returns {boolean}
 */
export declare function isQQ(val: string): boolean;
/**
 * 是否是日期
 *
 * @param {Date} date 日期
 * @returns {boolean}
 */
export declare function isDate(date: Date): boolean;
