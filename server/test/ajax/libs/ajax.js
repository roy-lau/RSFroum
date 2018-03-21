const http = require("http")


module.exports = function ajax(params) {
    return new Promise(function(resolve, reject) {
        let options = {
            hostname: '139.199.99.154',
            port: 3000,
            method: 'POST',
            path: '/',
            handers: {
                "content-type": "application/json; charset=utf-8"
            }
        };
        let opt = Object.assign({},options,params)
        console.log(opt)
        http.request(opt, function(res) {
            let size = 0;
            let chunks = [];
            res.on('data', function(chunk) {
                size += chunk.length;
                chunks.push(chunk);
            });
            res.on('end', function() {
                let data = Buffer.concat(chunks, size);
                console.log(data.toString())
                resolve(data.toString())
            });
            res.on('error', function(err) {
                console.log(err)
            });
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
            reject(e.message)
        });
    });

};