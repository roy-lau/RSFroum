const httpRequest = require('./utils/httpRequest'),
    User = require('./api/user'),
    Menu = require('./api/menu'),
    Post = require('./api/post')

describe('TEST API', function () {
    before(function () {
        // 在这个作用域的所有测试用例运行之前运行
        this.$axios = httpRequest
    })
    // describe('#indexOf()', function() {
    //     it('未找到值时应当返回-1', function() {
    //         assert.equal(-1, [1, 2, 3].indexOf(4))
    //     })
    // })

    describe('# user_api', function () {
        describe('## User', function () {
            it('Test addUser API (新增用户)', User.addUser)
            it('Test login API (登陆)', User.login)
            it('Test findOneUser API (查找一个用户)', User.findOneUser)
            it('Test updateUser API (修改用户)', User.updateUser)
            it('Test delUser API (删除用户)', User.delUser)
            it('Test findUser API (查找用户)', User.findUser)
        })
    })
    describe('# menu_api', function () {
        describe('## Menu', function () {
            it('Test addMenu API (新增菜单)', Menu.addMenu)
            it('Test findMenu API (查找菜单)', Menu.findMenu)
        })
    })
    describe('# post_api', function () {
        describe('## Post', function () {
            it('Test addPost API (发布帖子)', Post.addPost)
            it('Test findPost API (获取帖子)', Post.findPost)
            it('Test updatePost API (修改帖子)', Post.updatePost)
            it('Test delPost API (删除帖子)', Post.delPost)
        })
    })
})