<template>
    <el-row>
        <el-radio-group v-model="selected" size="small">
                <el-radio-button v-for="weekday in weekdays" :label="weekday.value" style="margin: 0 5px;">
                    {{weekday.message}}
                </el-radio-button>
        </el-radio-group>
    </el-row>
</template>

<script>

    export default {
        name: "WeekSelector",
        data() {
            return {
                weekdays: [
                    {message: "월요일", value: "mon"},
                    {message: "화요일", value: "tue"},
                    {message: "수요일", value: "wed"},
                    {message: "목요일", value: "thu"},
                    {message: "금요일", value: "fri"},
                    {message: "토요일", value: "sat"},
                    {message: "일요일", value: "sun"}],
                selected: ''
            }
        },
        watch: {
            selected: 'setWeekday'
        },
        created() {
            const week = new Array('sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat');
            const today = new Date().getDay();
            this.selected = week[today]
            this.setWeekday(week[today])
        },
        methods: {
            setWeekday(weekday) {
                this.$store.commit('setWeekday', weekday)
            }
        }
    }
</script>

<style scoped>
    .el-button {
        text-align: center;
    }
</style>
