// 模型
var mongoose = require('mongoose')
mongoose.Promise = global.Promise //需要
var uri = 'mongodb://139.199.99.154:27017/RSFroum_test';
mongoose.connection
  .openUri(uri)
  .once('open', async () => {
    console.log('database connect successed')
    // init admin information
    let userInfo = config.user
    userInfo.password = md5(userInfo.password)

    let user = await User.findOne({ role: 'superAdmin' }).exec()
    if (!user) {
      user = new User(userInfo)
      await user.save()
      console.log('Administrator information initialization succeeded')
    }
  })
  .on('error', (error) => {
    console.warn('数据库连接失败：', error)
})

var UserSchema = require('./schema')
// 通过mongoose.model方法编译生成User这个模型
var User = mongoose.model('User', UserSchema)

module.exports = User