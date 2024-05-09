import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './store/auth';
import LoginView from './views/LoginView.vue';
import HomeView from './views/HomeView.vue';
import ConfigView from './views/ConfigView.vue';
import UserView from './views/UserView.vue';

const router = createRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: { requiresAuth: false } // No requiere autenticación
        },
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { requiresAuth: true } // Requiere autenticación
        },
        {
            path: '/config',
            name: 'Configuración',
            component: ConfigView,
            meta: { requiresAuth: true }
        },
        {
            path: '/user',
            name: 'user',
            component: UserView,
            meta: { requiresAuth: true }
        }
        // ... otras rutas
    ],
    history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        if (to.name !== 'login') {
          next({ name: 'login' });
        } else {
          next(); // Si ya está en la ruta de login, no hagas nada
        }
      } else if (to.name === 'login' && authStore.isAuthenticated) {
        // Si el usuario está autenticado y trata de visitar la ruta de login, redirige a home
        next({ name: 'home' });
      } else {
        // En cualquier otro caso, permite el acceso a la ruta
        next();
      }
});

export default router;