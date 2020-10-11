import {
  formatTime,
  getQueryObject,
  formatPhone,
  formatPhoneHide,
  formatBank,
} from '../../src';

describe('格式化', () => {
  it('格式化时间', () => {
    const res = formatTime('Mon Oct 12 2020 00:32:08 GMT+0800 (中国标准时间)');
    expect(res).toBe('2020-10-12 00:32:08');
  });

  it('格式化时间: 不是时间格式', () => {
    const res = formatTime('2020-10-11TTTTTT');
    expect(res).toBe('2020-10-11TTTTTT');
  });


  it('获取 URL 参数', () => {
    const res = getQueryObject('https://www.baidu.com?name=张三疯&age=18&work=');
    expect(res).toEqual({
      name: '张三疯',
      age: '18',
      work: '',
    });
  });

  it('获取 URL 参数: 没有参数', () => {
    const res = getQueryObject('https://www.baidu.com');
    expect(res).toEqual({});
  });

  it('格式化显示手机号码', () => {
    const res = formatPhone(13212345678);
    expect(res).toBe('132 1234 5678');
  });

  it('格式化显示手机号码: 指定间隔符号', () => {
    const res = formatPhone(13212345678, '-');
    expect(res).toBe('132-1234-5678');
  });

  it('格式化显示手机号码: 隐藏中间号码', () => {
    const res = formatPhoneHide(13212345678);
    expect(res).toBe('132****5678');
  });


  it('格式化显示银行卡', () => {
    const res = formatBank(4677291880378384);
    expect(res).toBe('4677 2918 8037 8384');
  });

});
