import DocumentDetail from '@/pages/DocumentDetail.vue'
import DocumentsList from '@/pages/DocumentsList.vue'
import EmployeeDetail from '@/pages/EmployeeDetail.vue'
import EmployeesList from '@/pages/EmployeesList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/employees' },
    { path: '/employees', name: 'Employees', component: EmployeesList },
    { path: '/employees/:id', name: 'EmployeeDetail', component: EmployeeDetail, props: true },
    { path: '/documents', name: 'Documents', component: DocumentsList },
    { path: '/documents/:id', name: 'DocumentDetail', component: DocumentDetail, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
