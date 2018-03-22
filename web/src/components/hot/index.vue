<template>
    <div id="hot">
        <h2>最热</h2>
        <div class="html-code" v-for="(item,index) in htmlCode" :key="index">
            <h3>{{item.title}}</h3>
            <span v-html="item.text" v-highlight></span>
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
        findHot() {
            this.$axios.get('findPost').then(res => {
                if (res.errNo === 0) {
                    this.htmlCode = res.data
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
<style>
.html-code {
    margin: auto;
    width: 80%;
    border: 20px;
    border-color: red;
    /*background-color: #71d473;*/
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