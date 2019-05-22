<template>
    <div class="message" v-on:click="scrollToEnd">
        <ul v-if="message_list.length">
            <li v-for="data in message_list">
                <div class="main">
                    <div class="text">{{data.message}}</div>
                    <div class="date">{{data.date}}</div>
                </div>
            </li>
        </ul>
        <div v-else>메세지가 없습니다.</div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {

    name: 'MessageList',
    created() {
        this.$store.dispatch("messageLoad")
    },
    beforeUpdate() {
        this.scrollToEnd();
    },
    updated() {
        this.scrollToEnd();
    },
    methods: {
        scrollToEnd() {
            var container = document.querySelector(".message");
            container.scrollTop = container.scrollHeight;
        }
    },
    computed: {
        ...mapGetters(['message_list'])
    },

};
</script>

<style lang="less" scoped>
.message {
    height: 580px;
    overflow-y: scroll;
    padding: 10px 15px;
    overflow-y: scroll;

    li {
        margin-bottom: 15px;
    }
    .time {
        margin: 7px 0;
        text-align: center;

        > span {
            display: inline-block;
            padding: 0 18px;
            font-size: 12px;
            color: #fff;
            border-radius: 2px;
            background-color: #dcdcdc;
        }
    }
    .avatar {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: ~'calc(100% - 40px)';
        min-height: 30px;
        line-height: 2.5;
        font-size: 12px;
        text-align: left;
        word-break: break-all;
        background-color: #fafafa;
        border-radius: 4px;
        &:before {
            content: " ";
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: #fafafa;
        }
    }

    .date {
        padding: 0 10px;
        min-height: 30px;
        line-height: 2.5;
        font-size: 8px;
        text-align: left;
        word-break: break-all;
        border-radius: 4px;
        width: 33%;
    }

    .self {
        text-align: right;

        .avatar {
            float: right;
            margin: 0 0 0 10px;
        }
        .text {
            background-color: #b2e281;

            &:before {
                right: inherit;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #b2e281;
            }
        }
    }
}
</style>
