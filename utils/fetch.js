/* eslint-disable */
import axios from 'axios'
let baseURL = "https://pape.paquapp.com/education/";
import { Message } from 'element-ui';
const instance = axios.create({
  baseURL,
  timeout: 30000,
});
instance.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = 'Bearer '+ token  //请求头加上token
    }
    let params = {};
    if (config.method === 'get') {
      config.params = config.params || {};
      Object.assign(config.params, params)
    }
    if (config.method === 'post') {
      config.data = config.data || {};
      config.dataType = 'json';
    }
    if (config.method === 'delete') {
      config.data = config.data || {};
      config.dataType = 'json';
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
);

instance.interceptors.response.use(
  response => {
    if(response.data && response.data.code) {
      switch(response.data.code) {
        case 1:
          return Promise.resolve(response.data)
          break;
        case 40002:
          Message.error(response.data.msg);
          setTimeout(()=>{
            sessionStorage.clear();
            location.href = '/login'
          },1500)
          break;
        default:
          return Promise.reject(response.data)
      }
    }
  },
  error => {
    let errorMsg = '';
    if (error && error.code) {
      errorMsg = 'request timeout'
    }
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求';
          break;
        case 401:
          error.message = '未授权';
          break;
        case 403:
          error.message = '禁止访问';
          break;
        case 404:
          error.message = '未找到请求资源';
          break;
        case 500:
          error.message = '服务端错误';
          break;
        default:
          error.message = `请求错误：${error.response.status}`
      }
    } else {
      error.message = '请求发送失败'
    }
    errorMsg = error.response.data.msg;
    // errorMsg = '出错了，请稍后再试';
    return Promise.reject(errorMsg);
  }
);

export default instance
