    const axios = require('axios'),
        assert = require('assert'),
        base_url = 'http://127.0.0.1:3000'

    let findPostFirstId, // 查询出来的第一条id
        updatePostId; // 更新后返回的id


    /**
        测试流程

        1. 根据菜单类型及长度，发布一个帖子
        2. 查找帖子，并将帖子的id传递给 修改帖子 接口
        3. 根据查找出来的帖子id，修改帖子。将修改后的帖子id传递给删除帖子
        4. 根据修改帖子的id，删除帖子
    */

    module.exports = {
        /*
            发布帖子
        */
        addPost(done) {

            axios.get(base_url + '/findMenu').then(res => {
                let randomLengtNum = (0 + Math.round(Math.random() * res.data.data.menuList.length)),
                    // 哈哈，随机出来一个name，用来做为帖子的类型
                    randomName = res.data.data.menuList[randomLengtNum].name;
                return { randomName, randomLengtNum }
            }).then(data => {
                axios.post(base_url + '/addPost', {
                    title: '标题' + data.randomLengtNum,
                    type: data.randomName,
                    text: '__加粗__ _斜体_' // markdown格式
                }).then(res => {
                    // console.log(res.data)
                    assert.ifError(res.data.errNo)
                    done()
                }).catch(error => {
                    console.log(`[Axios addPost catch error info] -  ${error}`)
                })
            }).catch(error => {
                console.log(`[Axios findMenu catch error info] -  ${error}`)
            })

        },

        /*
            获取帖子
        */
        findPost(done) {
            axios.get(base_url + '/findPost').then(res => {
                // console.log(res.data)
                findPostFirstId = res.data.data[0]._id
                assert.ifError(res.data.errNo)
                done()
            }).catch(error => {
                console.log(`[Axios catch error info] -  ${error}`)
            })

        },
        /*
            删除帖子
        */
        delPost(done) {
            axios.delete(base_url + '/delPost', { _id: updatePostId }).then(res => {
                // console.log(res.data)
                assert.ifError(res.data.errNo)
                done()
            }).catch(error => {
                console.log(`[Axios catch error info] -  ${error}`)
            })
        },
        /*
             修改帖子
         */
        updatePost(done) {
            let data = {
                praise: 2, // 点赞
                tread: 1000, // 点踩
                title: '修改标题',
                type: '原创',
                text: '修改内容试试',
            }
            axios.post(base_url + '/updatePost', { id: findPostFirstId, data }).then(res => {
                // console.log(res.data)
                updatePostId = res.data.data._id
                assert.ifError(res.data.errNo)
                done()
            }).catch(error => {
                console.log(`[Axios catch error info] -  ${error}`)
            })
        }
    }