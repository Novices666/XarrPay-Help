import{_ as e,c as l,a2 as o,o as i}from"./chunks/framework.D-0uTJ1g.js";const h=JSON.parse('{"title":"站长应用","description":"","frontmatter":{},"headers":[],"relativePath":"商户版/站长应用.md","filePath":"商户版/站长应用.md"}'),c={name:"商户版/站长应用.md"};function t(d,a,p,s,r,n){return i(),l("div",null,a[0]||(a[0]=[o('<h1 id="站长应用" tabindex="-1">站长应用 <a class="header-anchor" href="#站长应用" aria-label="Permalink to &quot;站长应用&quot;">​</a></h1><h2 id="插件生成应用" tabindex="-1">插件生成应用 <a class="header-anchor" href="#插件生成应用" aria-label="Permalink to &quot;插件生成应用&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>为了方便，app监控通知类通道的适配。 使用jk_wechat插件的模板<br> 对只需要二维码地址/图片的监控类插件做了界面化生成</p></div><p>下面对软件界面对应填写参数做简单说明。</p><h3 id="参数填写说明" tabindex="-1">参数填写说明 <a class="header-anchor" href="#参数填写说明" aria-label="Permalink to &quot;参数填写说明&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>软件内置了演示数据，点击<code>查看示例</code>即可。多多参考示例内容！<br> 软件在对应操作顺序有标号，请按照顺序填写信息。</p></div><p><img src="https://s2.loli.net/2024/11/01/lzc4RwWYJBkubpF.png" alt="" data-fancybox="gallery"></p><h4 id="_1-插件信息-部分说明" tabindex="-1">1. 插件信息（部分说明） <a class="header-anchor" href="#_1-插件信息-部分说明" aria-label="Permalink to &quot;1. 插件信息（部分说明）&quot;">​</a></h4><ul><li>别名 <ul><li>即你插件的英文代码，建议监控类都以<code>jk_</code>开头，后面自定义。</li></ul></li><li>类型 <ul><li>即你的支付类型，比如你是wx类的插件，可以填wxpay,百度支付可以填写baidupay等。 可以自定义，但是切记，这里的类型需要与<code>后台&gt;支付通道&gt;支付管理&gt;代码</code>进行对应</li></ul></li><li>包名 <ul><li>即你需要监控的app的包名，自行查找。</li></ul></li></ul><h4 id="_2-插件常量-即你插件所包含的所有通道" tabindex="-1">2. 插件常量，即你插件所包含的所有通道 <a class="header-anchor" href="#_2-插件常量-即你插件所包含的所有通道" aria-label="Permalink to &quot;2. 插件常量，即你插件所包含的所有通道&quot;">​</a></h4><p>建议常量名以<code>pay_</code>+<code>内容</code>，比如内容为baidu_app，常量名就是<code>pay_baidu_app</code></p><ul><li>如果有多个，像示例那样，则继续使用<code>_</code>拼接差别。例如： <ul><li>wx店员：<code>pay_wxpay_dianyuan</code>+<code>wxpay_dianyuan</code></li><li>wxapp：<code>pay_wxpay_app</code>+<code>wxpay_app</code></li></ul></li></ul><p>增加完成后点击<code>读取常量</code></p><h4 id="_3-通道名称-即设置2中对应的中文名和表单类型。" tabindex="-1">3. 通道名称，即设置2中对应的中文名和表单类型。 <a class="header-anchor" href="#_3-通道名称-即设置2中对应的中文名和表单类型。" aria-label="Permalink to &quot;3. 通道名称，即设置2中对应的中文名和表单类型。&quot;">​</a></h4><ul><li><code>code</code>和<code>表单类型</code>可进行下拉选择</li></ul><h4 id="_4-匹配数据-即适配通知" tabindex="-1">4. 匹配数据，即适配通知 <a class="header-anchor" href="#_4-匹配数据-即适配通知" aria-label="Permalink to &quot;4. 匹配数据，即适配通知&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>转发消息获取可参考app监控配置，然后在项目日志中获取，后续写完获取接口，在这里贴出。<br> 一个插件可对应多个通知，参考示例数据。</p></div><ul><li><p>标题：转发消息中的<code>title</code>字段</p></li><li><p>通知正则：转发消息中的<code>msg</code>字段</p><ul><li>将其中的金额使用<code>(?&lt;amount&gt;[\\\\d\\\\.]+)</code>进行替换，比如： <ul><li><code>微信支付：微信支付收款(?&lt;amount&gt;[\\\\d\\\\.]+)元</code></li></ul></li></ul></li><li><p>code：下拉选择，通知正则对应的插件。</p></li></ul><h3 id="已知问题" tabindex="-1">已知问题 <a class="header-anchor" href="#已知问题" aria-label="Permalink to &quot;已知问题&quot;">​</a></h3><ol><li>生成后的插件中，人民币符号<code>￥</code>错误 使用文本工具打开生成后的<code>plugin.lua</code>，使用下方的符号进行替换</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>¥</span></span></code></pre></div><p>可以使用<code>ctrl</code>+<code>h</code>进行快速替换</p>',22)]))}const b=e(c,[["render",t]]);export{h as __pageData,b as default};
