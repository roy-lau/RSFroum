<!-- 头部菜单 -->
<template>
    <div id="head-menu">
        <!-- <button @click="addMenu">新增菜单</button> -->
        <ul class="menu-list">
            <router-link v-for="(list,index) in menuList" :to="list.path" :key="index">
                <li v-text="list.name"></li>
            </router-link>
            <router-link to="post">
                <li class="post-btn"> 发帖 </li>
            </router-link>
            <a class="btn-group">
	            <li class="login-btn" @click="login">登录</li>
	            <li class="reg-btn">注册</li>
            </a>
        </ul>
        <!-- 登录表单 start -->
        <Dialog title="登录" :is-show="showDialog" @enter="dialogEnter" @close="showDialog=false">
            <form class="login-form">
                <ul>
                    <li>
                        <label for="userNmae">账号：
                            <input id="userNmae" type="text" v-model="loginFrom.userNmae" />
                        </label>
                    </li>
                    <li>
                        <label for="passWord">密码：
                            <input id="passWord" type="password" v-model="loginFrom.pwd" />
                        </label>
                    </li>
                </ul>
            </form>
        </Dialog>
        <!-- 登录表单 end -->
    </div>
</template>
<script>
import Dialog from "@/components/dialog"
export default {
    name: 'head-menu',
    components: {
        Dialog
    },
    data() {
        return {
            // 菜单列表
            menuList: [],
            // 登录表单
            loginFrom: {
                userNmae: '',
                pwd: ''
            },
            showDialog: false
        };
    },
    methods: {
        // 获取菜单
        findMenu() {
            this.$axios.get('findMenu').then(res => {
                if (!res.code && res.data) {
                    this.menuList = res.data.menuList;
                    sessionStorage.setItem('menuList', JSON.stringify(res.data.menuList))
                }else{
                    console.info('获取菜单失败，尝试新增菜单！')
                    this.addMenu()
                }
            })
        },
        // 登录
        login() {
            this.showDialog = true;
        },
        dialogEnter() {
            this.$axios.post('login', this.loginFrom).then(res => {
                console.log("res.token ======= ", res.token)
                sessionStorage.setItem('TOKEN', res.token);
                this.showDialog = false;
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
<style lang="less" scoped>
.menu-list {
    zoom: 1;

    a {
        li {
            padding: 5px;
            list-style: none;
            margin-left: 15px;
            float: left;
            &:hover{
				transform: all 3s;
				// border-bottom: 2px solid yellow;
            }
        }

        .post-btn {
            background-color: yellow;
        }
    }
	.btn-group{
		float: right;
		margin-right: 60px;
		li{
			width: 50px;
			height: 20px;
			border-radius: 5%;
			text-align: center;
			background-color: #409eff;
			color: white;
			cursor: pointer;
			&:hover{
				// transition: all 3s;
				opacity: .9;
			}

		}
	}
    /* 清除浮动 */
    &:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0
    }
}



/*登录表单*/
.login-form {}
</style>