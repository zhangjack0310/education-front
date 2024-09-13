import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWord',
      component: Form
    },
    {
      path: '/1',
      name: 'Form',
      component: Form
    }
  ]
})
