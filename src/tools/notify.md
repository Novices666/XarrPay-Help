# 转发提取工具
:::tip
本工具仅供学习交流使用，请勿用于商业用途。   
配置教程同`APP监控`配置。
:::
:::warning 注意
1. `pid`及`token`建议自定义填写，避免弱口令。   
2. 填写完成后使用下方给出的链接替换配置`app监控`流程中`WebHookServer`填写的链接。   
3. 点击`提取`后，稍等片刻即可看到结果。
4. 为了避免隐私泄露，请提取完成后，先到`监控app`中删除`发送通道`，然后点击下方的`删除`，清空数据。
:::
<script setup>
import LakalaTransform from '@source/tools/vue/ParseNotice.vue'
</script>
<!-- <iframe src="\常用工具\拉卡拉转换工具.html" height="480" width="100%"  scrolling="yes"></iframe> -->
<LakalaTransform />