const { User } = require("../db/mongoose/models")

module.exports = {
    addUser: async(ctx, next) => {
        try {
            console.log('================ addUser start =================');
            let addUserData = ctx.request.body;
            let user = new User(addUserData)
           /* {
                name:'admin',
                pwd:'admin123',
                email:'admin123@163.com',
                ip:'139.199.99.154',
                phone:18888888,
                age:18,
                addr:'cn',
                headImg:'/imgs/av.png',
                macAddr:'3194u10tu0u140501tu0ue0',
            }*/
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
            let userData = await User.remove(userData)
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
            let userData = await User.update(updateUserData)
            ctx.body = {
                errNo: 0,
                message: '修改用户成功！ ',
                data: userData
            }
        } catch (err) {
            console.log(`[catch updateUser error] - ${err}`); // 这里捕捉到错误 `error`
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