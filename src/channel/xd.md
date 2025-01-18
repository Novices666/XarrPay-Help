---
title: 闲蛋适配通道
order: 1
---
# 闲蛋适配通道
::: tip 提示
本文演示环境   
系统版本：Windows Server 2016 Datacenter 64-bit (10.0, Build 14393)   
微信版本：3.9.12.14 32位   
三网监控：2.1.1   
代挂云端：108A   
:::
::: tip 说明
1. 本页介绍通道均需配合闲蛋软件进行使用。
2. `三网监控`基础配置请参考[Windows监控](../monitor/windows)
3. 使用前请自行寻找并安装对应的插件，本文不提供。
4. 软件均可在售后群文件中下载。
:::
## 动态个人码
::: tip
本通道适配`三网监控`，请参考[Windows监控](../monitor/windows)提前配置好微信。
:::
1. 请按照下图所示，将`收款小账本`添加到桌面。
![](https://s2.loli.net/2025/01/18/kScUOy7YCeJsr15.png)
![](https://s2.loli.net/2025/01/18/N2QX8wGJv3bYSsU.png)
2. 在商户后台添加通道。
![](https://s2.loli.net/2025/01/18/No7drQH38BvcUFS.png)
这里的`绑定客户端名称`请自定义填写。
`sid`填入随便的数字，例如`123`
![](https://s2.loli.net/2025/01/18/VryQWJo73IzRsP8.png)
3. 到`三网监控`>`账号管理`，右键`开启动态个人码`，填写刚刚`绑定客户端名称`填写的内容。
![](https://s2.loli.net/2025/01/18/i9ldhUYxNmsbaHW.png)
4. 回到`通道管理`刷新页面，会看到`sid`已经变更为真实sid，此时通道就配置成功。
![](https://s2.loli.net/2025/01/18/P82psz47ZLbcj9V.png)

## 公众号类型
::: tip
包含下列几个插件，这里的支付宝指代支付宝付款，监控还是微信监控
![](https://s2.loli.net/2025/01/18/8hGSvu4r2zfcZno.png)
![](https://s2.loli.net/2025/01/18/qinP9pejMEbzgS2.png)   
本通道适配`三网监控`，请参考[Windows监控](../monitor/windows)提前配置好微信。
:::
1. 关注对应的公众号，并登录绑定账户。
2. 添加通道，选择对应的插件，这里以`新生易`为例。
![](https://s2.loli.net/2025/01/18/HKb35Sdjh2qoilC.png)
3. 上传解析二维码，保存通道即可。
4. 其余插件，配置同上。
## 免输经营码
::: tip
本通道适配`三网监控`，请参考[Windows监控](../monitor/windows)提前配置好微信。
:::
1. 请按照下图所示，将`经营账户`添加到桌面。
![](https://s2.loli.net/2025/01/18/kScUOy7YCeJsr15.png)
![](https://s2.loli.net/2025/01/18/6WQ91PI3b58VJyT.png)
2. 在商户后台添加通道。
![](https://s2.loli.net/2025/01/18/pDa3klJGEte8Ydf.png)
这里的`绑定客户端名称`请自定义填写。
`sid`和`商户id`填入随便的数字，例如`123`
![](https://s2.loli.net/2025/01/18/2mjOCRLHn4rUdFW.png)
3. 到`三网监控`>`账号管理`，右键`开启经营码免输`，填写刚刚`绑定客户端名称`填写的内容。
![](https://s2.loli.net/2025/01/18/jcOEHL254nhsTpQ.png)
4. 回到`通道管理`刷新页面，会看到`sid`和`商户id`已经变更为真实的sid和商户id，此时通道就配置成功。
## 免输收款单
::: tip
本通道适配`三网监控`，请参考[Windows监控](../monitor/windows)提前配置好微信。
:::
1. 在微信搜索并打开`微信收款单`小程序，按照下图所示，将`微信收款单`添加到桌面。
![](https://s2.loli.net/2025/01/18/sgC9GMKAjlQZan5.png)
2. 在商户后台添加通道。
![](https://s2.loli.net/2025/01/18/KIGsMLp9rcR7ZOA.png)
这里的`绑定客户端名称`请自定义填写，`sid`可不填等待上报。
![](https://s2.loli.net/2025/01/18/BWsE5zjvN9JqATK.png)
3. 到`三网监控`>`账号管理`，右键`开启收款单免输`，填写刚刚`绑定客户端名称`填写的内容。
![](https://s2.loli.net/2025/01/18/bAoxhqgmuTMalND.png)
4. 回到`通道管理`刷新页面，会看到`sid`已经变更为真实sid，此时通道就配置成功。
## 闲蛋代挂云端
1. 运行软件后，按照提示选择相应版本，如果你使用的`Windows server 2012`系统，请使用`WxPc备用版`，`Windows server 2016`及以上，使用`WxPc正式版`即可，其他系统请自行测试选择。
![](https://s2.loli.net/2025/01/18/PyuFd94TI2qYHiN.png)
2. 输入购买的卡密
![](https://s2.loli.net/2025/01/18/c7LUZTWYnmp4Mqb.png)

<VPBanner
  title="卡密购买"
  content="选择云端卡密，点击购买，享受站长优质售后！"
  logo="./logo.svg"
  :actions='[
    {
      text: "购买",
      link:"http://ksy.hg007.cc/goodslist?cid=12",
    },
  ]'
/>

3. 进入软件会自动启动服务，建议勾选`拦截数据`，不建议勾选`开机自启`，可能会导致服务异常。当日志出现网关地址后即启动成功。
![](https://s2.loli.net/2025/01/18/jTv4BL6MVmEIa3q.png)
::: tip
建议在自己浏览器访问网关地址，验证是否成功。
若无法访问请参考[常见问题](../faq)中的内容排查
:::
4. 在管理后台>`支付通道`>`支付网关`中添加网关。支持微信和支付宝，请按下图添加。
::: tabs#type
@tab 微信
通道选择`微信-XD`   
![](https://s2.loli.net/2025/01/18/FLOJybXxS65PQH1.png)
@tab 支付宝
通道选择`支付宝-XD`   
![](https://s2.loli.net/2025/01/18/byMj7FehY3zkgdR.png)
:::
5. 在商户后台添加通道
::: tabs#type
@tab 微信
1. 通道选择`微信-XD`
![](https://s2.loli.net/2025/01/18/8W2lzeEN5vycBwF.png)   
2. 选择刚刚添加好的网关，`登录UID`不需要填写。
![](https://s2.loli.net/2025/01/18/Ae5sSBTlqrDo8n4.png)
@tab 支付宝
1. 通道选择`支付宝-XD`
![](https://s2.loli.net/2025/01/18/Fczh7vQZN1Osb4R.png)   
2. 选择刚刚添加好的网关，底部的信息与[支付宝通道](./alipay)填写方法一致。
![](https://s2.loli.net/2025/01/18/AXCeUax91nboY6V.png)
:::
6. 登录账户，点击通道底部的登录按钮。支付宝登录后即可使用。
![](https://s2.loli.net/2025/01/18/sIHrnODTbmQozfi.png)
::: tip
支付宝的配置就结束了，可以直接使用。   
微信的配置请继续阅读。
:::
### 微信通道后续配置
在登录后，会上报`登录UID`，后续操作填写的UID就是这个。

1. 监控通道   
带有`监控端`标识的通道，请参考这个。   
请参考[微信通道](./wxpay)进行新增通道和配置。
2. XD通道   
带有`XD端`标识的通道，请参考这个。   
请参考本页前置介绍进行新增通道和配置，操作区别如下
::: tabs
@tab 动态个人码
`绑定客户端名称`填写`登录UID`+`个人码`。例如`123456个人码`
@tab 免输经营码
`绑定客户端名称`填写`登录UID`+`经营码`。例如`123456经营码`
@tab 免输收款单
`绑定客户端名称`填写`登录UID`+`收款单`。例如`123456收款单`
:::

## 微信店员代挂
::: tip
本通道适配`三网监控`，请参考[Windows监控](../monitor/windows)提前配置好微信。
请提前将挂机的微信添加为店员，登录账户为店员，通道信息填写店长信息。
:::
1. 到管理后台>`支付通道`>`第三方账号`>`账号管理`>添加一个账号，`名称`自定义填写，`账号信息`先自定义填写，`类型`选择`微信店员`。
![](https://s2.loli.net/2025/01/18/RoKNVb3ycleStHd.png)
2. 到`三网监控`>`程序配置`中点击`验证站长工具`，按照提示填写信息。
![](https://s2.loli.net/2025/01/18/IVKG7msWaUTOqDt.png)
::: tabs
@tab 第三方账号信息
请填写第一步中自定义的`账号信息`。
![](https://s2.loli.net/2025/01/18/wbC3oVlkRjpPJsO.png)
@tab 第三方账号通讯密钥
请填写站长后台>`系统设置`>`基础信息`>`API配置`>`第三方程序通讯密钥`
![](https://s2.loli.net/2025/01/18/L9scijySIwakH65.png)
:::
填写完成后会提示认证成功
![](https://s2.loli.net/2025/01/18/ueYgj5sHJhB61Va.png) 
3. 到`三网监控`>`账号管理`，右键`复制选中账户ID`，替换第一步中自定义的`账号信息`。
![](https://s2.loli.net/2025/01/18/GMAdhuKaw28vrqI.png)
![](https://s2.loli.net/2025/01/18/XCEGlinLOU9MD45.png)
4. 在商户后台添加通道
![](https://s2.loli.net/2025/01/18/XtPJoAEb4NrxZDl.png)
填写`店长微信昵称`和店长`收款码地址`。
![](https://s2.loli.net/2025/01/18/TawB8zlIumPfEVp.png)
点击保存即可。