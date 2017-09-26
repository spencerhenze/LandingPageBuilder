import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume'
import Skills from '../components/Skills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    }
  ]
})
