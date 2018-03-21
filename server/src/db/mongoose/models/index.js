// 模型
const mongoose = require('../db.js')
const UserSchema = require('../schemas/user')
const MenuSchema = require('../schemas/menu')


// 通过mongoose.model方法编译生成User这个模型
// const User = mongoose.model('User', UserSchema)

module.exports = {
    User: mongoose.model('User', UserSchema),
    Menu: mongoose.model('Menu', MenuSchema)
}