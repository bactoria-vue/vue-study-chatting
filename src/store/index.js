import Vue from 'vue';
import Vuex from 'vuex';

import chat from "./modules/chat"
import webtoon from "./modules/webtoon"
import state from "./state"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        chat,
        webtoon
    },
    state
});
