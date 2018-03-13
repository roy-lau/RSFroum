import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const hot = () => import ('@/components/hot')


// const test = () =>
  // import ('@/base/test/chart-test')

export default new Router({
  routes: [{
      path: '/',
      redirect: '/hot'
    },
    {
      path: '/hot',
      name: '最火',
      component: hot
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
