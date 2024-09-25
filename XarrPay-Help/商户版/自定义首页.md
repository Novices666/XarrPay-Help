
# 自定义首页

## 快速开始
`XarrPay-Templates`是`XarrPay-商户版`的主题库
<Links
  :items="[
    { name: 'XarrPay-Templates', link: 'https://github.com/Novices666/XarrPay-Templates', icon: 'fab fa-github' },
  ]"
/>

## 使用模板
1. 下载并上传到`项目根目录/templates/index/自己命名模板名称`

2. - 商户版后台--系统设置--基础信息
   - 首页类型选择--自定义模板
   - 首页模板--填写  自己命名模板名称
---
若没有样式，可能是忘了关键字替换

1. 在宝塔中打开index.html

2. ctrl+h替换
   - 第一行--`assets`
   - 第二行--`${.templateAssets}`
   - 全局替换（点一次就行了）

## 开发模板
### 模板结构：
```
- assets
    - css           // 样式文件
    - images           // 图片文件
    - js            // js文件
    - 其他静态文件   // 如字体文件等
- index.html        //首页html
- 其他页面html文件   //如about.html等
```

### 页内常用配置项
```html
网站名称
${"web_title" | get_option}
网站描述
${"web_description" | get_option}
网站关键字
${"web_keywords" | get_option}
网站底部（备案号）
${"web_copyright" | get_option}
网站favicon图标
${"web_favicon" | get_option}
网站logo
${"web_logo" | get_option}
网站联系QQ
${"web_service_qq" | get_option}
网站联系邮箱
${"web_service_email" | get_option}
```


