import { createRouter, createWebHistory } from 'vue-router'
import { Question_One, Question_Two, Question_Three, Question_Four, Question_Four_Continue } from '../views/question';
import Upbeat from '../views/question/Upbeat.vue';
import Home from '../views/Home.vue';
import Generate from '../views/Generate.vue';
import Done from '../views/Done.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  base: '/questions/1',
  routes: [
    {
      paht: '/',
      name: "Home",
      component: Home,
    },
    {
      path: '/questions/1',
      name: 'question1',
      component: Question_One
    },
    {
      path: '/questions/2',
      name: 'question2',
      component: Question_Two
    },
    {
      path: '/questions/3/upbeat',
      name: 'upbeat',
      component: Upbeat,
    },
    {
      path: '/questions/3',
      name: 'question3',
      component: Question_Three
    },
    {
      path: '/questions/4',
      name: 'question4',
      component: Question_Four
    },
    {
      path: '/questions/4/continue',
      name: 'questionfourcontinue',
      component: Question_Four_Continue
    },
    {
      path: '/generate',
      name: 'generate',
      component: Generate
    },
    {
      path: '/done',
      name: 'done',
      component: Done
    }
  ]
})

export default router
