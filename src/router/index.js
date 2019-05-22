import Vue from "vue";
import Router from "vue-router";
import store from '../store'

Vue.use(Router);

const requireAuth = () => (from, to, next) => {
    console.log(store.state.accessToken + "응");

    !!store.state.accessToken ?
        next() :
        next(`/login?returnPath=${encodeURIComponent(from.path)}`)
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: () => import("../views/Home"),
            beforeEnter: requireAuth()
        },
        {
            path: "/login",
            component: () => import("../views/Login")
        }

    ]
})
