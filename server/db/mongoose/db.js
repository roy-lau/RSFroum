const mongoose = require('mongoose'),
  options = {
    user: 'admin',
    pwd: '123456',
    host: '139.199.99.154',
    port: '27017',
    database: 'RSFroum_test',
    authSource: 'admin',
  },
  uri = `mongodb://139.199.99.154:27017/RSFroum_test`;
// uri = `mongodb://${options.user}:${options.pwd}@${options.host}:${options.port}/${options.database}?authSource=${options.authSource}`;

mongoose.Promise = global.Promise //需要
mongoose.connection
  .openUri(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .once('open', () => {
    console.log('数据库连接成功！')
  })
  .on('error', (error) => {
    console.warn('数据库连接失败：', error)
  })
module.exports = mongoose