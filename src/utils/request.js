import axios from 'axios'

let Axios = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: '',
  timeout: 30000
})

Axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default Axios
