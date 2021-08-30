/**
 * @packageDocumentation
 * @module 格式化显示
 */
/**
 * 格式化时间
 *
 * @export
 * @param {*} [date=new Date()] 时间
 * @param {string} [fmt='yyyy-MM-dd HH:mm:ss'] 显示格式
 * @returns {string}
 */
export declare function formatTime(initDate?: any, fmt?: string): string;
/**
 * 格式化 urlQuery
 *
 * @export
 * @param {string} url 格式化的 url 值
 * @returns
 */
export declare function getQueryObject(url: string): {
    [key: string]: any;
};
/**
 * 格式化手机号码
 *
 * @export
 * @param {(number | string)} phone 手机号码
 * @param {string} [separator=' '] 连接符
 * @returns {string}
 */
export declare function formatPhone(phone: number | string, separator?: string): string;
/**
 * 格式化隐藏手机号码
 *
 * @export
 * @param {(number | string)} phone 手机号码
 * @returns {string}
 */
export declare function formatPhoneHide(phone: number | string): string;
/**
 * 格式化显示银行卡 (4位一空格)
 *
 * @export
 * @param {(number | string)} val 银行卡号
 * @returns
 */
export declare function formatBank(val: number | string): string;
