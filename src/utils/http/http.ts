import axios from 'axios'
import { storage } from '@/utils/tools'
import { AUTH_TOKEN } from '@/constants/index'

const $http = axios.create({
  baseURL: $HOST,
  responseType: 'json',
  transformResponse: [function (data) {
    return data
  }],
  timeout: 30000
})

$http.interceptors.request.use(config => {
  // some config
  config.headers.common['Authorization'] = 'Bearer ' + storage.get(AUTH_TOKEN)
  return config
}, error => {
  return Promise.reject(error)
})

$http.interceptors.response.use(response => {
  return Promise.resolve(response.data) // status:200, normal
}, error => {
  return Promise.reject(error.response.data)
})

export default $http
