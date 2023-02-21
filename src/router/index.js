import { createRouter, createWebHistory } from "vue-router";
import HomepageView from '../views/HomepageView.vue';
import DetailsView from '../views/DetailsView.vue';
import Bookmarks from '../views/BookmarksView.vue';
import LoginView from '../views/LoginViews.vue';
import RegisterView from '../views/RegisterView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
        path: '/',
        name: 'home',
        component: HomepageView
        },

        {
            path: '/details/:detailsid',
            name: 'details',
            component: DetailsView

        },

        {
            path: '/bookmarks',
            name: 'bookmarks',
            component: Bookmarks
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },

        {
            path: '/register',
            name: 'register',
            component: RegisterView
        }

    ]
});
export default router;