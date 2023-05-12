import { createRouter, createWebHistory } from 'vue-router'
import FirstView from '../views/FirstView.vue'
import SecondView from '../views/SecondView.vue';
import ThirdView from '../views/ThirdView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ThirdView
    }
  ]
})

export default router
