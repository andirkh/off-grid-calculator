import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import SolarInvestment from '@/views/SolarInvestment'
import BuildSolar from '@/views/BuildSolar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/off-grid-investment',
      name: 'SolarInvestment',
      component: SolarInvestment
    },
    {
      path: '/build-solar-system',
      name: 'BuildSolar',
      component: BuildSolar
    }
  ]
})
