import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bible from '@/views/Bible.vue'
import Program from '@/views/Program.vue'
import Hymns from '@/views/Hymns.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bible',
      name: 'bible',
      alias: '/scripture',
      component: Bible
    },

    {
      path: '/program',
      name: 'program',
      component: Program
    },

    {
      path: '/hymn',
      name: 'hymns',
      component: Hymns
    }
  ],
})

export default router
