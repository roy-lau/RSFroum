<template>
    <div id="Pages">
        <!-- <h2>{{$route.query}}</h2> -->
        <div id="page" v-for="(item,index) in pages" :key="index">
            <h3 class="title">
                <router-link :to="{path: 'page',query:{type:item.type,_id:item._id}}">
                    [ {{item.type}} ] {{item.title}}
                </router-link>
                <i class="close" @click="delPost(item._id)" title="删除此帖">X</i>
            </h3>
            <div class="body">
                <span v-html="item.text" v-highlight></span>
            </div>
            <div class="footer">
                <div class="control-group">
                    <button>赞</button>
                    <button>踩</button>
                    <button>评论</button>
                    <button>分享</button>
                    <button>收藏</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import highlight from "@/directive/highlight"

export default {
    name: 'Pages',
    data() {
        return {
            pages: [],
        };
    },
    directives: { highlight },
    methods: {
        // 查找文章列表
        findPages() {
            this.$axios.get('findPost').then(res => {
                if (res.errNo === 0) {
                    this.pages = res.data
                }
            })
        },
        delPost(id) {
            var isClose = confirm("您确定要删除这个帖子？")
            isClose && this.$axios.delete('delPost', { _id: id }).then(res => {
                if (res.errNo === 0) {
                    this.findPages()
                }
            })
        }
    },
    created() {
        this.findPages()
    },
}
</script>
<style scoped lang="less">
/*text-decoration:line-through; 删除线 以后可能会用*/


#page {
    margin: 5px auto;
    width: 60%;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    overflow: hidden;
    color: #303133;
    transition: .3s;

    &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    }

    .title {
        text-decoration: underline;
    }

    i.close {
        cursor: pointer;
        float: right;
    }

    .body {}

}
</style>