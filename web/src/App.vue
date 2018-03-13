<template>
    <div id="app">
        <head-menu />
        <router-view/>
    </div>
</template>
<script>
import '@/config/api.js'
const headMenu = () => import ('@/base/head-menu')
export default {
    name: 'app',
    components: {
        headMenu
    },
}
</script>
<style>
body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>