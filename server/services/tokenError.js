const jwt = require('jsonwebtoken');
const util = require('util');
const verify = util.promisify(jwt.verify);
const { secret } = require('../config/jwt');




// https://segmentfault.com/a/1190000012255933


/**
 * 判断token是否可用
 */
module.exports = function() {
    return async function(ctx, next) {
        try {
            // 获取jwt
            const token = ctx.header.authorization;
            if (token) {
                try {
                    // 解密payload，获取用户名和ID
                    let payload = await verify(token.split(' ')[1], secret);
                    ctx.userInfo = payload;

                } catch (err) {
                    ctx.status = 401;
                    ctx.body = {
                        errNo: 1,
                        message: 'token verify fail: ' + err
                    };
                }
            }else{
            	 ctx.status = 403;
                    ctx.body = {
                        errNo: 1,
                        message: 'token verify fail '
                    };
            }
            await next();
        } catch (err) {
            if (err.status === 401) {
                ctx.status = 401;
                ctx.body = {
                    errNo: 1,
                    message: '认证失败'
                };
            } else {
                err.status = 404;
            }
        }
    }
}