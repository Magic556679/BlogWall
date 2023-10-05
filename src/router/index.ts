import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/fronted/Frontdesk.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/fronted/Home.vue'),
      },
      {
        path: 'posts',
        component: () => import('@/views/fronted/posts/CreatePosts.vue'),
      },
      {
        path: 'user',
        component: () => import('@/views/fronted/user/User.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/fronted/login/Index.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/fronted/login/Login.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/fronted/login/Register.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/fronted/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/BlogWall/'),
  routes,
});

export default router;
