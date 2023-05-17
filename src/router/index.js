import { createRouter, createWebHistory } from 'vue-router'
import { Question_One, Question_Two, Question_Three, Question_Four } from '../views/question';
import Draft2 from '../views/question/Draft2.vue';
import Draft3 from '../views/question/Draft3.vue';
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
      component: Question_One,
    },
    {
      path: '/questions/2',
      name: 'question2',
      component: Question_Two,
      props: (route) => ({ question1: route.query.question1})
    },
    {
      path: '/questions/3/draft2/:question',
      name: 'draft2',
      component: Draft2,
    },
    {
      path: '/questions/3',
      name: 'question3',
      component: Question_Three,
    },
    {
      path: '/questions/4',
      name: 'question4',
      component: Question_Four
    },
    {
      path: '/questions/4/draft3/:selected',
      name: 'draft3',
      component: Draft3
    },
    {
      path: '/generate_three_version',
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
