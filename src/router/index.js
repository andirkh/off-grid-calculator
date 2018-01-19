import Vue from 'vue'
import Router from 'vue-router'
import SolarEnergy from '@/components/SolarEnergy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SolarEnergy',
      component: SolarEnergy
    }
  ]
})
