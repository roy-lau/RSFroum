/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/hot'
        },
        {
            path: '/hot',
            name: '最火',
            component: () => import( /* webpackChunkName: "hot" */ '@/views/hot')
        },
        {
            path: '/post',
            name: '发帖',
            component: () => import( /* webpackChunkName: "post" */ '@/views/post')
        },
        {
            path: '*',
            component: () => import( /* webpackChunkName: "errorPage" */ '@/views/errorPage')
        }
        // {
        //   path: '/test',
        //   name: 'test',
        //   component: test
        // }, {
        //   path: '/layout',
        //   name: 'layout',
        //   component: layout,
        //   redirect: '/layout/hot',
        //   children: [{
        //     path: 'hot',
        //     name: '最火',
        //     component: hot,
        //   }],
        // }
    ]
})