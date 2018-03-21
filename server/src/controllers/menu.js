const { Menu } = require("../db/mongoose/models")

module.exports = {
    addMenu: async(ctx, next) => {
        try {
            console.log('================ addMenu start =================');
            let addMenuData = ctx.request.body;
            let menu = new Menu({
                menuList: [{
                    name: '最热',
                    path: 'hot'
                }, {
                    name: '最新',
                    path: 'new'
                }, {
                    name: '视频',
                    path: 'video'
                }, {
                    name: '音乐',
                    path: 'music'
                }, {
                    name: '软件',
                    path: 'software'
                }, {
                    name: '原创',
                    path: 'original'
                }, {
                    name: '电子书',
                    path: 'EBook'
                }],
            })
            let menuData = await menu.save()
            ctx.body = {
                errNo: 0,
                message: '新增菜单成功！ ',
                data: menuData
            }
        } catch (err) {
            console.log(`[catch addMenu error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    },
    findMenu: async(ctx, next) => {
        try {
            console.log('================ findMenu start =================');
            let findMenuData = ctx.request.body,
                start = findMenuData.start || 1, // 从第几条开始
                pageSize = (findMenuData.pageSize || 10) + 1, // 每页显示条数
                menuData = await Menu.find(findMenuData);
            ctx.body = {
                errNo: 0,
                message: '查找菜单成功！ ',
                data: menuData
            }
        } catch (err) {
            console.log(`[catch findMenu error] - ${err}`); // 这里捕捉到错误 `error`
            ctx.body = { errNo: 1, message: err }
        }
    }
}

/*[{
    name: '最热',
    path: 'hot'
}, {
    name: '最新',
    path: 'new'
}, {
    name: '视频',
    path: 'video'
}, {
    name: '音乐',
    path: 'music'
}, {
    name: '软件',
    path: 'software'
}, {
    name: '原创',
    path: 'original'
}, {
    name: '电子书',
    path: 'EBook'
}]*/