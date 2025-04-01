---
title: 靓仔适配通道
order: 2
---
# 靓仔适配通道
::: tip
此页通道均由靓仔进行开发适配   
QQ：981204899
:::
::: tip
本文挂机宝配置：4+4

Windows Server 2016 Datacenter 64-bit (10.0, Build 14393)
:::

## 云端
### 前置操作
::: tip
软件下载请到售后群文件夹
:::

下载后得到`updatePro.exe`，将放置到单独文件夹中，运行，点击`开始下载`，随后运行`服务端Pro.exe`

![](https://s2.loli.net/2025/04/01/AwHLsoPqxkRX5mO.png)

![](https://s2.loli.net/2025/04/01/3Lo4Wi6sH9OtcFl.png)

按照提示在管理后台>`应用商店`>`应用商城`>`设置应用源`，添加应用源（一行一个）
![](https://s2.loli.net/2025/04/01/x42NKkMR8QT6tYl.png)

::: tip
如果只使用支付宝，可以不填写卡密
:::
回到软件页面，点击`登录授权`，填写购买的卡密，勾选底部自动登录，然后点击登录。

<VPBanner
  title="卡密购买"
  content="选择【靓仔cloud】，点击购买，享受站长优质售后！"
  logo="./logo.svg"
  :actions='[
    {
      text: "购买",
      link:"http://ksy.hg007.cc/goodslist?cid=12",
    },
  ]'
/>

首次打开请点击`屏蔽微信更新`，然后勾选`自动运行`，点击启动（端口可自定义）
![](https://s2.loli.net/2025/04/01/nTDiAtYF3BdkQU6.png)


### 添加网关
在管理后台>`支付通道`>`支付网关`中添加网关，支持支付宝和微信。
::: tabs#type
@tab 微信
在应用商城安装并启用`靓仔-微信云端`

![](https://s2.loli.net/2025/04/01/taNUW9j4FkbufeH.png)

添加网关，通道选择`微信云端-靓仔`

网关地址填写`http://挂机服务器ip:6633`

![](https://s2.loli.net/2025/04/01/259jfKCHrvluhMS.png)
@tab 支付宝
添加网关，通道选择`支付宝云端-靓仔`

![](https://s2.loli.net/2025/04/01/JVjo5B6QGL8WmXK.png)

网关地址填写`http://挂机服务器ip:6633`

![](https://s2.loli.net/2025/04/01/QrvCgAZfu7nmyL4.png)
:::

::: tip
建议在自己浏览器访问网关地址，验证是否成功。
若无法访问请参考[常见问题](../faq)中的内容排查
:::

### 添加通道
::: tip
如需要添加配置多个通道，直接添加即可，只需要登录一个

在添加完成后，点击底部登录按钮登录即可。（微信首次登录需要同步数据，因此会消耗一段时间，等待即可。）

异地登录请登录满48H后再收款。
:::

::: tabs#type
@tab 微信
1. 通道选择`微信云端-靓仔`

![](https://s2.loli.net/2025/04/01/7YP1kV3dNnubA2T.png)

1. 选择刚刚添加好的网关，解析二维码（解析不了的请上传图片）

![](https://s2.loli.net/2025/04/01/pFsvnNWk5Euaw8K.png)

@tab 支付宝
1. 通道选择`支付宝云端-靓仔`
![](https://s2.loli.net/2025/04/01/dsa85KDGP9CQjFO.png)  
1. 选择刚刚添加好的网关，解析二维码。
![](https://s2.loli.net/2025/01/18/AXCeUax91nboY6V.png)
:::

