const { User } = require("../db/mongoose/models"),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    { secret } = require('../config/jwt');

module.exports = {
    addUser: async(ctx, next) => {
        console.log('================ addUser start =================');
        const { body } = ctx.request;
        try {
            if (!body.userName || !body.pwd) { // 用户名，密码不能为空
                ctx.status = 400;
                ctx.body = { errNo: 1, message: `expected an object with userName, pwd but got: ${body}` }
                return;
            }
            body.pwd = await bcrypt.hash(body.pwd, 5) // 对密码加密
            let user = await User.find({ userName: body.userName });
            if (!user.length) {
                const newUser = new User(body);
                user = await newUser.save();
                ctx.body = {
                    errNo: 0,
                    message: '注册成功',
                    data: user,
                }
            } else {
                ctx.body = {errNo: 1,message: '用户名已经存在',}
            }
        } catch (err) {
            console.log(`[catch addUser error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    delUser: async(ctx, next) => {
        console.log('================ delUser start =================');
        const { body } = ctx.request;
        try {
            const userData = await User.remove(body);
            ctx.body = {
                errNo: 0,
                message: '删除用户成功！ ',
                data: userData
            }
        } catch (err) {
            console.log(`[catch delUser error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    updateUser: async(ctx, next) => {
        console.log('================ updateUser start =================');
        const { body } = ctx.request;
        try {
            await User.updateOne(body.id, body.data, { runValidators: true })
            ctx.body = {
                errNo: 0,
                message: '修改用户成功！ ',
                data: await User.findOne({ _id: body.id })
            }
        } catch (err) {
            console.log(`[catch updateUser error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    findOneUser: async(ctx, next) => {
        console.log('================ findOneUser start =================');
        const { body } = ctx.request;
        try {
            const userData = await User.findOne(body);
            ctx.body = {
                errNo: 0,
                message: '查找用户成功！ ',
                data: userData
            }
        } catch (err) {
            console.log(`[catch findOneUser error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    findUser: async(ctx, next) => {
        console.log('================ findUser start =================');
        const { body } = ctx.request;
        try {
            const start = body.pageCurrent || 0, // 从第几条开始
                pageSize = (body.pageSize || 10) + 1, // 每页显示条数

                userData = await User.findByPages(body, start, pageSize);
            ctx.body = {
                errNo: 0,
                message: '查找用户成功！ ',
                data: userData
            }
        } catch (err) {
            console.log(`[catch findUser error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    login: async(ctx) => {
        const { body } = ctx.request
        try {
            const userData = await User.findOne({ userName: body.userName });
            if (!userData) {
                ctx.body = { errNo: 1, message: '用户名错误' }
                return;
            }
            // 匹配密码是否相等
            if (await bcrypt.compare(body.pwd, userData.pwd)) {
            const token = jwt.sign(JSON.parse(JSON.stringify(userData)), secret, { expiresIn: '1h' }) //token签名 有效期为1小时
            userData.token = token;
                ctx.body = {
                    errNo: 0,
                    message: '登录成功',
                    userData,
                    token,
                }
            } else {
                ctx.body = { errNo: 1, message: '密码错误' }
            }
        } catch (err) {
            console.log(`[catch findUser error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    }
}