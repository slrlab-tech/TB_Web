import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: "Tomorrow's Brain",
      meta: { path: 'home' },
      component: HomeView,
    },
    {
      path: '/components',
      name: 'Components',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComponentView.vue'),
    },
    {
      path: '/about',
      name: 'About Us',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products',
      name: 'Our Products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/products/:productId',
      name: 'Our Product',
      component: () => import('../views/ProductDetailView.vue'),
    },
  ],
})

export default router
