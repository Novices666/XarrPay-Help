import{_ as a,c as l,o as t,a2 as e}from"./chunks/framework.BikPdvwc.js";const u=JSON.parse('{"title":"支付宝通道","description":"","frontmatter":{},"headers":[],"relativePath":"通道管理/支付宝.md","filePath":"通道管理/支付宝.md"}'),p={name:"通道管理/支付宝.md"},o=e('<h1 id="支付宝通道" tabindex="-1">支付宝通道 <a class="header-anchor" href="#支付宝通道" aria-label="Permalink to &quot;支付宝通道&quot;">​</a></h1><h2 id="支付宝商家账单-无需ck-无需挂机" tabindex="-1">支付宝商家账单(无需CK,无需挂机) <a class="header-anchor" href="#支付宝商家账单-无需ck-无需挂机" aria-label="Permalink to &quot;支付宝商家账单(无需CK,无需挂机)&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">注意</p><p>之前没有申请过的用户，已无法使用</p></div><h3 id="前期准备工作" tabindex="-1">前期准备工作 <a class="header-anchor" href="#前期准备工作" aria-label="Permalink to &quot;前期准备工作&quot;">​</a></h3><ul><li>首先到支付宝开放平台完成注册及实名认证</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://open.alipay.com/" target="_blank" rel="noreferrer">https://open.alipay.com/</a></p></div><p>然后进入你的控制台，选择<code>网页/移动应用</code>，点击<code>创建网页/移动应用</code>，在创建页面选择<code>网页应用</code>。 <img src="https://s2.loli.net/2024/03/20/b9FZSxDsUR6q425.png" alt=""><img src="https://s2.loli.net/2024/03/20/KLb85iRxp9XnfrA.png" alt=""></p><p>创建完成后需要审核，一般1天内。</p><h3 id="配置网页应用" tabindex="-1">配置网页应用 <a class="header-anchor" href="#配置网页应用" aria-label="Permalink to &quot;配置网页应用&quot;">​</a></h3><ul><li>前一步全部完成后，点击网页应用后面的<code>详情</code></li></ul><p><img src="https://s2.loli.net/2024/03/20/AeMm2CTzjIOfpbq.png" alt=""></p><ul><li>在弹出的新页面点击<code>产品绑定</code>，开通<code>基础功能产品</code>（最好是把免费的服务全部开通）</li></ul><p><img src="https://s2.loli.net/2024/03/20/2XbTBmc4dNCkeJ8.png" alt=""></p><ul><li>接着在开发设置里，配置<code>接口加签方式（密钥/证书）</code></li></ul><p><img src="https://s2.loli.net/2024/03/20/jF4x1GAgqKyVhvJ.png" alt=""></p><h4 id="配置接口加签方式-密钥-证书" tabindex="-1">配置<code>接口加签方式（密钥/证书）</code> <a class="header-anchor" href="#配置接口加签方式-密钥-证书" aria-label="Permalink to &quot;配置`接口加签方式（密钥/证书）`&quot;">​</a></h4><p><strong>这里演示的账号已经开通过了，所以所有的都显示为变更，但是步骤是一样的</strong></p><ul><li>在打开配置页面后，选择<code>密钥（普遍适用）</code></li></ul><p><img src="https://s2.loli.net/2024/03/20/Fqp5xwGXzbZKslT.png" alt=""></p><ul><li><p>下载并安装提示中的<code>密钥工具</code>，按照新页面提示下载指定程序包，然后安装 <img src="https://s2.loli.net/2024/03/20/l8SK9eay1ZgQRIu.png" alt=""></p></li><li><p>打开工具，按下图所示选择，然后点击生成密钥 <img src="https://s2.loli.net/2024/03/20/R9XTZjeB62yOzvb.png" alt=""></p></li><li><p>保存好生成的公钥和私钥 <img src="https://s2.loli.net/2024/03/20/JKgItQVvroApfR5.png" alt=""></p></li><li><p>在网页中点击下一步，按照提示填写公钥，然后点<code>确认上传</code>，提示密钥保存成功即可 <img src="https://s2.loli.net/2024/03/20/7HEKgfORalezWI6.png" alt=""></p></li></ul><p>如过提示，点击稍后操作即可。 <img src="https://s2.loli.net/2024/03/20/PrRNckz97LKxWl6.png" alt=""></p><h3 id="配置xarrpay" tabindex="-1">配置XarrPay <a class="header-anchor" href="#配置xarrpay" aria-label="Permalink to &quot;配置XarrPay&quot;">​</a></h3><ul><li><p>进入XarrPay管理后台，选择通道管理，按照下图新增通道，使用方式两者皆可 <img src="https://s2.loli.net/2024/03/20/8gy17TIapjewduq.png" alt=""></p></li><li><p>应用AppId，在支付宝开放平台，控制台中查询，如下图，私钥填写刚刚软件生成的私钥。 <img src="https://s2.loli.net/2024/03/20/bglvcIVWtBof5x6.png" alt=""></p></li></ul><h4 id="使用方式详解" tabindex="-1">使用方式详解 <a class="header-anchor" href="#使用方式详解" aria-label="Permalink to &quot;使用方式详解&quot;">​</a></h4><ul><li>选择二维码 使用二维码解析工具解码自己的收款码</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>推荐草料二维码解析<a href="https://cli.im/deqr" target="_blank" rel="noreferrer">https://cli.im/deqr</a></p></div><p>将解码后得到的链接填入即可</p><ul><li><p>选择支付宝PID</p></li><li><ul><li>方法一 支付宝扫码获取PID<br><img src="https://s2.loli.net/2024/03/20/nV1Shlz7AxPX8Tc.png" alt=""></li></ul></li><li><ul><li>方法二（三个链接选一个即可）</li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://b.alipay.com/page/store-management/infomanage" target="_blank" rel="noreferrer">https://b.alipay.com/page/store-management/infomanage</a><br> 上面链接的-商户号(收单账号)</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://open.alipay.com/develop/manage/account/manage" target="_blank" rel="noreferrer">https://open.alipay.com/develop/manage/account/manage</a></p><p>上面链接的-账号ID</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://open.alipay.com/platform/keyManage.htm?keyType=partner" target="_blank" rel="noreferrer">https://open.alipay.com/platform/keyManage.htm?keyType=partner</a></p><p>上面链接的-合作伙伴身份（PID）</p></div><p><strong>配置好之后，使用通道自带的支付测试，测试配置是否正确</strong> 如有疑问请联系你的上级</p>',32),i=[o];function r(s,c,n,d,h,m){return t(),l("div",null,i)}const b=a(p,[["render",r]]);export{u as __pageData,b as default};
