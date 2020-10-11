/**
 * 是否是外部网址
 *
 * @export
 * @param {string} path 网址
 * @returns {boolean}
 */
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path);
}


/**
 * 校验 手机
 *
 * @export
 * @param {string} val 校验的值
 * @returns {boolean}
 */
export function isMobile(val: string): boolean {
  const reg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
  return reg.test(val);
}



/**
 * 校验 邮箱
 *
 * @export
 * @param {string} val 校验的值
 * @returns {boolean}
 */
export function isEmail(val: string): boolean {
  const reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  return reg.test(val);
}



/**
 * 校验 QQ
 *
 * 规则: 5~10位数字
 *
 * @export
 * @param {string} val 校验的值
 * @returns {boolean}
 */
export function isQQ(val: string): boolean {
  const reg = /^[1-9][0-9]{4,9}$/gim;
  return reg.test(val);
}


/**
 * 是否是日期
 *
 * @param {Date} date 日期
 * @returns {boolean}
 */
export function isDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}
