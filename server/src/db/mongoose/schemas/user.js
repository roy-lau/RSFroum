// 模式
var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 18,
    },
    pwd: {
        type: String,
        minlength: 3,
        maxlength: 18,
        required: true
    },
    email: {
        type: String,
        minlength: 3,
        maxlength: 36,
        required: true
    },
    phone: {
        type: Number,
        min: 6,
        max: 12
    },
    age: {
        type: Number,
        min: 18, //年龄最小18
        max: 120, //年龄最大120
    },
    addr: String,
    ip: String,
    mac_addr: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

// ========保存===========

// 保存前
UserSchema.pre('save', function(next) {
    // 判断数据是否是新添加的
    if (this.isNew) {
        // 如果是新添加的就将创建的时间和更新的时间设置为当前时间
        this.createAt = this.updateAt = Date.now()
    } else {
        // 如果数据已经有了，就将更新时间设置为当前时间
        this.updateAt = Date.now()
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
    },
    // findByPages: 分页
    findByPages: function(options, start, pageSize, cb) {
        return this
            .find(options)
            .skip(start)
            .limit(pageSize)
            .sort('meta.updateAt')
            .exec(cb)
        // 注意：start = (页数-1)*pageSize
    }
}
module.exports = UserSchema