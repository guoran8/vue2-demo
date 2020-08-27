<template>
  <div class="container">{{ msg }}</div>
</template>

<script>
export default {
  data: () => ({
    msg: '',
  }),
  created() {
    this.getNewsData(this.$route.query.id);
  },
  methods: {
    getNewsData(id) {
      if (!id) {
        // eslint-disable-next-line no-alert
        alert(`新闻id不存在,当前新闻id为：${id}`);
        throw new Error(`新闻id不存在,当前新闻id为: ${id}`);
      } else {
        this.msg = id;
      }
    },
  },
};
</script>

<style>

</style>