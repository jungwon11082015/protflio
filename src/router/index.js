import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Works from '@/components/Works'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Main',
      component: Main,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works,
    },
    {
      path: '/Content',
      name: 'Content',
      component: Content,
    }
  ]
})
