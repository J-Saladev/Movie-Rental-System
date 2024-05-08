import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/components/home-page.vue'
import addObject from '@/components/modules/add-object.vue'
import viewObject from '@/components/modules/view-object.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
       path: '/add/:section',
       name:'add',
       component: addObject
    },
    {
        path: '/view/:section',
        name:'view',
        component: viewObject
    }

   
 
  ]
})

export default router
