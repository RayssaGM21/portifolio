import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContatoView from '../views/ContatoView.vue'
import HabilidadesView from '@/views/HabilidadesView.vue'
import SobreView from '../views/SobreView.vue'
import ProjetosView from '../views/ProjetosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView,
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContatoView,
    },
    {
      path: '/habilidades',
      name: 'habilidades',
      component: HabilidadesView,
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: ProjetosView,
    },
  ],
})

export default router
