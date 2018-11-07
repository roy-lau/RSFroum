<template>
    <div id="app">
        <Header/>
        <router-view/>
    </div>
</template>
<script>

const Header = () => import ('@/components/header')
export default {
    name: 'app',
    components: {
        Header
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