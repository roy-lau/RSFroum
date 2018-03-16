const mysql_query = require('../db/mysql');
module.exports = {
    addUser: async(ctx, next) => {
        // http://localhost:3000/addUser?user=admin
        try {
            console.log('================ addUser start =================');
            // console.log(`[request data] - ${ctx.request.body}`) // 获取前端传来的数据
            let addUserData = ctx.request.body;


            await mysql_query(`SELECT user FROM user`).then(async res => {
                for (let item of res) {
                    if (item.user === addUserData.user) {
                        ctx.body = { errNo: 0, message: "该账户已存在！" }
                        return;
                    }
                }
                const addSql = 'INSERT INTO user(user, pwd, email, phone, addr, ip, mac_addr, create_datetime) VALUES(?,?,?,?,?,?,?,?)',
                    addSqlParams = Object.assign({}, addUserData, {
                        addr: "CN",
                        ip: ctx.request.ip,
                        mac_addr: "mac_undefiend",
                        create_datetime: new Date()
                    })
                await mysql_query(addSql, Object.values(addSqlParams)).then(res => {
                    console.log('====== success =====')
                    ctx.body = { errNo: 0, message: '添加用户成功！ ' };
                }).catch(err => {
                    ctx.body = { errNo: 1, message: '添加用户失败！ ' };
                })
            })


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