    const axios = require('axios'),
        assert = require('assert'),
        base_url = 'http://127.0.0.1:3000'


    let findOneUserId; // 查找 admin 用户的 Id

     /**
        测试流程

        1. 新增一个用户名为 admin的用户
        2. admin用户登录
        3. 查找用户(admin),并将 admin 用户的Id 传给修改用户
        4. 通过admin的id将用户名修改为root123
        5. 删除用户名为root123的用户
    */
    module.exports = {
        /*
            新增用户
        */
        addUser(done) {
            axios.post(base_url + '/addUser',{
                userName: 'admin',
                pwd: 'admin123',
                email: 'admin123@163.com',
                ip: '139.199.99.154',
                phone: 18888888,
                age: 18,
                addr: 'cn',
                headImg: '/imgs/av.png',
                macAddr: '3194u10tu0u140501tu0ue0',
            }).then(res => {
                assert.ifError(res.data.errNo)
                done()
            }).catch(error => {
                console.log(`[Axios addUser catch error info] -  ${error}`)
            })
        },
        /*
            查找一个用户（多条相同的只返回一条）
        */
        findOneUser(done) {
            axios.get(base_url + '/findOneUser', { data: { userName: 'admin' } }).then(res => {
                // console.log(res.data)
                assert.ifError(res.data.errNo)
                findOneUserId = res.data.data._id
                done()
            }).catch(error => {
                console.log(`[Axios findOneUser catch error info] -  ${error}`)
            })
        },
        /*
        查找用户
        */
        findUser(done) {
            axios.get(base_url + '/findUser').then(res => {
                // console.log(res.data)
                assert.ifError(res.data.errNo)
                done()
            }).catch(error => {
                console.log(`[Axios findUser catch error info] -  ${error}`)
            })
        },
        /*
            修改用户
        */
        updateUser(done) {
            axios.post(base_url + '/updateUser', { id: findOneUserId, data: { userName: "root123" } }).then(res => {
                // console.log(res.data)
                assert.ifError(res.data.errNo)
                assert.notEqual(null, res.data.data, 'data是null，修改错误！')
                done()
            }).catch(error => {
                console.log(`[Axios updateUser catch error info] -  ${error}`)
            })
        },
        /*
            删除用户
        */
        delUser(done) {
            axios.delete(base_url + '/delUser', { data: { userName: 'root123' } }).then(res => {
                // console.log(res.data)
                assert.ifError(res.data.errNo)
                done()
            }).catch(error => {
                console.log(`[Axios delUser catch error info] -  ${error}`)
            })
        },
        /*
            登陆
        */
        login(done) {
            axios.post(base_url + '/login', {
                userName: 'admin',
                pwd: 'admin123',
                email: 'admin123@163.com',
                ip: '139.199.99.154',
                phone: 18888888,
                age: 18,
                addr: 'cn',
                headImg: '/imgs/av.png',
                macAddr: '3194u10tu0u140501tu0ue0',
            }).then(res => {

                // findUser(res.data.token)
                assert.ifError(res.data.errNo)
                done()
            }).catch(error => {
                console.log(`[Axios Login catch error info] -  ${error}`)
            })

        }
    }