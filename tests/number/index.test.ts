import { toThousands, formatFloat, convertCurrency } from '../../src';


describe('数值:', () => {
  it('千分位格式化: 不带小数', () => {
    const result = toThousands(12345);
    expect(result).toBe('12,345');
  });

  it('千分位格式化: 带小数', () => {
    const result = toThousands(12345.0);
    expect(result).toBe('12,345');
  });


  it('格式化小数点: 不带小数', () => {
    const result = formatFloat(100);
    expect(result).toBe('100.00');
  });

  it('格式化小数点: 带小数', () => {
    const result = formatFloat(100.452);
    expect(result).toBe('100.45');
  });

  it('格式化小数点: 小数不够保留位数', () => {
    const result = formatFloat(100.4);
    expect(result).toBe('100.40');
  });

  it('格式化小数点: 带小数, 四舍五入', () => {
    const result = formatFloat(100.456);
    expect(result).toBe('100.46');
  });



  it('数字转中文数字: 不带小数', () => {
    const result = convertCurrency(1048010);
    expect(result).toBe('壹佰零肆万捌仟零壹拾元整');
  });

  it('数字转中文数字: 带小数', () => {
    const result = convertCurrency(104.15);
    expect(result).toBe('壹佰零肆元壹角伍分');
  });

});

