/*
    发帖
*/

const mongoose = require('mongoose'),
    dayjs = require('dayjs')().format('YYYY-MM-DD HH:mm:ss')


const PostSchema = new mongoose.Schema({
    title: { // 标题
        type: String,
        minlength: 3,
        maxlength: 36,
        required: true
    },
    text: { // 正文
        type: String,
        minlength: 3,
        maxlength: 10000,
        required: true
    },
    type: { // 类型（通过菜单获取）
        type: String,
    },
    praise: { // 点赞数
        type: Number,
        default: 0
    },
    tread: { // 点踩数
        type: Number,
        default: 0
    },
    name: { // 用户名
        type: String,
        minlength: 3,
        maxlength: 18,
    },
    createAt: { // 发帖时间
        type: Date,
        default: dayjs
    },
    updateAt: { // 修改时间
        type: Date,
        default: dayjs
    }
})
// 保存前
PostSchema.pre('save', function (next) {
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
PostSchema.statics = {
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
        // 注意：start = (页数-1) * pageSize
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
    }
}
module.exports = PostSchema