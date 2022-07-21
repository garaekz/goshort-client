import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/HomePage.vue'
import About from '/src/pages/AboutPage.vue'
import Login from '/src/pages/LoginPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
  },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
