<!-- 发帖 -->
<template>
    <div id="post-markdown">
        <mavon-editor class="editor" v-model="MEvalue"></mavon-editor>
        <br />
        <button class="publish" @click="postMEvalue">发布</button>
    </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor' // API: https://github.com/hinesboy/mavonEditor
import 'mavon-editor/dist/css/index.css'

export default {
    name: 'post-markdown',
    components: {
        mavonEditor,
    },
    data() {
        return {
             MEvalue: ''
        };
    },
    methods: {
        postMEvalue() {
             let publishData ={
                title: '大标题',
                text: this.MEvalue
            }
            this.$axios.post('addPost',publishData).then(res => {
                console.log(res)
            })
        }
    },
    created() {},
    watch: {

    }
}
</script>
<style>
.editor {
    height: 100%;
    height: 580px;
}

.publish {
    float: right;
    padding: 8px;
    color: white;
    background-color: blue;
}
</style>