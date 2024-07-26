<template>
  <div>
    <textarea id="headerInput" rows="10" style="width: 100%; border: 1px solid #ccc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; border-radius: 8px;" placeholder="  在这里粘贴抓到的协议头"></textarea>
    
    <button style="font-size: 1em; background-color: #E9EAFF; padding: 10px 20px; border: none; cursor: pointer; border-radius: 8px; margin-top: 2px;  margin-bottom: 10px;margin-right: 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;" @click="extractToEncryptedJSON">转换</button>
    <button style="font-size: 1em; background-color: #E9EAFF; padding: 10px 20px; border: none; cursor: pointer; border-radius: 8px; margin-top: 2px; margin-bottom: 10px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;" @click="copyToClipboard">一键复制</button>
    
    
    <textarea id="encryptedOutput" rows="15" style="width: 100%; border: 1px solid #ccc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; border-radius: 8px;" readonly placeholder="  这里显示转换后的结果" v-model="encryptedOutput"></textarea>
  </div>
</template>
  
<script>
  // import Vue from 'vue'
  // import ElementPlus from 'element-plus'
  // import 'element-plus/dist/index.css'

  // Vue.use(ElementPlus)


  export default {
    name: 'LakalaTransform',
    data() {
      return {
        encryptedOutput: ''
      }
    },
    methods: {
      extractToEncryptedJSON() {
        let headerText = document.getElementById("headerInput").value;
        let headers = {};
        headerText.trim().split('\n').forEach(line => {
          let [key, value] = line.split(':');
          headers[key.trim()] = value.trim();
        });
        let jsonHeaders = {};
        let desiredHeaders = ["Authorization", "User-Agent", "X-Client-Bus-Ver", "X-Client-Id", "X-Client-PV", "X-Client-Platform", "X-Client-Series", "X-Client-Ver", "X-Device-Id", "X-Device-Location", "X-Device-Manufacture", "X-Device-Model", "X-Device-Ver", "X-GuestId", "X-Client-Sign"];
        desiredHeaders.forEach(header => {
          if (headers[header]) {
            jsonHeaders[header] = headers[header];
          }
        });
        let jsonData = JSON.stringify(jsonHeaders);
        let base64Data = btoa(jsonData);
        this.encryptedOutput = base64Data;
      },
      copyToClipboard() {
        let output = this.encryptedOutput;
        let input = document.createElement('input');
        input.value = output;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('复制成功！');
        
      }
    }
  }
</script>