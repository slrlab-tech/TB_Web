import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: "Tomorrow's Brain",
      meta: { path: 'home' },
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'About Us',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/admin',
      name: 'Admin Area',
      component: () => import('../views/AdminView.vue'),
    },
    {
      path: '/RnD',
      name: 'R&D Area',
      component: () => import('../views/RnDAreaView.vue'),
    },
    {
      path: '/components',
      name: 'Components',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../__legacy/ComponentView.vue'),
    },
    {
      path: '/products',
      name: 'Our Products',
      component: () => import('../__legacy/ProductsView.vue'),
    },
  ],
})

export default router
