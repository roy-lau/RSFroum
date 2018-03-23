    const ajax = require('axios'),
        base_url = 'http://127.0.0.1:3000'

    /*
        查询菜单 (findUser)
    */
    ajax.get(base_url + '/findMenu').then(res => {
        console.log(res.data)
    }).catch(error => {
        console.log(`[Axios catch error info] -  ${error}`)
    })
        let menuList = [{
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
    /*
        新增菜单
    */
    const addMenu = () => {
        ajax.post(base_url + '/addMenu', { menuList }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })
    }

    // addMenu()