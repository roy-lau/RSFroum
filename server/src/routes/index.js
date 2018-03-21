const User = require('../controllers/user');
const Menu = require('../controllers/menu');

// 路由表
module.exports = routes => {

    routes
        .get('/', (ctx, next) => {
            ctx.body = { message: 'hi! 欢迎查看API ' }
        })
        // 用户{ 增 删 改 查}
        .post('/addUser', User.addUser)
        .delete('/delUser', User.delUser)
        .post('/updateUser', User.updateUser)
        .get('/findUser', User.findUser)

        .get('/addMenu', Menu.addMenu)
        .get('/findMenu', Menu.findMenu)

}