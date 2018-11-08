<template>
    <div id="post">
        <br />
        <br />
        <select name="" id="" v-model="selectVal">
            <option v-for="item in selectList" :value="item.path">{{item.name}}</option>
        </select>
        <input type="text" placeholder="请输入标题……" />
        <br />
        <br />
        <psot-markdown></psot-markdown>
    </div>
</template>
<script>
// const psotMarkdown = () => import('@/components/post-markdown')
import psotMarkdown from '@/components/post-markdown'

export default {
    name: 'post',
    components: {
        psotMarkdown,
    },
    data() {
        return {
            selectList: [],
            selectVal:''
        };
    },
    methods: {
        findSelect() {
          let list = JSON.parse(sessionStorage.getItem('menuList'))
            this.selectList = list.slice(2,list.length)
        }
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