import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/app',
    redirect: '/app/dashboard',
    component: () => import('../views/Dashboard'),
    children: [
      {
        path: '/app/dashboard',
        redirect: '/app/dashboard/home',
        component: () => import('../views/Menu/Menu'),
        children: [
          {
            path: '/app/dashboard/home',
            name: 'Menu',
            component: () => import('../views/Menu/Home')
          },
          {
            path: '/app/dashboard/addclaim',
            name: 'AddClaim',
            component: () => import('../views/Menu/AddClaim')
          },
          {
            path: '/app/dashboard/viewclaims',
            name: 'ViewClaims',
            component: () => import('../views/Menu/ViewClaims')
          },
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
