import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'entry',
      component: () => import('@/views/entry.vue'),
      redirect: '/home',
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
    },
    {
      path: '/productDetail',
      component: () => import('@/views/productDetail.vue')
    },
    {
      path: '/*',
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router