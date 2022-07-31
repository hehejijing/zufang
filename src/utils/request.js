import axios from "axios";
import store from "@/store"
const request = axios.create({
  baseURL: "http://liufusong.top:8080",
});


request.interceptors.request.use(
  function (config) {
    const token = store.state.tokenObj.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
export default request