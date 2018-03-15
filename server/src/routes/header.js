const mysql_query = require('../db/mysql');
module.exports = {
    addUser: async (ctx, next) => {
        // http://localhost:3000/addUser?user=admin
        try {
            console.log('addUser start');
            console.log(`[request data] - ${ctx.request.body}`) // 获取前端传来的数据

            const addSql = 'INSERT INTO user(user, pwd, email, phone, addr, ip, mac_addr, create_datetime) VALUES(?,?,?,?,?,?,?,?)';
            const ip = ctx.request.ip.match(/\d+.\d+.\d+.\d+/)[0] && '127.0.0.1';
            // console.log('ip adder: ' + ip)
            const addSqlParams = {
                user: "admin",
                pwd: "admin123",
                email: "188888888@163.com",
                phone: 188888888,
                addr: "CN",
                ip,
                mac_addr: "mac_undefiend",
                create_datetime: new Date()
            }
            await mysql_query(addSql, Object.values(addSqlParams)).then(res => {
                ctx.body = {
                    errNo: 0,
                    message: '添加用户成功！ '
                };
            }).catch(err => {
                console.log("有错误吗？")
                ctx.body = {
                    errNo: 1,
                    message: '添加用户失败！ '
                };
            })
        } catch (err) {
            console.log(`[addUser error] - ${err}`); // 这里捕捉到错误 `error`
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