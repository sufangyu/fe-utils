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
export function sliceArray(arr: any[], size: number):any[] {
  const result: any[] = [];
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
export function sliceArrayCompleteLength(arr: any[], size: number, placeholder: any = ''):any[] {
  const resultTemp: any[] = [];
  const result = sliceArray(arr, size);
  result.forEach((childArr) => {
    const diff = size - childArr.length;
    childArr = [...childArr, ...Array(diff).fill(placeholder)];
    resultTemp.push(childArr);
  });

  return resultTemp;
}
