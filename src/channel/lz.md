---
title: 靓仔适配通道
order: 2
---
# 靓仔适配通道
::: tip
此页通道均由靓仔进行开发适配   
QQ：981204899
:::
## 支付宝云端
::: tip
- 服务端：在win服务器上运行
- 插件：上传并解压到`项目根目录/plugins/pay`下，然后在管理后台>应用商店>已安装>扫描本地新插件，进行插件添加   
:::
### 打开服务端
打开服务端，出现如图所示即可。   
![](https://s2.loli.net/2025/02/27/rhZ3BIMEyuxobt5.png)
### 添加网关
在管理后台>`支付通道`>`支付网关`中添加网关。支持支付宝，请按下图添加。   
通道选择`支付宝测试-LZ`，网关地址填写`http://挂机服务器ip:6633`   
![](https://s2.loli.net/2025/02/27/zWAwDdul9hfCkQ2.png)
::: tip
建议在自己浏览器访问网关地址，验证是否成功。
若无法访问请参考[常见问题](../faq)中的内容排查
:::
### 添加通道
1. 通道选择`支付宝测试-LZ`   
![](https://s2.loli.net/2025/02/27/e8uSw3OGEdvZzt7.png)
2. 选择刚刚添加好的网关，底部的信息与[支付宝通道](./alipay)填写方法一致。   
![](https://s2.loli.net/2025/02/27/NC7ExBr3KkWyXIf.png)
3. 登录账户，点击通道底部的登录按钮。支付宝登录后即可使用。   