import { createRouter, createWebHashHistory } from 'vue-router';
import FrontDesk from '../views/fronted/FrontDesk.vue'
import Home from '../views/fronted/Home.vue'
import LoginHome from '../views/fronted/login/Index.vue'
import Login from '../views/fronted/login/Login.vue'

const routes = [
  {
    path: '/',
    component: FrontDesk,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: '/login',
    component: LoginHome,
    children: [
      {
        path: '',
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
