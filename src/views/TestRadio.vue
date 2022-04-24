<template>
    <div>
        <el-link href="https://element.eleme.cn/#/zh-CN/component/radio" target="_blank" type="primary">文档 radio</el-link>
        <br>
        <el-radio v-model="radio" label="1" @change="onChange">备选项</el-radio>
        <el-radio v-model="radio" label="2" @change="onChange">备选项</el-radio>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'// 1. 加上有“默认值。” 2. 值必须是字符串。
      };
    },
    methods: {
        onChange() {
            console.log("当前radio值是：", this.radio)
        }
    }
  }
</script>