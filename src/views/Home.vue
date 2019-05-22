<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <message/>
                </div>
            </el-col>
            <el-col :span="12">
                <el-row :gutter="20">
                    <div class="grid-content bg-purple">
                        <Webtoon/>
                    </div>
                </el-row>
                <el-row :gutter="20">
                    <div class="grid-content bg-purple">
                        <News/>
                    </div>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Webtoon from "../components/webtoon/Webtoon";
    import News from "../components/news/News";
    import Message from "../components/chat/Message";

    export default {
        name: 'Home',
        components: {
            Message,
            News,
            Webtoon,
        },
    };
</script>

<style>
    .el-row {
        margin-bottom: 20px;
    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
