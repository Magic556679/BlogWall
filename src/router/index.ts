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
      {
        path: 'posts',
        component: () => import('@/views/fronted/posts/CreatePosts.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/fronted/login/Index.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('../views/fronted/login/Login.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/fronted/login/Register.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
