    const axios = require('axios'),
        assert = require('assert'),
        base_url = 'http://127.0.0.1:3000'

    module.exports = {
        /*
            查询菜单 (findUser)
        */
        findMenu(done) {
            axios.get(base_url + '/findMenu').then(res => {
                // console.log(res.data)
                assert.equal(0, res.data.errNo, res.data.message)
                done()
            }).catch(error => {
                console.log(`[Axios catch error info] -  ${error}`)
            })
        },
        /*
            新增菜单
        */
        addMenu(done) {
            let menuList = [
                { name: '最热', path: 'hot' },
                { name: '最新', path: 'new' },
                { name: '视频', path: 'video' },
                { name: '音乐', path: 'music' },
                { name: '软件', path: 'software' },
                { name: '原创', path: 'original' },
                { name: '电子书', path: 'EBook' }
            ]
            axios.post(base_url + '/addMenu', { menuList }).then(res => {
                assert.equal(0, res.data.errNo, res.data.message)
                done()
            }).catch(error => {
                console.log(`[Axios catch error info] -  ${error}`)
            })
        }

    }