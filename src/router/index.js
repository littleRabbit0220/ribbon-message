import { createRouter, createWebHistory } from 'vue-router'
import { Question_One, Question_Two, Question_Three, Question_Four } from '../views/question'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Question_One
    }
  ]
})

export default router
