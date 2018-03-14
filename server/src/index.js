const Koa = require('koa'),
    router = require('koa-router')(),
    bodyparser = require('koa-bodyparser'),
    app = new Koa();
require('./cors')(app) // 配置跨域支持
require('./routes')(router);


app
    // x-response-time
    .use(async(ctx, next) => {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        ctx.set('X-Response-Time', `${ms}ms`);
    })

    // logger
    .use(async(ctx, next) => {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    })
    // middlewares
    .use(bodyparser({
        enableTypes: ['json', 'form', 'text'],
        onerror: (err, ctx) => {
            ctx.throw('数据解析出错：', 422);
        }
    }))
    // 接口 router
    .use(router.routes())
    .use(router.allowedMethods())

    // response
    // .use(async ctx => {
    //     ctx.body = { info: "is json data ?" };
    // });

    // 错误处理
    .on('error', (err, ctx) => {
        log.error('server error', err, ctx)
    })

    .listen(3000);