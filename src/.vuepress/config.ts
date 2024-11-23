import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // base: "/",
  base: "/XarrPay-Help/",//github pages
  lang: "zh-CN",
  title: "XarrPay-Help",
  description: "基于GoLang的码支付系统帮助文档",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
