const { User } = require("../db/mongoose/models")

module.exports = {
    addUser: async(ctx, next) => {
        try {
            console.log('================ addUser start =================');
            let addUserData = ctx.request.body;
            let user = new User(addUserData)
            let userData = await user.save()
            ctx.body = {
                errNo: 0,
                message: '新增用户成功！ ',
                data: userData
            }
        } catch (err) {
            console.log(`[catch addUser error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    delUser: async(ctx, next) => {
        try {
            console.log('================ delUser start =================');
            let delUserData = ctx.request.body;
            let userData = await User.remove(delUserData)
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
        try {
            console.log('================ updateUser start =================');
            let updateUserData = ctx.request.body;
            await User.updateOne(updateUserData.id, updateUserData.data, { runValidators: true })
            ctx.body = {
                errNo: 0,
                message: '修改用户成功！ ',
                data: await User.findOne({ _id: updateUserData.id })
            }
        } catch (err) {
            console.log(`[catch updateUser error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    findOneUser: async(ctx, next) => {
        try {
            console.log('================ findOneUser start =================');
            let findOneUserData = ctx.request.body,
                userData = await User.findOne(findOneUserData);
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
        try {
            console.log('================ findUser start =================');
            let findUserData = ctx.request.body,
                start = findUserData.pageCurrent || 0, // 从第几条开始
                pageSize = (findUserData.pageSize || 10) + 1, // 每页显示条数

                userData = await User.findByPages(findUserData, start, pageSize);
            ctx.body = {
                errNo: 0,
                message: '查找用户成功！ ',
                data: userData
            }
        } catch (err) {
            console.log(`[catch findUser error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    }
}