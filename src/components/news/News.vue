<template>
    <div class="root">
        <sub-title :title="title"/>
        <news-list/>
    </div>
</template>

<script>
    import SubTitle from "../SubTitle";
    import NewsList from "./NewsList";

    export default {
        name: "News",
        components: {NewsList, SubTitle},
        data() {
            return {
                title:"뉴스"
            }
        }
    }
</script>

<style scoped>
    .root {
        height: 300px;
    }
</style>
