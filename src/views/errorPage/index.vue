<template>
  <div style="height:100%;">
    <div class="wscn-httperr">
      <div class="pic-err">
        <img class="pic-err__parent" :src="img_err" alt="err">
        <img class="pic-err__child left" :src="img_err_cloud" alt="err">
        <img class="pic-err__child mid" :src="img_err_cloud" alt="err">
        <img class="pic-err__child right" :src="img_err_cloud" alt="err">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops"> OOPS ! </div><br />
        <div class="bullshit__headline">发现错误 （ ERR: {{ errCode }} ）...... </div><br />
        <div class="bullshit__info">{{ message }}</div>
        <a href="/" class="bullshit__return-home">重新登录</a>
      </div>
    </div>
  </div>
</template>
<script>
import img_err from './401.gif'
import img_err_cloud from './err_cloud.png'

export default {
  name: 'pageerr',
  data() {
    return {
      img_err,
      img_err_cloud
    }
  },
  computed: {
    errCode() {
      return this.$route.query.id || 404;
    },
    message(){
      const httpErrorCodeObj = {
        400: '(400 Bad Request) 客户端请语法错误 !',
        401: '(401 Unauthorized) 身份认证失败，请重新登录 !',
        402: '(402 Payment Required) 保留，将来使用 !',
        403: '(403 Forbidden) 服务器理解请求客户端的请求，但是拒绝执行此请求 !',
        404: '(404 Not Found) 网络错误，或者没有这个页面，请重新登录 !',
        405: '(405 Method Not Allowed) 客户端请求中的方法被禁止 !',
        406: '(406 Not Acceptable) 服务器无法根据客户端请求的内容特性完成请求 !',
        407: '(407 Proxy Authentication Required) 请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权 !',
        408: '(408 Request Time-out) 服务器等待客户端发送的请求时间过长，超时 !',
        409: '(409 Conflict) 服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突 !',
        410: '(410 Gone) 客户端请求的资源已经不存在 !',
        411: '(411 Length Required) 服务器无法处理客户端发送的不带Content-Length的请求信息 !',
        412: '(412 Precondition Failed) 客户端请求信息的先决条件错误 !',
        413: '(413 Request Entity Too Large) 由于请求的实体过大，服务器无法处理 !',
        414: '(414 Request-URI Too Large) 请求的URI过长（URI通常为网址），服务器无法处理 !',
        415: '(415 Unsupported Media Type) 服务器无法处理请求附带的媒体格式 !',
        416: '(416 Requested range not satisfiable) 客户端请求的范围无效 !',
        417: '(417 Expectation Failed) 服务器无法满足Expect的请求头信息 !',
        500: '(500 Internal Server Error) 服务器内部错误，无法完成请求 !',
        501: '(501 Not Implemented) 服务器不支持请求的功能，无法完成请求 !',
        502: '(502 Bad Gateway) 充当网关或代理的服务器，从远端服务器接收到了一个无效的请求 !',
        503: '(503 Service Unavailable) 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中 !',
        504: '(504 Gateway Time-out) 充当网关或代理的服务器，未及时从远端服务器获取请求 !',
        505: '(505 HTTP Version not supported) 服务器不支持请求的HTTP协议的版本，无法完成处理 !',
      }
      return httpErrorCodeObj[this.$route.query.id || 404]
    }
  }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
.wscn-httperr {
  width: 1200px;
  margin: 80px auto;
  overflow: hidden;
  .pic-err {
    position: relative;
    float: left;
    overflow: hidden;
    &__parent {
      width: 100%;
    }
    &__child {
      position: absolute;
      &.left {
        width: 80px;
        top: 17px;
        left: 220px;
        opacity: 0;
        animation-name: cloudLeft;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }
      &.mid {
        width: 46px;
        top: 10px;
        left: 420px;
        opacity: 0;
        animation-name: cloudMid;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
      }
      &.right {
        width: 62px;
        top: 100px;
        left: 500px;
        opacity: 0;
        animation-name: cloudRight;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }
      @keyframes cloudLeft {
        0% {
          top: 17px;
          left: 220px;
          opacity: 0;
        }
        20% {
          top: 33px;
          left: 188px;
          opacity: 1;
        }
        80% {
          top: 81px;
          left: 92px;
          opacity: 1;
        }
        100% {
          top: 97px;
          left: 60px;
          opacity: 0;
        }
      }
      @keyframes cloudMid {
        0% {
          top: 10px;
          left: 420px;
          opacity: 0;
        }
        20% {
          top: 40px;
          left: 360px;
          opacity: 1;
        }
        70% {
          top: 130px;
          left: 180px;
          opacity: 1;
        }
        100% {
          top: 160px;
          left: 120px;
          opacity: 0;
        }
      }
      @keyframes cloudRight {
        0% {
          top: 100px;
          left: 500px;
          opacity: 0;
        }
        20% {
          top: 120px;
          left: 460px;
          opacity: 1;
        }
        80% {
          top: 180px;
          left: 340px;
          opacity: 1;
        }
        100% {
          top: 200px;
          left: 300px;
          opacity: 0;
        }
      }
    }
  }
  .bullshit {
    position: relative;
    float: left;
    width: 300px;
    padding: 100px 0;
    overflow: hidden;
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>