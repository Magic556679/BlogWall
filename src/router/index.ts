import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/fronted/FrontDesk.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/fronted/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/fronted/login/Index.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/fronted/login/Login.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
