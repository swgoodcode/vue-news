import Vue from 'vue';
import VueRouter from "vue-router";
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";
//import createListView from "../views/CreateListView";
import NewsView from "../views/NewsView";
import JobsView from "../views/JobsView";
import AskView from "../views/AskView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
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