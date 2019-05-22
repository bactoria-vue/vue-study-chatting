import {WEBTOON_LOAD} from "../actions-type"
import {SET_WEBTOONS, SET_WEEKDAY, CLEAR_WEBTOONS} from "../mutations-type"

import {firestore} from "../../firestore/config"

export const state = {
    webtoons: [],
    weekday: ''
}

export const actions = {
    [WEBTOON_LOAD]({commit, state}) {
        commit(CLEAR_WEBTOONS);
        firestore.collection('webtoon').doc(state.weekday).collection(state.weekday).onSnapshot(function(querySnapshot) {
            var data = [];
            querySnapshot.forEach(doc => data.push(doc.data()));
            commit(SET_WEBTOONS, data);
        });
    }
}

export const mutations = {
    [SET_WEBTOONS](state, webtoons) {
        state.webtoons = webtoons
    },
    [CLEAR_WEBTOONS](state) {
        state.webtoons = []
    },
    [SET_WEEKDAY](state, weekday) {
        state.weekday = weekday
    }
}

const getters = {
    webtoons(state) {
        return state.webtoons
    },
    weekday(state) {
        return state.weekday
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
