var User = require("./model")

let user = new User({
    name: 'admin',
})
// user.save(function(err, user) {
//     if (err) console.log(err)
//     console.log("写入数据库成功！")
// })
User.fetch(function(err, user) {
        if (err) console.log(err)
        console.log("查到数据为：",user)
    })