import Vue from 'vue';
import VueRouter from "vue-router";
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";
//import createListView from "../views/CreateListView";
import NewsView from "../views/NewsView";
import JobsView from "../views/JobsView";
import AskView from "../views/AskView";
import bus from "../utils/bus";
import {store} from "../store/index";
import RouteMixin from "../mixins/RouteMixin";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'root',
            component: NewsView,
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            mixins:[RouteMixin],
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from ,next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from ,next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }
    ]
});