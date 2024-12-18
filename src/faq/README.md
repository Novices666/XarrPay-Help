---
title: 常见问题
icon: circle-question
index: false
---
<VPBanner
  title="XarrPay"
  content="点击购买，享受站长优质售后！"
  logo="./logo.svg"
  :actions='[
    {
      text: "购买",
      link:"http://ksy.hg007.cc/goodslist?cid=12",
    },
  ]'
/>

# 常见问题
## 1、端口被占用/更新后无法启动/更新后网页一直自动刷新 {#常见问题1}
这类问题都是有多个xarrpay在运行导致的，在宝塔项目管理中将状态更改为停止后，使用SSH或终端连接服务器，执行以下命令
```shell
lsof -i:端口
```
端口为你xarrpay的运行端口，如24017
```shell
lsof -i:24017
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

- 在宝塔项目管理中将项目状态更改为`停止`后，按照 [**常见问题1**](#常见问题1) 先执行一遍，确保没有多个XarrPay在运行。

- 前往授权中心，下载最新版本安装包
![下载安装包](https://s2.loli.net/2024/03/30/Ft5jkfGbu7diyzI.png)
- 上传到服务器对应程序目录，解压覆盖（请参考安装教程第一步）

- 在宝塔项目管理中将状态更改为启动