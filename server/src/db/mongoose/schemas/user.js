// 模式
var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
var UserSchema = new mongoose.Schema({
    name: { type: String, min: 6, max: 36, }, // 名字
    meta: { // 更新日期
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

// ========保存===========

UserSchema.pre('save', function(next) {
    // 判断数据是否是新添加的
    if (this.isNew) {
        // 如果是新添加的就将创建的时间和更新的时间设置为当前时间
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        // 如果数据已经有了，就将更新时间设置为当前时间
        this.meta.updateAt = Date.now()
    }
    next()
})

UserSchema.statics = {
    // fatch: 这个方法用来取出数据库内所有的数据
    // 将数据内的数据按照更新时间排序
    fetch: function(cb) {
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    // findById: 查找一条数据
    findById: function(id, cb) {
        return this
            .findOne({ _id: id })
            .exec(cb)
    }
}
module.exports = UserSchema