    const ajax = require('axios'),
        base_url = 'http://127.0.0.1:3000'

    /*
        新增用户
    */
    const addUser = () => {
        ajax.post(base_url + '/addUser', {
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
            console.log(res.data)
        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })

    }

    /*
    查找一个用户（多条相同的只返回一条）
    */
    const findOneUser = () => {
        ajax.get(base_url + '/findOneUser', { data: { name: 'admin' } }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })
    }

    /*
    查找用户
    */
    const findUser = (token) => {
        ajax.get(base_url + '/findUser',{
            headers: {
                authorization: 'Bearer '+token
            }
        }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })
    }

    /*
        修改用户
    */
    const updateUser = () => {
        ajax.post(base_url + '/updateUser', { id: '5ab4ac20ed465420d44c03ce', data: { name: "root123" } }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })
    }

    /*
        删除用户
    */
    const delUser = () => {
        ajax.delete(base_url + '/delUser', { _id: '5ab4ac20ed465420d44c03ce' }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })
    }
    /*
        登陆
    */
    const login = () => {
        ajax.post(base_url + '/login', {
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
            console.log(res.data)
    findUser(res.data.token)

        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })

    }
    login()
    // delUser()