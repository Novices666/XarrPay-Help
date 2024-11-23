import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/personal/",
  "/merchant/",
  "/channel/",
  "/monitor/",
  "/faq/",
  {
    text: "常用工具",
    icon: "screwdriver-wrench",
    children: [
      {
        text: "链接",
        children:[
          {
            text: "草料二维码",
            icon: "qrcode",
            link: "https://cli.im/deqr"
          }
        ]
      },
      {
        text: "工具",
        children:[
          {
            text: "拉卡拉转换工具",
            icon:"wrench",
            link: "/tools/lkl.md"
          },
          {
            text: "转发提取工具",
            icon: "hammer",
            link: "/tools/notify.md"
          },
        ]
      },
    ],
  },
]);
