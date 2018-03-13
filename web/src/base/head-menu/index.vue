<template>
    <div id="head-menu">
        <h1> 头部 </h1>
    </div>
</template>
<script>
export default {
    name: 'head-menu',
    data() {
        return {

        };
    },
    methods: {
        getMenu() {
            this.$axios.get('getMenu').then(res => {
                console.log(res)
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