<template>
  <div>
    <div>
      <input type="text" v-model="pid" id="pid" placeholder="请输入 PID"
        style="width: 100%; border: 1px solid #ccc; border-radius: 8px; padding: 10px; margin-bottom: 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;" />
    </div>
    <div>
      <input type="text" v-model="token" id="token" placeholder="请输入 Token"
        style="width: 100%; border: 1px solid #ccc; border-radius: 8px; padding: 10px; margin-bottom: 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;" />
    </div>

    <button
      style="font-size: 1em;  background-color: #10b98124; padding: 10px 20px; border: none; cursor: pointer; border-radius: 8px; margin-right: 10px; margin-top: 2px; margin-bottom: 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
      @click="copyToClipboard">
      复制链接
    </button>
    <button
      style="font-size: 1em;  background-color: #10b98124; padding: 10px 20px; border: none; cursor: pointer; border-radius: 8px; margin-top: 2px; margin-bottom: 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;"
      @click="requestApi">
      提取
    </button>

    <div class="api-link">
      <input type="text" :value="apiLink" readonly
        style="width: 100%; border: 1px solid #ccc; border-radius: 8px; padding: 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;" />
    </div>
    <div>
      <textarea v-model="result" rows="15"
        style="width: 100%; border: 1px solid #ccc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; border-radius: 8px; padding: 10px;"
        readonly placeholder="这里显示提取到的内容"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pid: '',
      token: '',
      result: '',
    };
  },
  computed: {
    apiLink() {
      // 更新为 parseNotice 接口的链接
      return `https://xarr.hg007.cc/api/parseNotice?pid=${this.pid}&token=${this.token}`;
    },
  },
  methods: {
    async requestApi() {
      if (!this.pid || !this.token) {
        alert('请填写 PID 和 Token');
        return;
      }

      try {
        // 请求另一个 API 接口
        const response = await fetch(`https://xarr.hg007.cc/api/getParseResult?pid=${this.pid}&token=${this.token}`);
        if (!response.ok) {
          throw new Error('网络响应错误');
        }
        const data = await response.json();
        this.result = JSON.stringify(data, null, 2);
      } catch (error) {
        this.result = `请求失败: ${error.message}`;
      }
    },
    copyToClipboard() {
      const output = this.apiLink; // 使用生成的 API 链接
      const input = document.createElement('input'); // 创建一个临时输入框
      input.value = output; // 设置输入框的值为 API 链接
      document.body.appendChild(input); // 将输入框添加到文档中
      input.select(); // 选择输入框内容
      document.execCommand('copy'); // 复制选中的内容
      document.body.removeChild(input); // 移除临时输入框
      alert('复制成功！'); // 提示用户
    },
  },
};
</script>

<style scoped>
.api-link {
  margin-bottom: 10px;
}
</style>