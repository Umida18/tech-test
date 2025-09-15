import { defineStore } from 'pinia'
import axios from 'axios'

export const useEmployeeStore = defineStore('employee', {
    state: () => ({
        employees: [],
        total: 0,
        loading: false,
        error: null
    }),
    actions: {
        async fetchEmployees(page = 1, limit = 5) {
            this.loading = true
            try {
                const res = await axios.get(`http://localhost:3000/employees?_page=${page}&_limit=${limit}`)
                this.employees = res.data
                this.total = Number(res.headers['x-total-count'])
            } catch (err) {
                this.error = err
            } finally {
                this.loading = false
            }
        },
        async getEmployee(id) {
            this.loading = true
            try {
                const res = await axios.get(`http://localhost:3000/employees/${id}`)
                return res.data
            } catch (err) {
                this.error = err
            } finally {
                this.loading = false
            }
        }
    }
})
