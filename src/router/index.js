import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import GreetingView from '@/views/GreetingView.vue'
import HomeView from '@/views/HomeView.vue'
import InstructionView from '@/views/InstructionView.vue'
import { checkAuth } from '@/utils/cookie.utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      component: HomeView,
      path: '/',
    },
    {
      name: 'Greeting',
      path: '/greeting',
      component: GreetingView,
    },
    {
      name: 'Login',
      path: '/auth/login',
      component: LoginView
    },
    {
      name: 'Register',
      path: '/auth/register',
      component: RegisterView,
    },
    {
      name: 'Instruction',
      path: '/instruction',
      component: InstructionView,
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (!checkAuth()) {
    if (to.name == "Greeting" || to.name == "Login" || to.name == "Register") {
      next();
    } else {
      router.push('/greeting');
    }
  } else next();
});

export default router;
