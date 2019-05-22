import {MESSAGE_ADD, MESSAGE_LOAD} from "../actions-type"
import {SET_MESSAGE} from "../mutations-type"
import {firestore} from "../../firestore/config"
import moment from "moment";


export const state = {
    message_list: []
}

export const actions = {
    [MESSAGE_LOAD](context) {
        firestore.collection("chat").orderBy("date", "asc").onSnapshot(function (querySnapshot) {
            var data = [];
            querySnapshot.forEach(function (doc) {
                data.push(doc.data());
            });
            context.commit(SET_MESSAGE, data);
        });
    },
    [MESSAGE_ADD](context, payload) {
        firestore.collection("chat").add({
            message: payload.message,
            date: moment().format('YYYY[-]MM[-]DD HH:mm:ss')
        })
    }
}

export const mutations = {
    [SET_MESSAGE](state, message) {
        state.message_list = message
    }
}

const getters = {
    message_list(state) {
        return state.message_list;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
