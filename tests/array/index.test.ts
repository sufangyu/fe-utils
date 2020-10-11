import { sliceArray,sliceArrayCompleteLength } from '../../src';


describe('数组:', () => {
  const arr = [1, 2, 3, 4, 5, 6];

  it('不够完整分割', () => {
    const result = sliceArray(arr, 4);
    expect(result).toEqual([[1, 2, 3, 4], [5, 6]]);
  });

  it('够完整分割', () => {
    const result = sliceArray(arr, 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it('空数组分割', () => {
    const result = sliceArray([], 4);
    expect(result).toEqual([]);
  });


  it('补全长度: 不够完整分割', () => {
    const result = sliceArrayCompleteLength(arr, 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it('补全长度: 够完整分割', () => {
    const result = sliceArrayCompleteLength(arr, 4);
    expect(result).toEqual([[1, 2, 3, 4], [5, 6, '', '']]);
  });

  it('补全长度: 空数组', () => {
    const result = sliceArrayCompleteLength([], 4);
    expect(result).toEqual([]);
  });
});

