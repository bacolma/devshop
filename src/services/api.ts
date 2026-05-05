import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
})


api.interceptors.request.use((config) => {
  const raw = localStorage.getItem('devshop:token')
  const token = raw ? JSON.parse(raw) : null

  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})


api.interceptors.response.use(response => response,
  error => {
    if(error.response?.status === 401) {
      localStorage.removeItem('devshop:token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)