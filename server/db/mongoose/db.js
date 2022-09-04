const mongoose = require('mongoose');
const crypto = require('crypto');
function decipher(str, key, iv){
  try {
    const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    return decipher.update(str, 'hex', 'utf8') + decipher.final('utf8');
  } catch(err) {
    console.error('解密失败');
    return err.message || err;
  }
};

const uri = decipher('f9285c9a70f94bacc7fcc9a497bd2dabf0dbe9ea3f5c0f6ae6fcd4994714408355e6472720a81b9863049275979a127b','key-roy3.1415926','roylau-3.1415926')+'RSFroum_test?authSource=admin'

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
