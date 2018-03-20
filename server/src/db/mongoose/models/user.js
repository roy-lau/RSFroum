// 模型
var mongoose = require('../db.js')
var UserSchema = require('../schemas/user')
// 通过mongoose.model方法编译生成User这个模型
var User = mongoose.model('User', UserSchema)

module.exports = User