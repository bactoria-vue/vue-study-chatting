<template>
    <el-header>
        {{title}}
        <div style="border-bottom: 1.5px solid #f0f1f5; width: 80%; left: 10%; position: relative; margin-bottom: 40px;"></div>
    </el-header>
</template>

<script>
    export default {
        name: "SubTitle",
        props: ['title']
    }
</script>

<style scoped>
    .el-header {
        height: 30px;
        text-align: center;
        font-weight: bolder;
        font-size: 2em;
        color: slategrey;
    }
</style>
