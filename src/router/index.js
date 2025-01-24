import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/homeview.vue'
import Order from '@/views/order/orderview.vue'
import Mine from '@/views/mine/mineview.vue'
import Cart from '@/views/cart/cartview.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/order', component: Order },
        { path: '/mine', component: Mine },
        { path: '/cart', component: Cart },
    ],
})

export default router
