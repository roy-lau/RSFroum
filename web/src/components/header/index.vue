<template>
    <div id="header">
        <head-menu/>
        <head-register/>
    </div>
</template>
<script>
const headMenu = () =>
    import ('@/base/head-menu')
const headRegister = () =>
    import ('@/base/head-register')

export default {
    name: 'header',
    components: {
        headMenu,
        headRegister
    },
    data() {
        return {

        };
    },
    methods: {

    },
    created() {},
}
</script>
<style>
</style>