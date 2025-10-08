import axios from 'axios'

let accessToken: string | null = null
let setContextAccessToken: ((token: string | null) => void) | null = null

export const setApiAccessToken = (token: string, updateContext?: boolean) => {
  accessToken = token
  if (updateContext && setContextAccessToken) {
    setContextAccessToken(token)
  }
}

export const registerContextSetter = (fn: (token: string | null) => void) => {
  setContextAccessToken = fn
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const refreshResponse = await axios.post(
          import.meta.env.VITE_API_URL + '/auth/refresh',
          {},
          { withCredentials: true }
        )

        const newAccessToken = refreshResponse.data.accessToken
        setApiAccessToken(newAccessToken)

        error.config.headers.Authorization = `Bearer ${newAccessToken}`
        return api.request(error.config)
      } catch (err) {
        console.error('Refresh token inválido, deslogando...')
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

export default api
