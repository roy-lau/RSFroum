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
        return {
        };
    },
    methods: {
        adduser(){
            this.$axios.post('addUser', {user:'admin'}).then(res => {
                alert(res)
            })
        }
    },
    created() {
    },
    watch: {

    }
}
</script>
<style>
</style>