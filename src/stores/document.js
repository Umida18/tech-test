import { defineStore } from 'pinia'
import axios from 'axios'

export const useDocumentStore = defineStore('document', {
    state: () => ({
        documents: [],
        total: 0,
        loading: false,
        error: null
    }),
    actions: {
        async fetchDocuments(page = 1, limit = 5) {
            this.loading = true
            try {
                const res = await axios.get(`http://localhost:3000/documents?_page=${page}&_limit=${limit}`)
                this.documents = res.data
                this.total = Number(res.headers['x-total-count'])
            } catch (err) {
                this.error = err
            } finally {
                this.loading = false
            }
        },
        async getDocument(id) {
            this.loading = true
            try {
                const res = await axios.get(`http://localhost:3000/documents/${id}`)
                return res.data
            } catch (err) {
                this.error = err
            } finally {
                this.loading = false
            }
        }
    }
})
