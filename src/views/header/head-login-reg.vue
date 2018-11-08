<!-- 注册 -->
<template>
    <div id="head-register">
        <button @click="adduser" style="float:right">注册</button>
        <button @click="login" style="float:right">登陆</button>
    </div>
</template>
<script>
export default {
    name: 'head-register',
    data() {
        return {};
    },
    methods: {
        adduser() {
            this.$axios.post('addUser', {
                userName: 'admin1',
                pwd: 'aaaa324',
                email: '321@163.com',
                phone: 166689789
            }).then(res => {
                console.log(res)
            })
        },
        login() {
            this.$axios.post('login', {
                userName: 'admin1',
                pwd: 'aaaa324',
                email: '321@163.com',
                phone: 166689789
            }).then(res => {
                console.log("res.token ======= ", res.token)
               sessionStorage.setItem('TOKEN', res.token);
            })
        }
    },
    created() {},
    watch: {

    }
}
</script>
<style>
</style>