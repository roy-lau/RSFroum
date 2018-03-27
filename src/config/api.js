import axios from 'axios'

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// 请求
instance.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error)
});

// 接收
instance.interceptors.response.use(res => {
    console.log('%c' + JSON.stringify(res.data, censor(), 4), `background:${getColor()};font-size:1.3em`)
    if (res && res.data.errNo === 0) {
        return res.data;
    } else {
        alert(res.data.massage)
        return res.data;
    }
}, error => {
    alert("接口调用失败" + error)
    return Promise.reject(error)
});

export default instance

/*
    定义一个函数，实现随机生成十六进制颜色值
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