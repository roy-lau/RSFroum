module.exports = {
    getMenu: (ctx, next) => {
        ctx.body = {
            errNo: 0,
            message: '菜单信息返回成功！ ',
            data: [{
            	name: '最热',
            	path: 'hot'
            },{
            	name: '最新',
            	path: 'new'
            },{
            	name: '视频',
            	path: 'video'
            },{
            	name: '音乐',
            	path: 'music'
            },{
            	name: '软件',
            	path: 'software'
            },{
            	name: '原创',
            	path: 'original'
            },{
            	name: '电子书',
            	path: 'EBook'
            }]
        }
    }
}