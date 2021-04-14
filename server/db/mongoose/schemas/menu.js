// 模式
var mongoose = require('mongoose')
var MenuSchema = new mongoose.Schema({
    menuList: {
        type: Array,
    },
})

MenuSchema.statics = {
    fetch(cb) {
        return this
            .find({})
            .exec(cb)
    },
}
module.exports = MenuSchema