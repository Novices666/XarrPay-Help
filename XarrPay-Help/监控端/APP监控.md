# APP监控
::: info 致谢
APP监控使用`SmsForwarder`进行数据转发

---
GitHub仓库：https://github.com/pppscn/SmsForwarder

Gitee仓库：https://gitee.com/pp/SmsForwarder/

:::

::: tip
这里介绍使用APP进行监控的通用方法，具体支持通道请自行测试！

---
软件下载请到售后群文件夹或项目仓库

---
本文使用的`SmsForwarder`版本为`3.3.1.240418`
:::

## 通用设置
::: tip
必备设置，其他请根据自身需求配置

---
配置后无效果，请到应用权限管理里手动授予权限
:::
1. 打开`转发功能`下的`转发应用通知`，如需权限请授予（通知使用权限）

2. 打开`增强功能`下的`启动时异步获取已安装App列表`，并勾选`用户应用`,如需权限请授予（获取应用列表权限）

3. 打开`保活措施`下的`开机启动`和`忽略电池优化设置`，如需权限请授予（自启动、省电策略-无限制）
4. 打开`个性设置`下的`启用自定义模板`，并填入转发信息模板
::: tip
v3.3.1开始只保留英文标签，请根据自己的版本，选择对应的模板
:::
::: details 版本号 < v3.3.1版本模板
```json
{
    "from": "{{来源号码}}",
    "package_name": "{{APP包名}}",
    "app_name": "{{APP名称}}",
    "title": "{{通知标题}}",
    "msg": "{{通知内容}}",
    "receive_time": "{{接收时间}}",
    "device_name": "{{设备名称}}"
}
```
:::

::: details 版本号 > v3.3.1版本模板
```json
{
    "from": "{{FROM}}",
    "package_name": "{{PACKAGE_NAME}}",
    "app_name": "{{APP_NAME}}",
    "title": "{{TITLE}}",
    "msg": "{{MSG}}",
    "receive_time": "{{RECEIVE_TIME}}",
    "device_name": "{{DEVICE_NAME}}"
}
```
:::
![](https://s2.loli.net/2024/08/03/FG6jtBgdIlfY9mT.png)
## 发送通道
::: tip
以个人版为例，商户版本自行对应填写
:::
新增`发送通道`，选择`Webhook`类型，请求方式选择`POST`，在`WebHookServer`中填入`短信转发器通知地址`，点击保存
![](https://s2.loli.net/2024/08/03/Urmb4qZFC6Q7oWz.png)
![](https://s2.loli.net/2024/08/03/UOvscVy4ZjKdbRN.png)

## 转发规则
在的`应用`页中新增转发规则，选择上一步新增的`发送通道`，`匹配字段`选择`APP包名`，`匹配模式`选择`是`，`匹配的值`可以下拉选择APP，点击保存
::: tip 匹配的值
- 微信：`com.tencent.mm`
- 支付宝：`com.eg.android.AlipayGphone`
:::
![](https://s2.loli.net/2024/08/03/rhmAocUHP6nRsLa.png)