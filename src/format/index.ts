import { isDate } from '../validate/index';

/**
 * 格式化时间
 *
 * @export
 * @param {*} [date=new Date()] 时间
 * @param {string} [fmt='yyyy-MM-dd HH:mm:ss'] 显示格式
 * @returns {string}
 */
export function formatTime(initDate: any = new Date(), fmt = 'yyyy-MM-dd HH:mm:ss'): string {
  const date = new Date(initDate.replace(/-/g, '/'));
  if (!isDate(date)) {
    console.warn(`${initDate} is Invalid Date`);
    return initDate;
  }
  const o: {[key: string]: any} = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }

  Object.keys(o).forEach((k) => {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
    }
  });

  return fmt;
}


/**
 * 格式化 urlQuery
 *
 * @export
 * @param {string} url 格式化的 url 值
 * @returns
 */
export function getQueryObject(url: string): {[key: string]: any} {
  url = url === null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf('?') + 1);
  const obj: {[key: string]: any} = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1);
    let val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}


/**
 * 格式化手机号码
 *
 * @export
 * @param {(number | string)} phone 手机号码
 * @param {string} [separator=' '] 连接符
 * @returns {string}
 */
export function formatPhone(phone: number | string, separator = ' '): string {
  const val = phone.toString().replace(/[^\d]/g, '');
  const arr = val.split('');
  let str = '';
  arr.forEach((v, index) => {
    if (index === 3 || index === 7) {
      str += separator;
    }
    str += v;
  });
  return str;
}


/**
 * 格式化隐藏手机号码
 *
 * @export
 * @param {(number | string)} phone 手机号码
 * @returns {string}
 */
export function formatPhoneHide(phone: number | string): string {
  const phoneNumber = phone.toString();
  return `${phoneNumber.substr(0, 3)}****${phoneNumber.substr(7, 11)}`;
}


/**
 * 格式化显示银行卡 (4位一空格)
 *
 * @export
 * @param {(number | string)} val 银行卡号
 * @returns
 */
export function formatBank(val: number | string): string {
  return val.toString().replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
}
