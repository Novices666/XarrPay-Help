import{_ as c,o as d,c as p,j as t,a3 as s,a4 as l,a2 as u,G as m}from"./chunks/framework.D-0uTJ1g.js";const b={data(){return{pid:"",token:"",result:""}},computed:{apiLink(){return`https://xarr.hg007.cc/api/parseNotice?pid=${this.pid}&token=${this.token}`}},methods:{async requestApi(){if(!this.pid||!this.token){alert("请填写 PID 和 Token");return}try{const a=await fetch(`https://xarr.hg007.cc/api/getParseResult?pid=${this.pid}&token=${this.token}`);if(!a.ok)throw new Error("网络响应错误");const e=await a.json();this.result=JSON.stringify(e,null,2)}catch(a){this.result=`请求失败: ${a.message}`}},copyToClipboard(){const a=this.apiLink,e=document.createElement("input");e.value=a,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("复制成功！")}}},x={class:"api-link"},y=["value"];function f(a,e,r,h,n,i){return d(),p("div",null,[t("div",null,[s(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>n.pid=o),id:"pid",placeholder:"请输入 PID",style:{width:"100%",border:"1px solid #ccc","border-radius":"8px",padding:"10px","margin-bottom":"10px","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}},null,512),[[l,n.pid]])]),t("div",null,[s(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>n.token=o),id:"token",placeholder:"请输入 Token",style:{width:"100%",border:"1px solid #ccc","border-radius":"8px",padding:"10px","margin-bottom":"10px","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}},null,512),[[l,n.token]])]),t("button",{style:{"font-size":"1em","background-color":"#10b98124",padding:"10px 20px",border:"none",cursor:"pointer","border-radius":"8px","margin-right":"10px","margin-top":"2px","margin-bottom":"10px","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"},onClick:e[2]||(e[2]=(...o)=>i.copyToClipboard&&i.copyToClipboard(...o))}," 复制链接 "),t("button",{style:{"font-size":"1em","background-color":"#10b98124",padding:"10px 20px",border:"none",cursor:"pointer","border-radius":"8px","margin-top":"2px","margin-bottom":"10px","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"},onClick:e[3]||(e[3]=(...o)=>i.requestApi&&i.requestApi(...o))}," 提取 "),t("div",x,[t("input",{type:"text",value:i.apiLink,readonly:"",style:{width:"100%",border:"1px solid #ccc","border-radius":"8px",padding:"10px","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"}},null,8,y)]),t("div",null,[s(t("textarea",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.result=o),rows:"15",style:{width:"100%",border:"1px solid #ccc","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif","border-radius":"8px",padding:"10px"},readonly:"",placeholder:"这里显示提取到的内容"},null,512),[[l,n.result]])])])}const g=c(b,[["render",f],["__scopeId","data-v-ae64cce5"]]),v=JSON.parse('{"title":"转发提取工具","description":"","frontmatter":{},"headers":[],"relativePath":"常用工具/转发提取工具.md","filePath":"常用工具/转发提取工具.md"}'),k={name:"常用工具/转发提取工具.md"},U=Object.assign(k,{setup(a){return(e,r)=>(d(),p("div",null,[r[0]||(r[0]=u('<h1 id="转发提取工具" tabindex="-1">转发提取工具 <a class="header-anchor" href="#转发提取工具" aria-label="Permalink to &quot;转发提取工具&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本工具仅供学习交流使用，请勿用于商业用途。<br> 配置教程同<code>APP监控</code>配置。</p></div><div class="warning custom-block"><p class="custom-block-title">注意</p><ol><li><code>pid</code>及<code>token</code>建议自定义填写，避免弱口令。</li><li>填写完成后使用下方给出的链接替换配置<code>app监控</code>流程中的<code>WebHookServer</code>。</li><li>提取消息只保留最新的一条。</li><li>点击<code>提取</code>后，稍等片刻即可看到结果。</li></ol></div>',3)),m(g)]))}});export{v as __pageData,U as default};
