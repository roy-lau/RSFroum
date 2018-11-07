<template>
    <div id="Header">
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
    name: 'Header',
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