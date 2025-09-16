import api from './axios'
export async function fetchEmployees(page = 1, limit = 10, q = '') {
    const res = await api.get('/employees', { params: { _page: page, _limit: limit, q } })
    return { data: res.data, total: parseInt(res.headers['x-total-count'] || '0', 10) }
}
export const getEmployee = id => api.get(`/employees/${id}`)
