import axios from '../utils/axios.js'

export const logins = (params) => {
  return axios.post('/bdpapi/v1/login', params)
}