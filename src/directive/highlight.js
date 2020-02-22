/**
 * element-ui 输入框指令
 *
 * 禁止输入非数字和小数点以外的字符
 *
 * 用法 ：
 *      dom    <div v-number-only />
 *      引入    import vHighlight from "@/directive/highlight"
 *      装载     directives:{vHighlight}
 */

import hljs from 'highlight.js' // 参考 https://highlightjs.org/
import 'highlight.js/styles/atelier-dune-light.css' //样式文件

const vHighlight = {
    // 指令的定义
    inserted: function(el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block) => {
            hljs.highlightBlock(block)
            // console.log(hljs)
        })
    }

}
export default vHighlight