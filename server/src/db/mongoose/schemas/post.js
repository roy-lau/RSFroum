/*
	发帖
*/

var mongoose = require('mongoose')
var PostSchema = new mongoose.Schema({
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
    praise: {// 点赞数
    	type: Number,
    	default: 0
    },
    tread:{// 点踩数
    	type: Number,
    	default: 0
    },
    name: { // 用户名
        type: String,
        minlength: 3,
        maxlength: 18,
    },
    // email: { // 邮箱
    //     type: String,
    //     minlength: 3,
    //     maxlength: 36,
    //     required: true
    // },
    // phone: { //手机号
    //     type: Number,
    //     minlength: 6,
    //     maxlength: 12
    // },
    // headImg: String, // 用户头像地址
    // addr: String,
    // ip: String,
    // macAddr: String,
    createAt: { // 发帖时间
        type: Date,
        default: Date.now()
    },
    updateAt: { // 修改时间
        type: Date,
        default: Date.now()
    }
})
// 保存前
PostSchema.pre('save', function(next) {
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
PostSchema.statics = {
    fetch: function(params,cb) {
        return this
            .find(params)
            .sort('meta.updateAt')
            .exec(cb)
    },
}
module.exports = PostSchema