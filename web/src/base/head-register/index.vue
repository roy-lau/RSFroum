<!-- 注册 -->
<template>
    <div id="head-register">
        <button @click="adduser">add user test</button>
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
                user: 'admin',
                pwd: 'aaaa324',
                email: '321@163.com',
                phone: '166'
            }).then( res => {
                console.log(res)
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