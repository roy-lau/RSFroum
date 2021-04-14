// 模式——用户
const mongoose = require('mongoose'),
dayjs = require('dayjs')().format('YYYY-MM-DD HH:mm:ss')


const UserSchema = new mongoose.Schema({
    userName: { // 用户名
        type: String,
        minlength: 3,
        maxlength: 18,
    },
    pwd: { // 密码
        type: String,
        minlength: 3,
        maxlength: 66,
        required: true
    },
    email: { // 邮箱
        type: String,
        minlength: 3,
        maxlength: 36,
        required: true
    },
    phone: { // 手机号
        type: Number,
        minlength: 6,
        maxlength: 12
    },
    age: { // 年龄
        type: Number,
        min: 18, // 年龄最小18
        max: 120, // 年龄最大120
    },
    headImg: String,
    addr: String,
    ip: String,
    macAddr: String,
    createAt: { // 用户创建时间
        type: Date,
        default: dayjs
    },
    updateAt: { // 用户更新时间
        type: Date,
        default: dayjs
    }
})

// ========保存===========

// 保存前
UserSchema.pre('save', function(next) {
    // 判断数据是否是新添加的
    if (this.isNew) {
        // 如果是新添加的就将创建的时间和更新的时间设置为当前时间
        this.createAt = this.updateAt = dayjs
    } else {
        // 如果数据已经有了，就将更新时间设置为当前时间
        this.updateAt = dayjs
    }
    next()
})


UserSchema.statics = {
    /**
     * fatch: 这个方法用来取出数据库内所有的数据
     * @param {Function} cb 回调函数
     * @returns 
     */
    fetch(cb) {
        return this
            .find({})
            .sort('meta.updateAt') // 将数据内的数据按照更新时间排序
            .exec(cb)
    },
     /**
     * updateOne: 修改一条数据
     * @param {String} id 要更新的数据 id
     * @param {Object} data 更新的数据
     * @param {Function} cb 回调函数
     * @returns 
     */
    updateOne(id, data, cb) {
        if (id === undefined && id === null && id === '') throw new Error(`ID can't be empty`)
        if (data === undefined && data === null && data === '') throw new Error(`data can't be empty`)
        return this
            .findOneAndUpdate({ _id: id }, data)
            .exec(cb)
    },
    /**
     * findByPages: 分页
     * @param {Object} options 配置项
     * @param {Number} start 开始条数
     * @param {Number} pageSize 每页条数
     * @param {Function} cb 回调函数
     * @returns 
     */
    findByPages(options, start, pageSize, cb) {
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