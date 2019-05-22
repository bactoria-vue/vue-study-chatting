<template>
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="webtoon in webtoons" align="center" style=" cursor: pointer;">
            <el-card :body-style="{ padding: '5px 0' }">
                <a :href="webtoon.link" target="_blank">
                    <div style="font-weight: bolder;">{{webtoon.name}}</div>
                    <img :src="webtoon.src" style="height: 120px;"/>
                </a>
            </el-card>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    import {mapGetters} from 'vuex'

    export default {
        name: "WebtoonList",
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            ...mapGetters(['webtoons','weekday'])
        },
        watch: {
           weekday: 'webtoonLoad'
        },
        created() {
            this.webtoonLoad();
        },
        methods: {
            webtoonLoad() {
                console.log("asd")
                this.$store.dispatch("webtoonLoad")
            }
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    slidesPerGroup: 4,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },

    }
</script>

<style scoped>
    a {
        text-decoration: none !important;
        color: #000;
    }
</style>
