<template>
    <div>
        <el-link href="https://element.eleme.cn/#/zh-CN/component/switch" target="_blank" type="primary">文档 switch</el-link>
        <br>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
</template>


<script>
export default {
    data() {
        return {
            value: true
        }
    }
};
</script>