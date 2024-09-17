// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './home.css'
// theme/index.ts
import '@theojs/lumen/theme'

import { Announcement } from '@theojs/lumen'
import { h } from 'vue'
import { HomeUnderline } from '@theojs/lumen'
import { HomeFooter } from '@theojs/lumen'
import { Footer_Data } from '../data/footerData'
import { DocAsideLogo } from '@theojs/lumen'
import { Aside_Data } from '../data/AsideData'

import { ShareButton } from '@theojs/lumen'
import { DocBox, DocLinks, DocBoxCube } from '@theojs/lumen'
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'aside-outline-before': () => h(ShareButton),

    })
  },
  enhanceApp: ({ app }) => {
      app.component('Home', HomeUnderline),
      app.component('Box', DocBox)
      app.component('Links', DocLinks)
      app.component('BoxCube', DocBoxCube)
  },
}