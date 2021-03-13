import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.access_token
  if (isAuth) {
    store.commit('setLogin', true)
  } else {
    store.commit('setLogin', false)
  }
  if ((to.name === 'Login') && isAuth) {
    next({ name: 'Home' })
  } else if (!isAuth && (to.name === 'Home')) next({ name: 'Login' })
  else next()
})

export default router
