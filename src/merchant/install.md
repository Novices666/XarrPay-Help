# 安装xarrpay商户版

## 使用宝塔安装（推荐）
1. 在宝塔 `文件` 板块，选择合适的位置`新建文件夹`（推荐位置`/www/wwwroot`）并重命名为英文，在新建文件夹中上传下载好的安装包并解压。
![](https://s2.loli.net/2024/03/30/xXYCzew3qUNIG6T.png)
2. 在宝塔 `数据库` 板块，创建数据库。
![](https://s2.loli.net/2024/03/30/EDr32asTxRMJk67.png)
3. 在宝塔 `网站` 板块，点击 `Go项目` —— `添加Go项目` ，选择 `项目执行文件` 。
![](https://s2.loli.net/2024/04/25/5k4AgXBjiDIVzoF.png)
4. 按照下图，填写 `项目端口`并放行，选择 `运行用户` 为 `root`，设定 `开机自启` ，点击 `提交` 完成创建。
![](https://s2.loli.net/2024/04/25/b8dFKH7yG9RWP2n.png)
5. [后续步骤](#访问绑定域名install或ip端口install按照步骤完成搭建)
## 使用1panel安装
:::tip
适用于初次安装1panel的用户
:::
1. 先到`工具箱`>`快速设置`>`系统时区`确保时区为`Asia/Shanghai`，如果不是，请点击后面的`设置`，再选择`北京`即可。设置完后会重启面板，如果没有请手动重启。
![](https://s2.loli.net/2024/12/03/zxbjKNlFAXgBu6R.png)
2. 在应用商店安装`OpenResty(新版本)`+`MySQL(选择5.7版本)`。
![](https://s2.loli.net/2024/12/03/vHgdaUhO38A5bcE.png)
3. 在`主机`>`文件`中合适位置上传并解压安装包`。
![](https://s2.loli.net/2024/12/03/SBImNPcQ6RlhU4L.png)
4. 在`数据库`中`创建数据库`，自定义`名称`，点击`确认`。
![](https://s2.loli.net/2024/12/03/jYhebCgtcsXKQ2x.png)
5. 在`网站`>`运行环境`>`Go`中`创建运行环境`，`名称`自定义，`运行目录`填写第*3*步中的目录，`启动命令`填写`./xarr-pay-merchant`，`应用端口`填写`32000`，点击确定。
![](https://s2.loli.net/2024/12/03/yWVHG9mfEJOYrBi.png)
6. 在`网站`>`网站`中点击`创建网站`选择`运行环境`，`类型`选择`Go`，`运行环境`选择刚刚创建的`名称`，`主域名`填写您要绑定的域名，其他可选不做要求，点击确定。
![](https://s2.loli.net/2024/12/03/wu6Qt5iVRJ9ZHog.png)
7. [后续步骤](#访问绑定域名install或ip端口install按照步骤完成搭建)
:::warning
在后续步骤的第*3*步中，`数据库配置`>`主机地址`需要填写`数据库`>`连接信息`>`容器连接`下的`地址`。
![](https://s2.loli.net/2024/12/03/S4C81hsfNg3wDrX.png)
![](https://s2.loli.net/2024/12/03/F4aZBHWcPDG6Uk3.png)
:::

## 后续步骤
:::tip
访问`绑定域名/install`或`ip:端口/install`按照步骤完成搭建
:::
- 1、同意用户协议
![](https://s2.loli.net/2024/04/25/t4HqELNn2Dd3jIo.png)
- 2、填写授权码
![](https://s2.loli.net/2024/04/25/KpLC8WHfIxrkTQJ.png)
在授权中心复制授权码，填入
![](https://s2.loli.net/2024/04/25/Ab41kU273l5nSzq.png)
- 3、填写数据库信息
![](https://s2.loli.net/2024/04/25/G2jNiUd9WcAwCJE.png)
- 4、立即安装
![](https://s2.loli.net/2024/04/25/fcEVRU5zFmBxtno.png)
- 5、自定义管理员信息及配置后台入口
![](https://s2.loli.net/2024/04/25/mKgI1hwtpqarYRv.png)
- 6、完成安装
![](https://s2.loli.net/2024/04/25/fUWqmurNH6ovPkt.png)