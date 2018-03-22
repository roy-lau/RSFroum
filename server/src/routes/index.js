const User = require('../controllers/user');
const Menu = require('../controllers/menu');
const Post = require('../controllers/post');

// 路由表
module.exports = routes => {

    routes
        .get('/', (ctx, next) => {
            ctx.body = { message: 'hi! 欢迎查看API ', data: ctx }
        })
        // 启动 devOps
        // .get('/start', (ctx, next) => {})

        // 用户{ 增 删 改 查}
        .post('/addUser', User.addUser)
        .delete('/delUser', User.delUser)
        .post('/updateUser', User.updateUser)
        .get('/findUser', User.findUser)

        // 菜单{ 增 }
        .post('/addMenu', Menu.addMenu)
        .get('/findMenu', Menu.findMenu)
        // 发帖
        .post('/addPost', Post.addPost)
        .delete('/delPost', Post.delPost)
        .post('/updatePost', Post.updatePost)
        .get('/findPost', Post.findPost)

}