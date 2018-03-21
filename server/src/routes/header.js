const {User} = require("../db/mongoose/models")

module.exports = {
    addUser: async(ctx, next) => {
        try {
            console.log('================ addUser start =================');
            let addUserData = ctx.request.body;
            let user = new User({
                name: 'admin',
                pwd: 'admin123',
                email: '123@qq.com'
            })
            let userData = await user.save()
            ctx.body = {
                errNo: 0,
                message: '新增用户成功！ ',
                data: userData
            }
        } catch (err) {
            console.log(`[catch addUser error] - ${err}`); // 这里捕捉到错误 `error`
             ctx.body = {errNo: 2,message: err}
        }
    },
    getMenu: (ctx, next) => {
        ctx.body = {
            errNo: 0,
            message: '菜单信息返回成功！ ',
            data: [{
                name: '最热',
                path: 'hot'
            }, {
                name: '最新',
                path: 'new'
            }, {
                name: '视频',
                path: 'video'
            }, {
                name: '音乐',
                path: 'music'
            }, {
                name: '软件',
                path: 'software'
            }, {
                name: '原创',
                path: 'original'
            }, {
                name: '电子书',
                path: 'EBook'
            }]
        }
    }
}
