const axios = require('axios'),
  base_url = 'http://127.0.0.1:3000/',
  instance = axios.create({
    baseURL: base_url,
    // timeout: 100 * 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

/**
 * 请求函数
 * @param  {Object} config
 * @return {Object} config: 处理后的配置，error: 错误信息
 */
instance.interceptors.request.use(config => {
  // if (token) config.headers['Authorization'] = 'Basic ' + token;

  return config;
}, error => {
  console.error('[Axios request catch error info] - '+ error);
  // return Promise.reject(error)
});

/**
 * 响应函数
 * @param  {Object} res 响应
 * @return {Object} data：处理过的数据, error：错误信息
 */
instance.interceptors.response.use(res => {
  return res;
}, error => {
  console.error(`[Axios response ${error.request._currentUrl} ] - ${error}`);
  // return Promise.reject(error)
});

module.exports = instance