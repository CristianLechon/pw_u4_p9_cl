import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      requiereAutorizacion: false,
      esPublica: false
    }
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: () => import('../views/GuardarView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/listarTodos',
    name: 'listarTodos',
    component: () => import('../views/ListarTodosView.vue'),
    meta: {
      requiereAutorizacion: false,
      esPublica: false
    }
  },
  {
    path: '/consultarId',
    name: 'consultarId',
    component: () => import('../views/ConsultarIdView.vue'),
    meta: {
      requiereAutorizacion: false,
      esPublica: false
    }
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: () => import('../views/ActualizarView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/actualizarParcial',
    name: 'actualizarParcial',
    component: () => import('../views/ActualizarParcialView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/eliminar',
    name: 'eliminar',
    component: () => import('../views/EliminarView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* Configuracion del Guardian */
//to es a la pagina que quiero acceder
//from desde que pagina vengo 
//next es una variable que me permite decir si le permito ir a la pagina o lo redireccion
router.beforeEach((to, from, next) => {
  if (to.meta.requiereAutorizacion) {
    /* le envio a una pagina de login */
    const estaAutenticado = localStorage.getItem("estaAutenticado");
    const token = localStorage.getItem("token");

    if (!estaAutenticado) {
      console.log("Redirige a Login");
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    /* le dejo pasar sin validacion */
    console.log("Pase Libre");
    next(); // siga
  }
})

export default router
