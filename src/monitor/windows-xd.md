---
title: Windows监控-闲蛋
order: 2
---
# 闲蛋PC监控
::: tip
本文挂机宝配置：2+2

Windows-2012R2-Datacenter
:::
## 安装运行
::: tip
软件下载请到售后群文件夹
:::
下载后得到一个压缩包，将压缩包解压到任意目录，双击运行`XArrPay三网监控`

![image.png](https://s2.loli.net/2024/07/25/WldZ3T2jDNnyitu.png)
## 配置
::: tip
以个人版为例，商户版本自行对应填写
:::
### 商户设置
在软件页面点击下载适配的微信(QQ、旺旺)版本

![image.png](https://s2.loli.net/2024/07/25/aGsOdHfFlizbVDw.png)

下载并安装好版本后，填写`商户地址`、`商户ID`、`商户密钥`。

后台对应的信息如下，需要注意的是`商户地址`只填写`http://商户地址`，不需要后面的`/xpay/epay/`

::: tip
新版本已增加一键导入
- 个人版：`账号管理`>`Api设置`>`复制平台信息`
- 商户版：`商户后台`>`API`>`复制信息`
:::
![image.png](https://s2.loli.net/2024/07/25/jsoQENnKWvMqUTH.png)
### 程序配置
依次点击`获取微信目录`、`获取旺旺目录`、`一键安装Edge`。

![image.png](https://s2.loli.net/2024/07/25/3ytVnPYHjaDKNcT.png)

## 添加账号
::: tip
在添加前，请确保要添加的客户端已全部退出。
:::
### 微信
点击添加微信账户，会打开微信，登录后会在底面显示出来。

![image.png](https://s2.loli.net/2024/07/25/jHXGyMhzE5UqcJF.png)
### 旺旺（支付宝）
点击`添加旺旺账户`，会打开旺旺，登录后，程序会自动获取旺旺（支付宝）ck,获取后会在底面显示出来。

![image.png](https://s2.loli.net/2024/07/25/W9OBw6XbLtpCoQj.png)
### QQ
添加QQ账户前请先登录好需要监控的QQ，然后点击`添加QQ账户`

![image.png](https://s2.loli.net/2024/07/25/6eYbvGlmB2h1Z5a.png)
在弹出的窗口勾选需要监控的QQ，点击`监控选择QQ`

![image.png](https://s2.loli.net/2024/07/25/c3amlujBn4GSt5K.png)
监控好后，在商户列表里会显示

![image.png](https://s2.loli.net/2024/07/25/A1jfwshXtSrJB4y.png)

## 通知管理
- 失效通知：当监控账号失效或者掉线后通知你
- 订单通知：监控到新的付款信息并回调成功后通知你
- 设定完成后点击`测试通知配置`确保配置正确
### 邮箱通知
在`程序配置`中选中`邮箱模式`，并填写相关信息。

![image.png](https://s2.loli.net/2024/07/25/4shuy1BqzvxmjGE.png)
### 钉钉通知
创建钉钉群

![image.png](https://s2.loli.net/2024/07/25/4ukACdIYmv9sZLq.png)
点击群设置->机器人->添加机器人->自定义

![image.png](https://s2.loli.net/2024/07/25/QGWlAZcF2HD8reJ.png)
选择安全模式为`加签`，复制密钥，完成后复制`webhook地址`

![image.png](https://s2.loli.net/2024/07/25/TMBtcPOheFd83Al.png)
在`程序配置`中选中`钉钉模式`，并填写相关信息。

![image.png](https://s2.loli.net/2024/07/25/C35uv78YzkXwl1D.png)

### 企业微信通知
创建企业微信群，添加群机器人

![image.png](https://s2.loli.net/2024/07/25/zSf3LUThAKoIaeZ.png)
填写好信息，新建机器人

![image.png](https://s2.loli.net/2024/07/25/dgkehTr213oEIct.png)
复制机器人的webhook地址

![image.png](https://s2.loli.net/2024/07/25/xDCc6Sti8UjT5qJ.png)
在`程序配置`中选中`企业微信`，并填写机器人的webhook地址。

![image.png](https://s2.loli.net/2024/07/25/LP23rvSA9cDIQlR.png)