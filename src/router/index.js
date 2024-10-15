import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'
import Form1 from '@/components/Form1'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form1
    },
    {
      path: '/admin',
      name: 'index',
      component: index,
      meta: {
        title: 'PTS管理后台'
      },
      children: [
        {
          path: '/index',
          name: 'hello',
          component: HelloWorld,
          meta: {
            title: 'PTS管理后台'
          }
        },
        {
          path: '/brand',
          name: 'brand',
          component: HelloWorld,
          meta: {
            title: '展商'
          }
        },

      ]
    }
  ]
})
