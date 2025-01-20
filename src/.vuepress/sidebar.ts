import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/start/": [
    {
      text: "快速开始",
      icon: "lightbulb",
      children: [
        "introduction",
        "authorize",
      ],
    },
  ],
  "/personal/": [
    {
      text: "个人版-文档",
      icon: "user",
      children: [
        "install",
        "custom",
      ],
    },
  ],
  "/merchant/": [
    {
      text: "商户版-文档",
      icon: "bolt",
      children: [
        "install",
        "template",
        "plugins",
        "tools",
        "notify"
      ],
    },
  ],
  "/channel/": [
    {
      text: "通道配置",
      icon: "inbox",
      children: [
        "xd",
        "alipay",
        "wxpay",
        "qqpay",
        
      ],
    },
  ],
  "/monitor/": [
    {
      text: "监控配置",
      icon: "eye",
      children: [
        "app",
        "windows",
      ],
    },
  ],
  "/tools/": [
    {
      text: "常用工具",
      icon: "screwdriver-wrench",
      children: [
        "notify",
      ],
    },
  ],
});
