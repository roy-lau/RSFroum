<template>
    <div id="post">
        <br />
        <br />
        <select v-model="publishData.type">
            <option v-for="item in selectList" :value="item.path">{{item.name}}</option>
        </select>
        <input type="text" v-model="publishData.title" placeholder="请输入标题……" />
        <br />
        <br />
        <post-markdown :publish-data="publishData" />
    </div>
</template>
<script>
// const postMarkdown = () => import('@/components/post-markdown')
import postMarkdown from '@/components/post-markdown'

export default {
    name: 'post',
    components: {
        postMarkdown,
    },
    data() {
        return {
            selectList: [],
            publishData: {
                title: '',
                type: '',
                text: ''
            }
        };
    },
    methods: {
        findSelect() {
            let list = JSON.parse(sessionStorage.getItem('menuList'))
            this.selectList = list.slice(2, list.length)
        },

    },
    created() {
        this.findSelect()
    },
}
</script>
<style>
#post {
    margin: auto;
    width: 80%;
}
</style>