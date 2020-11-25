import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/entry.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/product',
          name: 'product',
          component: () => import('@/views/product.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('@/views/cart.vue')
        },
        {
          path: '/mine',
          name: 'mine',
          component: () => import('@/views/mine.vue')
        }
      ]
    }
  ]
})

export default router