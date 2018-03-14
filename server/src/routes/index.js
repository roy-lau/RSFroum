const header = require('./header');

// 路由表
module.exports = routes => {

    routes
        .get('/', (ctx, next) => {
            ctx.body = { message: 'hi! 欢迎查看API ' }
        })
        .get('/getMenu', header.getMenu)
        .get('/addUser', header.addUser)

}