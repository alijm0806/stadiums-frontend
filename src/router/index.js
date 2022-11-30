import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StadiumsIndexView from "../views/StadiumsIndexView.vue";
import StadiumsNewView from "../views/StadiumsNewView.vue";
import StadiumsShowView from "../views/StadiumsShowView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: "/stadiums",
    name: "stadiums-index",
    component: StadiumsIndexView
  },
  {
    path: "/stadiums/new",
    name: "stadiums-new",
    component: StadiumsNewView
  },
  {
    path: "/stadiums/:id",
    name: "stadiums-show",
    component: StadiumsShowView
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView
  },
  {
    path: "/",
    name: "login",
    component: LoginView
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
