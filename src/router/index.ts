import { createRouter, createWebHistory } from 'vue-router'
import DottoListView from '../views/DottosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", 
      name: "dottos",
      component: DottoListView,
    }
  ],
})

export default router
