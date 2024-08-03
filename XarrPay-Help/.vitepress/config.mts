import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "XarrPay-Help",
  description: "XarrPay-Help",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/_media/logo.png', width: 24, height: 24 },
    footer: {
      message: '搬运请注明出处',
      copyright: `版权所有 © 2024 XarrPay-Help`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '目录',
      level: [2,3]
    },


    // 导航栏配置
    nav: [
      { text: '主页', link: '/' },
      { text: '项目配置', 
        items: [
          { text: '通道管理', link: '通道管理/支付宝' },
          { text: '监控端', link: '/监控端/APP监控' },
        ] 
      },
      { text: '常用工具', 
        items: [
          { text: '草料二维码', link: 'https://cli.im/' },
          { text: '拉卡拉转换工具', link: '/常用工具/拉卡拉转换工具' },
        ] 
      },
    ],
    // 侧边栏配置
    sidebar: [
      {
        text: '个人版',
        items: [
          { text: '个人版-授权', link: '/个人版/授权' },
          { text: '个人版-安装', link: '/个人版/安装' },
          { text: '个人版-自定义页面', link: '/个人版/自定义页面' },
        ]
      },
      {
        text: '商户版',
        items: [
          { text: '商户版-授权', link: '/商户版/授权' },
          { text: '商户版-安装', link: '/商户版/安装' }
        ]
      },
      {
        text: '通道管理',
        items: [
          { text: '通道管理-支付宝', link: '/通道管理/支付宝' },
          { text: '通道管理-微信', link: '/通道管理/微信' },
          { text: '通道管理-QQ', link: '/通道管理/QQ' },
        ]
      },
      {
        text: '监控端',
        items: [
          { text: '监控端-APP监控', link: '/监控端/APP监控' },
          { text: '监控端-PC三网监控', link: '/监控端/PC三网监控' },
        ]
      },
      {
        text: '常见问题',
        items:  [ 
          { text: '常见问题-程序', link: '/常见问题/程序问题' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: '' }
    // ],

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'




  }



  
})
