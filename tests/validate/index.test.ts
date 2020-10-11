import { isExternal, isMobile, isEmail, isQQ } from '../../src';

describe('值校验', () => {
  it('外部链接: http://www.baidu.com 是外部链接', () => {
    const res = isExternal('http://www.baidu.com');
    expect(res).toBe(true);
  });

  it('外部链接: mailto:304683191@qq.com 是外部链接', () => {
    const res = isExternal('mailto:304683191@qq.com');
    expect(res).toBe(true);
  });

  it('外部链接: tel:10086 是外部链接', () => {
    const res = isExternal('tel:10086');
    expect(res).toBe(true);
  });

  it('外部链接: www.baidu.com/myself 不是外部链接', () => {
    const res = isExternal('www.baidu.com/myself');
    expect(res).toBe(false);
  });


  it('手机号: 13212345678 是手机号', () => {
    const res = isMobile('13212345678');
    expect(res).toBe(true);
  });

  it('手机号: 132123456 不是手机号', () => {
    const res = isMobile('132123456');
    expect(res).toBe(false);
  });


  it('邮箱: 304683191@qq.com 是邮箱', () => {
    const res = isEmail('304683191@qq.com');
    expect(res).toBe(true);
  });

  it('邮箱: 304683191@q 不是邮箱', () => {
    const res = isEmail('304683191@q');
    expect(res).toBe(false);
  });


  it('QQ号码: 304683191 是 QQ 号码', () => {
    const res = isQQ('304683191');
    expect(res).toBe(true);
  });

  it('QQ号码: 3046 不是 QQ 号码', () => {
    const res = isQQ('3046');
    expect(res).toBe(false);
  });

  it('QQ号码: 3046831910000 不是 QQ 号码', () => {
    const res = isQQ('3046831910000');
    expect(res).toBe(false);
  });

});
