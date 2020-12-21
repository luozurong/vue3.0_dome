import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/pc/layout.vue')
    },
    {
      path: '/mobile',
      name: 'entry',
      component: () => import('@/views/mobile/entry.vue'),
      redirect: '/home',
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/mobile/Home.vue')
        },
        {
          path: '/product',
          name: 'product',
          component: () => import('@/views/mobile/product.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('@/views/mobile/cart.vue')
        },
        {
          path: '/mine',
          name: 'mine',
          component: () => import('@/views/mobile/mine.vue')
        }
      ]
    },
    {
      path: '/productDetail',
      component: () => import('@/views/mobile/productDetail.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/pc/login/index.vue')
    },
    {
      path: '/*',
      component: () => import('@/views/mobile/404.vue')
    }
  ]
})

export default router