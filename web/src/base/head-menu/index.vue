<template>
    <div id="head-menu">
        <ul>
            <li v-for="(list,index) in menuList" :key="index" v-text="list.name"></li>
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
        getMenu() {
            this.$axios.get('getMenu').then(res => {
                this.menuList = res.data;
            })
        }
    },
    created() {
      this.getMenu()
    },
    watch: {

    }
}
</script>
<style>
</style>