    const ajax = require('axios'),
        base_url = 'http://127.0.0.1:3000'

    /*
        发布帖子
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
    // ajax.get(base_url + '/findMenu').then(res => {
    //     let randomLengtNum = (0 + Math.round(Math.random() * res.data.data.menuList.length)),
    //         // 哈哈，随机出来一个name，用来做为帖子的类型
    //         randomName = res.data.data.menuList[randomLengtNum].name;
    //     addPost(randomName, randomLengtNum)
    // }).catch(error => {
    //     console.log(`[Axios catch error info] -  ${error}`)
    // })



    /*
        获取帖子
    */
    const findPost = () => {
        ajax.get(base_url + '/findPost').then(res => {
            console.log(res.data)
            updatePost(res.data.data[0]._id) // 传递查询出来的第一条id
            // delPost(res.data.data[0]._id) // 传递查询出来的第一条id

        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })

    }
    /*
        删除帖子
    */
    const delPost = (id) => {
        ajax.delete(base_url + '/delPost', { _id: id }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(`[Axios catch error info] -  ${error}`)
        })
    }

    /*
         修改帖子
     */
    const updatePost = (id) => {
        console.log(id)
        let data = {
            praise: 2,  // 点赞
            tread: 1000,   // 点踩
            title: '修改标题',
            type: '原创',
            text: '修改内容试试',
        }
        ajax.post(base_url + '/updatePost', { id: id, data })
            .then(res => {
                console.log(res.data)
            }).catch(error => {
                console.log(`[Axios catch error info] -  ${error}`)
            })
    }

    findPost()