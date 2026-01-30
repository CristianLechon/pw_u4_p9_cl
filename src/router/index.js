import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: () => import('../views/GuardarView.vue')
  },
  {
    path: '/listarTodos',
    name: 'listarTodos',
    component: () => import('../views/ListarTodosView.vue')
  },
  {
    path: '/consultarId',
    name: 'consultarId',
    component: () => import('../views/ConsultarIdView.vue')
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: () => import('../views/ActualizarView.vue')
  },
  {
    path: '/actualizarParcial',
    name: 'actualizarParcial',
    component: () => import('../views/ActualizarParcialView.vue')
  },
  {
    path: '/eliminar',
    name: 'eliminar',
    component: () => import('../views/EliminarView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
