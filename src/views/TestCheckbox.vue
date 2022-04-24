<template>
    <div>
        <el-link href="https://element.eleme.cn/#/zh-CN/component/checkbox" target="_blank" type="primary">文档 Link</el-link>
        <br>
        <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
        >全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    data() {
        return {
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true// "全选"上的那种部分选择的状态
        };
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];        // 是否全部选中
            this.isIndeterminate = false;                       // 全选按钮状态：全选状态是确定的
            // liuyang
            console.log("当前复选框的值：", this.checkedCities)
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;                         // 是否全部选中
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;// 全选按钮状态：部分选择时状态是不确定的
            // liuyang
            console.log("当前复选框的值：", this.checkedCities)
        }
    }
};
</script>