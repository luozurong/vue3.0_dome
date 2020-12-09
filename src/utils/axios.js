import axios from 'axios'
// import config from '../../config/index';
const service = axios.create({
  // baseURL : config.DOMAIN_MAP[process.env.NODE_ENV],
  timeout : 15000,
  withCredentials: true
})
axios.defaults.withCredentials = true
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.resolve(err)
  }
)

service.interceptors.response.use(
  res => {
    console.log(res)
    return Promise.resolve(res)
  }
)

export default service