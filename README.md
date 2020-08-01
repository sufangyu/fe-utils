# 前端工具库

## 安装

1、直接使用 `lib` 目录下的 `index.umd.js`

``` html
<script src="lib/index.umd.js"></script>
<script>
  utils.formatTime();
</script>
```

2、npm/yarn 安装
``` bash
$ yarn add fe-utils
```
使用方法：
支持 tree shaking 按需加载
 ```js
 import { formatTime } from 'fe-utils';

 const time = formatTime();
 ...
 
 或者
 import * as _ from 'fe-utils';
 const time = _.formatTime()
 ...

```

## 文档

待补充
