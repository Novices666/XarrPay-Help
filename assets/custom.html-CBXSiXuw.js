import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as t,o as n}from"./app-CHjb6Q4P.js";const l={};function e(h,s){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="自定义页面" tabindex="-1"><a class="header-anchor" href="#自定义页面"><span>自定义页面</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>自定义页面支持两种配置方式</p><ul><li>富文本：适合小白用户。</li><li>原始Html：适合高级用户。可以输入html、css、js代码</li></ul><hr><p>这里演示常见应用场景</p></div><h2 id="支付页自动播放提示音频" tabindex="-1"><a class="header-anchor" href="#支付页自动播放提示音频"><span>支付页自动播放提示音频</span></a></h2><p>代码名词解释</p><ul><li><code>preload</code>：预加载，即在页面加载完成后，浏览器会自动加载音频文件，不必等到用户点击播放按钮</li><li><code>autoplay</code>：自动播放，即页面加载完成后，音频文件会自动播放</li><li><code>loop</code>：循环播放，即音频文件会一直循环播放</li><li><code>source</code>：设置音频文件路径，可以是路径，也可以是url</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请根据你的需要来配置</p></div><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">audio</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> preload</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> autoplay</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> loop</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vd&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">     &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">source</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;需要播放的音频文件路径&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;audio/mpeg&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">audio</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text/javascript&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">onload</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">             setInterval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;toggleSound()&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> toggleSound</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> music</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getElementById</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;vd&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">music</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">paused</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">                    music</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">paused</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">                    music</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">play</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }    </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const r=i(l,[["render",e],["__file","custom.html.vue"]]),d=JSON.parse('{"path":"/personal/custom.html","title":"自定义页面","lang":"zh-CN","frontmatter":{"description":"自定义页面 提示 自定义页面支持两种配置方式 富文本：适合小白用户。 原始Html：适合高级用户。可以输入html、css、js代码 这里演示常见应用场景 支付页自动播放提示音频 代码名词解释 preload：预加载，即在页面加载完成后，浏览器会自动加载音频文件，不必等到用户点击播放按钮 autoplay：自动播放，即页面加载完成后，音频文件会自动播放...","head":[["meta",{"property":"og:url","content":"https://doc.xarr.uk/XarrPay-Help/personal/custom.html"}],["meta",{"property":"og:site_name","content":"XarrPay-Help"}],["meta",{"property":"og:title","content":"自定义页面"}],["meta",{"property":"og:description","content":"自定义页面 提示 自定义页面支持两种配置方式 富文本：适合小白用户。 原始Html：适合高级用户。可以输入html、css、js代码 这里演示常见应用场景 支付页自动播放提示音频 代码名词解释 preload：预加载，即在页面加载完成后，浏览器会自动加载音频文件，不必等到用户点击播放按钮 autoplay：自动播放，即页面加载完成后，音频文件会自动播放..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-23T06:35:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T06:35:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义页面\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T06:35:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"HG007\\",\\"url\\":\\"https://www.hg007.cc\\"}]}"]]},"headers":[{"level":2,"title":"支付页自动播放提示音频","slug":"支付页自动播放提示音频","link":"#支付页自动播放提示音频","children":[]}],"git":{"createdTime":1722659264000,"updatedTime":1732343701000,"contributors":[{"name":"novices666","email":"1601413678@qq.com","commits":1}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"personal/custom.md","localizedDate":"2024年8月3日","autoDesc":true}');export{r as comp,d as data};