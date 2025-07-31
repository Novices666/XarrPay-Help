import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // base: "/",
  base: "/XarrPay-Help/",//github pages
  lang: "zh-CN",
  title: "XArrPay-Help",
  description: "基于GoLang的码支付系统帮助文档",
  head:[
    ['meta',{ name: 'keywords', content: 'XArrPay,XarrPay,xarrpay,官网,xarrpay官网,XArr码支付,Xarr码支付,授权,支付系统授权,码支付系统授权,帮助文档,码支付帮助文档,xarrpay帮助文档' }]
  ],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
