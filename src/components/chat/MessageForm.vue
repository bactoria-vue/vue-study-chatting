<template>
  <div class="text">
    <textarea placeholder="내용을 입력하세요." v-model="content" @keyup.enter.exact="sendMessage"></textarea>
  </div>
</template>

<script>
export default {
  name: 'MessageForm',
  data () {
        return {
            content: ''
        };
    },
  methods: {
      sendMessage() {
            this.$store.dispatch("messageAdd",{message: this.content})
            this.content = '';
      }
  }
};
</script>

<style lang="less" scoped>
.text {
    height: 20px;
    border-top: solid 1px #ddd;

    textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-family: "Micrsofot Yahei";
        resize: none;
    }
}
</style>
