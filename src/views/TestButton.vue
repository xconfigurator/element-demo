<template>
    <div>
        <el-link href="https://element.eleme.cn/#/zh-CN/component/button" target="_blank" type="primary">文档 Button</el-link>
        <br>
        <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
        <!-- plain round circle  -->
        <el-row>
            <el-button icon="el-icon-search" circle plain></el-button>
            <el-button type="primary" icon="el-icon-edit" circle plain></el-button>
            <el-button type="success" icon="el-icon-check" circle plain></el-button>
            <el-button type="info" icon="el-icon-message" circle plain></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle plain></el-button>
            <el-button type="danger" icon="el-icon-delete" circle plain></el-button>
        </el-row>
        <!-- test loading -->
        <el-button type="primary" :loading="true">加载中</el-button>
        <el-button type="primary" :loading="loading" @click="onLoad()">加载中</el-button> 
    </div>
</template>

<script>
    export default {
        //loading: false;

        data() {
            return {
                loading: false
            }  
        },
        methods: {
            onLoad() {
                console.log("loading begin ...")
                this.loading = true

                setTimeout(()=>{
                    this.loading = false
                    console.log("loging end.")
                }, 2000)
            }
        }
    }
</script>