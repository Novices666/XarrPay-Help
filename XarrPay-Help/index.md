---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "XarrPay-Help"
  text: "更强大、更稳定、更安全"
  tagline: 基于GoLang的码支付系统帮助文档
  image:
    src: /_media/logo.png
    alt: Xarr
    width: 150
    height: 150
  actions:
    - theme: brand
      text: 快速开始-个人版
      link: /个人版/授权
    - theme: brand
      text: 快速开始-商户版
      link: /商户版/授权

features:
  - title: 授权中心
    details: XarrPay授权管理中心
    link: 'https://aupay.52nyg.com/'
  - title: 个人版演示
    details: |
      点击跳转前台地址
      ---
      账号：usertest
      ---
      密码：123456
    link: 'https://npay.hg007.cc/user'
  - title: 商户版演示
    details: | 
      点击跳转前台地址
      ---
      后台地址：/admin
      ---
      账号密码：admin
      ---
      前台账号：user
      ---
      前台密码：123456
      
    link: 'https://pay.hg007.cc/'
  
  # - title: 个人版
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  # - title: 监控端
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>