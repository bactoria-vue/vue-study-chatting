<template>
    <div class="root">
        <sub-title :title="title"/>
        <week-selector/>
        <webtoon-list/>
    </div>
</template>

<script>
    import SubTitle from "../SubTitle";
    import WebtoonList from "./WebtoonList";
    import WeekSelector from "./WeekSelector";

    export default {
        name: "Webtoon",
        components: {WeekSelector, WebtoonList, SubTitle},
        data() {
            return {
                title: "웹툰"
            }
        }
    }
</script>

<style scoped>
    .root {
        height: 300px;
        padding: 10px;
    }
</style>
