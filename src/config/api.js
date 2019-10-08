import axios from 'axios'
// import { Message } from 'element-ui';
import router from '@/router'

const instance = axios.create({
  baseURL:  "http://localhost:3001",
  timeout: 100 * 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

/**
 * 请求函数
 * @param  {Object} config
 * @return {Object} config:处理后的配置，error:错误信息
 */
instance.interceptors.request.use(config => {
  let token = sessionStorage.getItem('TOKEN');
    if (token) {
        // Authentication
        config.headers['authorization'] = 'Bearer ' + token;
    }
  return config;
}, error => {
  const { status } = error.response || {};
  console.log('error_req:', status)
  if (status) {
    router.push({ path: '/errPage', query: { id: status } })
  }
  return Promise.reject(error)
});

/**
 * 响应函数
 * @param  {Object} res 响应
 * @return {Object} data：处理过的数据, error：错误信息
 */
instance.interceptors.response.use(res => {
  console.log('%c' + JSON.stringify(res.data, censor(), 4), `background:${getColor()};font-size:1.3em`)
  if (res && res.data.Code === "001") {
    return res.data;
  } else {
    // Message({ showClose: true, message: res.data.Msg, type: 'info' });
    return res.data;
  }
}, error => {
  const { status } = error.response || {};
  console.log(error)
  console.log('error_res:', status)
  if (status) {
    router.push({ path: '/errPage', query: { id: status } })
  }
  return Promise.reject(error)
});

export default instance

/**
 * 定义一个函数，实现随机生成十六进制颜色值
 * @return {String} color
 */
function getColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"][Math.floor(Math.random() * 16)]
  }
  return color;
}

function censor(key, value) {
  if (typeof(value) == 'function') {
    return Function.prototype.toString.call(value)
  }
  return value;
}