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
function toThousands(num) {
    let val = num.toString();
    if (!val.includes('.')) {
        val += '.';
    }
    return val.replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => `${$1},`).replace(/\.$/, '');
}
/**
 * 格式化小数位(四舍五入)
 *
 * @export
 * @param {string | number} val 小数
 * @param {number} [pos=2] 保留的小数位
 * @returns {(string | false)}
 */
function formatFloat(val, pos = 2) {
    let formatVal = parseFloat(val.toString());
    if (Number.isNaN(formatVal)) {
        return false;
    }
    // pow 幂
    formatVal = Math.round(Number(val) * Math.pow(10, pos)) / Math.pow(10, pos);
    let formatValStr = formatVal.toString();
    let valDot = formatValStr.indexOf('.');
    if (valDot < 0) {
        valDot = formatValStr.length;
        formatValStr += '.';
    }
    while (formatValStr.length <= valDot + pos) {
        formatValStr += '0';
    }
    return formatValStr;
}
/**
 * 阿拉伯数字转中文数字
 *
 * @export
 * @param {(string | number)} money 金额
 * @returns {string}
 */
function convertCurrency(money) {
    const maxNum = 999999999999999.9999; // 最大处理的数字
    if (money === '') {
        return '';
    }
    if (money >= maxNum) {
        // 超出最大处理数字
        return '';
    }
    const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const cnIntRadice = ['', '拾', '佰', '仟'];
    const cnIntUnits = ['', '万', '亿', '兆']; // 对应整数部分扩展单位
    const cnDecUnits = ['角', '分', '毫', '厘']; // 对应小数部分单位
    const cnInteger = '整'; // 整数金额时后面跟的字符
    const cnIntLast = '元'; // 整型完以后的单位
    let integerNum; // 金额整数部分
    let decimalNum; // 金额小数部分
    let chineseStr = ''; // 输出的中文金额字符串
    let parts; // 分离金额后用的数组，预定义
    money = parseFloat(money.toString());
    if (money === 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
    }
    // 转换为字符串
    money = money.toString();
    if (money.indexOf('.') === -1) {
        integerNum = money;
        decimalNum = '';
    }
    else {
        parts = money.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
    }
    // 获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
        let zeroCount = 0;
        const intLen = integerNum.length;
        for (let i = 0; i < intLen; i += 1) {
            const n = integerNum.substr(i, 1);
            const p = intLen - i - 1;
            const q = p / 4;
            const m = p % 4;
            if (n === '0') {
                zeroCount += 1;
            }
            else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                // 归零
                zeroCount = 0;
                chineseStr += cnNums[parseInt(n, 10)] + cnIntRadice[m];
            }
            if (m === 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
        chineseStr += cnIntLast;
    }
    // 小数部分
    if (decimalNum !== '') {
        const decLen = decimalNum.length;
        for (let i = 0; i < decLen; i += 1) {
            const dn = decimalNum.substr(i, 1);
            if (dn !== '0') {
                chineseStr += cnNums[Number(dn)] + cnDecUnits[i];
            }
        }
    }
    if (chineseStr === '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
    }
    else if (decimalNum === '') {
        chineseStr += cnInteger;
    }
    return chineseStr;
}

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
function sliceArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i = i + size) {
        const currentGroup = arr.slice(i, i + size);
        result.push(currentGroup);
    }
    return result;
}
/**
 * 分割数组, 补全长度
 *
 * @export
 * @param {any[]} arr 原数组
 * @param {number} size 每个子数组的长度
 * @param {*} [placeholder=''] 补全占位默认值
 * @returns {any[]}
 */
function sliceArrayCompleteLength(arr, size, placeholder = '') {
    const resultTemp = [];
    const result = sliceArray(arr, size);
    result.forEach((childArr) => {
        const diff = size - childArr.length;
        childArr = [...childArr, ...Array(diff).fill(placeholder)];
        resultTemp.push(childArr);
    });
    return resultTemp;
}

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
function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}
/**
 * 校验 手机
 *
 * @export
 * @param {string} val 校验的值
 * @returns {boolean}
 */
function isMobile(val) {
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
function isEmail(val) {
    // eslint-disable-next-line no-useless-escape
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
function isQQ(val) {
    const reg = /^[1-9][0-9]{4,9}$/gim;
    return reg.test(val);
}
/**
 * 是否是日期
 *
 * @param {Date} date 日期
 * @returns {boolean}
 */
function isDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}

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
function formatTime(initDate = new Date(), fmt = 'yyyy-MM-dd HH:mm:ss') {
    const date = new Date(initDate.replace(/-/g, '/'));
    if (!isDate(date)) {
        console.warn(`${initDate} is Invalid Date`);
        return initDate;
    }
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(),
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
function getQueryObject(url) {
    url = url === null ? window.location.href : url;
    const search = url.substring(url.lastIndexOf('?') + 1);
    const obj = {};
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
function formatPhone(phone, separator = ' ') {
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
function formatPhoneHide(phone) {
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
function formatBank(val) {
    return val.toString().replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
}

export { convertCurrency, formatBank, formatFloat, formatPhone, formatPhoneHide, formatTime, getQueryObject, isDate, isEmail, isExternal, isMobile, isQQ, sliceArray, sliceArrayCompleteLength, toThousands };
