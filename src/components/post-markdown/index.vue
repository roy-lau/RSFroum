<!-- 发帖 -->
<template>
    <div id="post-markdown">
        <mavon-editor class="editor" v-model="publishData.text"></mavon-editor>
        <br />
        <button class="publish-btn" @click="publish">发布</button>
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
    props: {
        publishData: {
            type: Object,
            required: true,
            default: {}
        },
    },
    data() {
        return {};
    },
    methods: {
        // 发布
        publish() {
            this.$axios.post('addPost', this.publishData).then(res => {
                if (res.errNo) {
                    alert(JSON.stringify(res.message, null, 2))
                } else {
                    alert(res.message)
                    console.log(res)
                }
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

.publish-btn {
    float: right;
    padding: 8px;
    color: white;
    background-color: blue;
}
</style>