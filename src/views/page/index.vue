<template>
    <div id="Page">
        <!-- 文章 start -->
        <div class="page">
            <h3 class="title">
                {{page.title}}
                <i class="close" @click="delPost(page._id)" title="删除此帖">X</i>
            </h3>
            <div class="body">
                <span v-html="page.text" v-highlight></span>
            </div>
            <div class="footer">
                <div class="control-group">
                    <button>赞</button>
                    <button>踩</button>
                    <button>分享</button>
                    <button>收藏</button>
                </div>
            </div>
        </div>
        <!-- 文章  end -->
        <!-- 评论 start -->
        <div class="comment">
            <p>评论：</p>
        </div>
        <!-- 评论 end -->
    </div>
</template>
<script>
import highlight from "@/directive/highlight"

export default {
    name: 'Page',
    directives: { highlight },
    data() {
        return {
            page: {},
        };
    },
    methods: {
        // 查找最热帖子
        findPage() {
            // console.log(this.$route.query)
            this.$axios.get('findOnePost', { params: this.$route.query }).then(res => {
                if (res.errNo === 0) {
                    this.page = res.data
                }
            })
        },
        delPost(id) {
            var isClose = confirm("您确定要删除这个帖子？")
            isClose && this.$axios.delete('delPost', { _id: id }).then(res => {
                if (res.errNo === 0) {
                    this.findPage()
                }
            })
        }
    },
    created() {
        this.findPage()
    },
}
</script>
<style scoped lang="less">
#Page {

    width: 60%;
    margin: 5px auto;

    .page {
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
}
</style>