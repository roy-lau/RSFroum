    const ajax = require('axios'),
        base_url = 'http://127.0.0.1:3000'

    /*
        发布文章
    */
    const addPost = (randomName, randomLengtNum) => {
        ajax.post(base_url + '/addPost', {
            title: '标题' + randomLengtNum,
            type: randomName,
            text: '__加粗__ _斜体_' // markdown格式
        }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })
    }
    ajax.get(base_url + '/findMenu').then(res => {
        let randomLengtNum = (0 + Math.round(Math.random() * res.data.data.menuList.length)),
            // 哈哈，随机出来一个name，用来做为文章的类型
            randomName = res.data.data.menuList[randomLengtNum].name;
        addPost(randomName, randomLengtNum)
    }).catch(error => {
        console.log(`[Axios catch error info] -  ${error}`)
    })

    /*
        获取文章
    */
    const findPost = () => {
        ajax.get(base_url + '/findPost').then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })

    }

    findPost()