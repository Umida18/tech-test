import api from './axios'
export async function fetchEDocuments(page = 1, limit = 10, q = '') {
    const res = await api.get('/documents', { params: { _page: page, _limit: limit, q } })
    return { data: res.data, total: parseInt(res.headers['x-total-count'] || '0', 10) }
}
export const getDocument = id => api.get(`/documents/${id}`)
export const createDocument = payload => api.post('/documents', payload)
export const updateDocument = (id, payload) => api.put(`/documents/${id}`, payload)
export const deleteDocument = id => api.delete(`/documents/${id}`)
