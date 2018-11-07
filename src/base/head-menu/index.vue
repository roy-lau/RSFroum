<template>
    <div id="head-menu">
        <button @click="addMenu">新增菜单</button>
        <ul class="menu-list">
            <router-link v-for="(list,index) in menuList" :to="list.path" :key="index">
                <li v-text="list.name"></li>
            </router-link>
            <router-link to="post">
                <li class="post-btn"> 发帖 </li>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'head-menu',
    data() {
        return {
            menuList: []
        };
    },
    methods: {
        // 获取菜单
        findMenu() {
            this.$axios.get('findMenu').then(res => {
                this.menuList = res.data.menuList;
            })
        },
        // 新增菜单
        addMenu() {
            let addMenuList = [{
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
            }]
            this.$axios.post('addMenu', { menuList: addMenuList }).then(res => {
                this.menuList = res.data;
            })
        },
    },
    created() {
        this.findMenu()
    },
    watch: {

    }
}
</script>
<style>
.menu-list a li {
    padding: 5px;
    list-style: none;
    margin-left: 15px;
    float: left;
}

.menu-list a .post-btn {
    background-color: yellow;
}
/* 清除浮动 */
.menu-list:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
}

.menu-list {
    zoom: 1
}
</style>