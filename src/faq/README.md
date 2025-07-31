---
title: 常见问题
icon: circle-question
index: false
---
<VPBanner
  title="XArrPay-演示"
  content="购买商户版，享受站长优质售后！<br>前台账户：user 密码：123456<br>后台账号：admin 密码：123456"
  logo="./logo.svg"
  :actions='[
    {
      text: "演示-前台",
      link:"https://mer.xarr.uk",
    },
    {
      text: "演示-后台",
      link: "https://mer.xarr.uk/admin",
    },
  ]'
/>

# 常见问题
## 1、端口被占用/更新后无法启动/更新后网页一直自动刷新 {#常见问题1}
这类问题都是有多个xarrpay在运行导致的，在宝塔项目管理中将状态更改为停止后，使用SSH或终端连接服务器，执行以下命令
```shell
lsof -i:端口
```
端口为你xarrpay的运行端口，如个人版为24017，商户版为32000
```shell
lsof -i:32000
```
![image.png](https://s2.loli.net/2024/07/25/8CSK3c7vXtZ5zVr.png)
将查询出的程序全部kill掉，执行下面的命令
```shell
kill -9 PID
```
PID为查询出的程序的PID，如26739
```shell
kill -9 26739
```
然后重启xarrpay即可（在宝塔项目管理中将状态更改为启动）

## 2、程序自动更新失败 {#常见问题2}

- 在宝塔项目管理中将项目状态更改为`停止`后，按照 [**常见问题1**](#常见问题1) 先执行一遍，确保没有多个XArrPay在运行。

- 前往授权中心，下载最新版本安装包
![下载安装包](https://s2.loli.net/2024/03/30/Ft5jkfGbu7diyzI.png)
- 上传到服务器对应程序目录，解压覆盖（请参考安装教程第一步）

- 在宝塔项目管理中将状态更改为启动

## 3、代挂云端网关地址访问失败 {#常见问题3}
像这样，服务器内部可以访问，但是外部浏览器无法访问
![服务器内部浏览器](https://s2.loli.net/2025/01/18/lJWBZkmNd2fx1zy.png)
![外部浏览器](https://s2.loli.net/2025/01/18/ThIy8voBMW1pU3q.png)
请按照以下顺序进行排查
::: tabs
@tab 第一步
排查服务器端口开放情况。
@tab 第二步
如果端口开放还不能访问，可能是服务器防火墙设置问题，请参考以下方式进行设置
1. 按下`win`键，输入`防火墙`进行搜索，点击`高级安全Windows防火墙`
![](https://s2.loli.net/2025/01/18/FRDTKGtWyB5r6vV.png)
2. 点击`入站规则`->`新建规则`>选择`端口`>选择`TCP`>选择`特定本地端口`，填入`代挂云端`中的服务端口，这里是`52642`>选择`允许连接`>全选>命名规则，点击完成
![](https://s2.loli.net/2025/01/18/JePQscqoKS1yXv3.png)
![](https://s2.loli.net/2025/01/18/KqH8e3XGbUWadMs.png)
![](https://s2.loli.net/2025/01/18/sFMKpt9PDCQNXZa.png)
![](https://s2.loli.net/2025/01/18/wm6FIKhcr91bTk4.png)
![](https://s2.loli.net/2025/01/18/iacEz9KgLSRWUqd.png)
![](https://s2.loli.net/2025/01/18/thEqUNIcyzw9buG.png)   
操作完成后外部浏览器就能访问了。
![外部浏览器](https://s2.loli.net/2025/01/18/OdMwq9WVKR4xDvy.png)
@tab 第三步
如果上述步骤操作完，可以正常访问云端，但是还是存在不回调的问题，先使用挂机宝/服务器的浏览器访问你的xarr网站，如果访问不通，请进行下述操作
1. 按照以下路径找到挂机宝/服务器的hosts文件
```
C:\Windows\System32\drivers\etc
```
![](https://s2.loli.net/2025/03/02/J8mSLTz3Ho2IUX9.png)
2. 使用文本编辑器打开hosts文件，新增一行，添加以下内容
- 注意中间用一个空格隔开
```
你搭建xarr服务器的ip xarr绑定的域名
```
例如
```
127.0.0.1 xarr.example.com
```
![](https://s2.loli.net/2025/03/02/XQwSh7sqZiYVWIa.png)

3. 再次使用挂机宝/服务器的浏览器访问你的xarr网站，访问通即解决。
:::