//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../views/Index.vue')
    },
    {
        path: '/tags',
        name: 'tags.index',
        component: () => import( /* webpackChunkName: "post.index" */ '../views/tags/Index.vue')
    },
    {
        path: '/tags/create',
        name: 'tags.create',
        component: () => import( /* webpackChunkName: "post.create" */ '../views/tags/Create.vue')
    },
    {
        path: '/tags/edit/:id',
        name: 'tags.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '../views/tags/Edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router