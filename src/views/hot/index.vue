<template>
    <div id="hot">
        <!-- <h2>最热</h2> -->
        <div class="content" v-for="(item,index) in htmlCode" :key="index">
            <h3 class="title">
                <router-link to="">
                      [ {{item.type}} ] {{item.title}}
                </router-link>
                <a href="#" class="close" @click="delPost(item._id)" title="删除此帖">X</a>
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
import hljs from 'highlight.js' // 参考 https://highlightjs.org/
import 'highlight.js/styles/atelier-dune-light.css' //样式文件

export default {
    name: 'hot',
    data() {
        return {
            htmlCode: '',
        };
    },
    methods: {
        // 查找最热帖子
        findHot() {
            this.$axios.get('findPost').then(res => {
                if (res.errNo === 0) {
                    this.htmlCode = res.data
                }
            })
        },
        delPost(id) {
            var isClose = confirm("您确定要删除这个帖子？")
            isClose && this.$axios.delete('delPost', { _id: id }).then(res => {
                if (res.errNo === 0) {
                    this.findHot()
                }
            })
        }
    },
    directives: {
        highlight: {
            // 指令的定义
            inserted: function(el) {
                let blocks = el.querySelectorAll('pre code');
                blocks.forEach((block) => {
                    hljs.highlightBlock(block)
                    console.log(hljs)
                })
            }
        }
    },
    created() {
        this.findHot()
    },
}
</script>
<style scoped lang="less">
/*text-decoration:line-through; 删除线 以后可能会用*/



.content {
    margin: auto;
    width: 60%;
    border: 20px;
    padding: 5px;
    border-color: red;
    background-color: #71d473;

    .title {
        text-decoration: underline;
    }
    .close{
        float: right;
        text-decoration: none;
    }
}


.hljs {
    display: block;
    overflow-x: auto;
}

blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: .25em solid #dfe2e5;
}
</style>