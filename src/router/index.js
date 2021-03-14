import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Documents from "@/views/Documents";

import JobApplication from "@/modules/documents/JobApplication";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/documents',
    name: 'Documents',
    component: Documents,
    children: [
      {
        path: 'job-application',
        name: 'JobApplication',
        component: JobApplication
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
