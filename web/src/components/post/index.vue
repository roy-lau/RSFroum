<template>
  <div id="post">
     <br />
    <br />
    <input type="text"  placeholder="请输入标题……" />
    <br />
    <br />

    <psot-markdown></psot-markdown>
  </div>
</template>
<script>
const psotMarkdown = () => import('@/base/post-markdown')
export default {
  name: 'post',
  components: {
        psotMarkdown,
    },
  data() {
    return {

    };
  },
  methods: {

  },
  created() {
  },
}

</script>

<style>
#post{
      margin: auto;
    width: 80%;
}
</style>
