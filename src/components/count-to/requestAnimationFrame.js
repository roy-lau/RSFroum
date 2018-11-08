let lastTime = 0
const prefixes = 'webkit moz ms o'.split(' ') // 各浏览器前缀

// window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器调用指定的函数在下一次重绘之前更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。
let requestAnimationFrame
// 取消一个先前通过调用window.requestAnimationFrame()方法添加到计划中的动画帧请求.
let cancelAnimationFrame

const isServer = typeof window === 'undefined'
if (isServer) {
  requestAnimationFrame = function() {
    return
  }
  cancelAnimationFrame = function() {
    return
  }
} else {
  requestAnimationFrame = window.requestAnimationFrame
  cancelAnimationFrame = window.cancelAnimationFrame
  let prefix
    // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
  for (let i = 0; i < prefixes.length; i++) {
    if (requestAnimationFrame && cancelAnimationFrame) { break }
    prefix = prefixes[i]
    requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame']
    cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']
  }

  // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function(callback) {
      const currTime = new Date().getTime()
      // 为了使setTimteout的尽可能的接近每秒60帧的效果
      const timeToCall = Math.max(0, 16 - (currTime - lastTime))
      const id = window.setTimeout(() => {
        callback(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }

    cancelAnimationFrame = function(id) {
      window.clearTimeout(id)
    }
  }
}

export { requestAnimationFrame, cancelAnimationFrame }