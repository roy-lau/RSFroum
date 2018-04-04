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
        console.log('================ addPost start =================');
        const { body } = ctx.request
        try {
            const post = new Post(body),
                PostData = await post.save();
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
        console.log('================ addPost start =================');
        const { body } = ctx.request
        try {
            const PostData = await Post.remove(body);
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
        console.log('================ addPost start =================');
        const { body } = ctx.request
        try {
            // console.log('updatePost body: ',body)
            const PostData = await Post.updateOne(body.id, body.data, { runValidators: true });
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
        console.log('================ findPost start =================');
        const { body } = ctx.request
        try {
            // console.log('findPost body: ',body)
            let start = body.pageCurrent || 0, // 从第几条开始
                pageSize = (body.pageSize || 10) + 1, // 每页显示条数

                PostData = await Post.findByPages(body, start, pageSize),
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