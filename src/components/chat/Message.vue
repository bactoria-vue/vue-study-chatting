<template>
    <div class="root">
        메시지
        <sub-title :title="title"/>
        <message-list/>
        <message-form/>
    </div>
</template>

<script>
    import MessageForm from "./MessageForm";
    import MessageList from "./MessageList";
    import SubTitle from "../SubTitle";

    export default {
        name: "Message",
        components: {SubTitle, MessageList, MessageForm},
        data() {
            return {
                title: '메시지'
            }
        }
    }
</script>

<style scoped>
    .root {
        height: 700px;
    }
</style>
