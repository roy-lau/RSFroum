const User = require("../db/mongoose/models/user")

module.exports = {
    addUser: async(ctx, next) => {
        try {
            console.log('================ addUser start =================');
            let addUserData = ctx.request.body;
            let user = new User({
                name: 'admin',
            })
            let userData = await user.save()
            ctx.body = {
                errNo: 0,
                message: '新增用户成功！ ',
                data: await User.fetch()
            }
        } catch (err) {
            console.log(`[catch addUser error] - ${err}`); // 这里捕捉到错误 `error`
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
// 校验用户是否存在
const verifyUserIsRepeat = (params) => {
    return new Promise((resolve, reject) => {
        mysql_query('SELECT user FROM user').then(res => {
            console.log(res)
            console.log(res.user)
            console.log(res.RowDataPacket)
            // resolve(res === params.user)
        }).catch(error => {})
    })
}