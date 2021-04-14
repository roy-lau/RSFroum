const assert = require('assert')

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

        this.$axios.get('findMenu').then(res => {
            let randomLengtNum = (0 + Math.round(Math.random() * res.data.data.menuList.length)),
                // 哈哈，随机出来一个name，用来做为帖子的类型
                randomType = res.data.data.menuList[randomLengtNum].name;
            return { randomType, randomLengtNum }
        }).then(data => {
            this.$axios.post('addPost', {
                title: '标题' + data.randomLengtNum,
                type: data.randomType,
                text: '__加粗__ _斜体_' // markdown格式
            }).then(res => {
                // console.log(res.data)
                assert.ifError(res.data.errNo)
                done()
            }).catch(done);
        }).catch(done);

    },

    /*
        获取帖子
    */
    findPost(done) {
        this.$axios.get('findPost').then(res => {
            // console.log(res.data)
            findPostFirstId = res.data.data[0]._id
            assert.ifError(res.data.errNo)
            done()
        }).catch(done);

    },
    /*
        删除帖子
    */
    delPost(done) {
        this.$axios.delete('delPost', { _id: updatePostId }).then(res => {
            // console.log(res.data)
            assert.ifError(res.data.errNo)
            done()
        }).catch(done);
    },
    /*
         修改帖子
     */
    updatePost(done) {
        let data = {
            praise: 20, // 点赞
            tread: 1000, // 点踩
            title: '修改标题',
            type: '原创',
            text: '修改内容试试',
        }
        this.$axios.post('updatePost', { id: findPostFirstId, data }).then(res => {
            // console.log(res.data)
            updatePostId = res.data.data._id
            assert.ifError(res.data.errNo)
            done()
        }).catch(done);
    },
}