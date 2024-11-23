# 自定义页面
::: tip
自定义页面支持两种配置方式
- 富文本：适合小白用户。
- 原始Html：适合高级用户。可以输入html、css、js代码
---
这里演示常见应用场景
:::
## 支付页自动播放提示音频
代码名词解释
- `preload`：预加载，即在页面加载完成后，浏览器会自动加载音频文件，不必等到用户点击播放按钮
- `autoplay`：自动播放，即页面加载完成后，音频文件会自动播放
- `loop`：循环播放，即音频文件会一直循环播放
- `source`：设置音频文件路径，可以是路径，也可以是url
::: tip
请根据你的需要来配置
:::
```html
<audio preload autoplay loop id="vd">
     <source src="需要播放的音频文件路径" type="audio/mpeg">
</audio>
<script type="text/javascript">
    window.onload = function(){
             setInterval("toggleSound()",100);
        }
    function toggleSound() {
                var music = document.getElementById("vd");
                if (music.paused) {
                    music.paused=false;
                    music.play();
                }    
        }
</script>
```