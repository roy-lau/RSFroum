/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/pages'
        },
        {
            path: '/pages',
            name: '文章列表',
            component: () => import( /* webpackChunkName: "pages" */ '@/views/pages')
        },{
            path: '/page',
            name: '文章',
            component: () => import( /* webpackChunkName: "page" */ '@/views/page')
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
        //   redirect: '/layout/pages',
        //   children: [{
        //     path: 'pages',
        //     name: '文章列表',
        //     component: pages,
        //   }],
        // }
    ]
})