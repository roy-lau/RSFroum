const { Post } = require("../db/mongoose/models")
const hljs = require('highlight.js')
const md = require('markdown-it')({ // markdown 文档配置
    html: true,
    linkify: true,
    typographer: true,
    highlight: function(str, lang) { // markdown 文档的code
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
            } catch (__) {}
        }
        return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
    }
});

module.exports = {
    addPost: async(ctx, next) => {
        try {
            console.log('================ addPost start =================');
            let addPostData = ctx.request.body;
            let post = new Post(addPostData)
            console.log(addPostData)
            let PostData = await post.save()
            ctx.body = {
                errNo: 0,
                message: '发布成功！ ',
                data: PostData
            }
        } catch (err) {
            console.log(`[catch addPost error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    delPost: async(ctx, next) => {
        try {
            console.log('================ addPost start =================');
            let addPostData = ctx.request.body;
            let PostData = await Post.remove(addPostData)
            console.log(addPostData)
            ctx.body = {
                errNo: 0,
                message: '删除成功！ ',
                data: PostData
            }
        } catch (err) {
            console.log(`[catch addPost error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    updatePost: async(ctx, next) => {
        try {
            console.log('================ addPost start =================');
            let addPostData = ctx.request.body;
            let PostData = await Post.update(addPostData)
            console.log(addPostData)
            ctx.body = {
                errNo: 0,
                message: '修改成功！ ',
                data: PostData
            }
        } catch (err) {
            console.log(`[catch addPost error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    findPost: async(ctx, next) => {
        try {
            console.log('================ findPost start =================');
            let findPostData = ctx.request.body,
                PostData = await Post.fetch(findPostData),
                i = 0;
            for (let item of PostData) {
                PostData[i].text = md.render(item.text)
                i++
            }
           // await Promise.all(PostData.map(async(item) => { item.text = md.render(item.text) }));
            ctx.body = {
                errNo: 0,
                message: '查找文章成功！ ',
                data: PostData
            }
        } catch (err) {
            console.log(`[catch findPost error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
}