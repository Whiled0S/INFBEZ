import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Documents from "@/views/Documents";

import JobApplication from "@/modules/documents/JobApplication";
import EmploymentOrder from "@/modules/documents/EmploymentOrder";
import JobTransfer from "@/modules/documents/JobTransfer";
import ResignationApplication from "@/modules/documents/ResignationApplication";
import VacationApplication from "@/modules/documents/VacationApplication";

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
        path: 'employment-order',
        name: 'EmploymentOrder',
        component: EmploymentOrder
      },
      {
        path: 'job-application',
        name: 'JobApplication',
        component: JobApplication
      },
      {
        path: 'job-transfer',
        name: 'JobTransfer',
        component: JobTransfer
      },
      {
        path: 'resignation-application',
        name: 'ResignationApplication',
        component: ResignationApplication
      },
      {
        path: 'vacation-application',
        name: 'VacationApplication',
        component: VacationApplication
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
