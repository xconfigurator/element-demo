<template>
    <div>
        <el-link href="https://element.eleme.cn/#/zh-CN/component/input" target="_blank" type="primary">文档 Input</el-link>
        <br>
        <!-- 控制高度 size -->
        <!-- 图标 prefix-icon suffix-icon -->
        <!-- 限制宽度 -->
        <div style="width: 800px;">
            <el-input placeholder="演示输入框两端的小图标" v-model="intput1" prefix-icon="el-icon-phone" suffix-icon="el-icon-delete-solid"></el-input>
            <el-input placeholder="展示/隐藏密码" v-model="input2" show-password></el-input>
        </div>
        <!-- 限制输入框可输入的字符长度 maxlength minlength show-word-limit (e.g. 0/3) -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: ''
    }
  }
}
</script>