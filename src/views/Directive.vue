<template>
  <div class="container">
    <div
      v-pick:f40="{handle: handleToPage, id: item.id, maxTime: 8000}"
      v-for="item in data"
      :key="item.id"
      class="card"
    >
      <h3 class="title">{{ item.title }}</h3>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
import pick from '@/directive/pick';

export default {
  directives: {
    pick,
  },
  data: () => ({
    data: [
      {
        title: '这是文章标题1',
        content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
        id: '1',
      },
      {
        title: '这是文章标题2',
        content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
        id: '2',
      },
      {
        title: '这是文章标题3',
        content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
        id: '3',
      },
      {
        title: '这是文章标题4',
        content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
        id: '4',
      },
      {
        title: '这是文章标题5',
        content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
        id: '5',
      },
      {
        title: '这是文章标题6',
        content: '这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容这是文章内容',
        id: '6',
      },
    ],
  }),
  methods: {
    handleToPage(id) {
      this.$router.push({
        name: 'News',
        query: { id },
      });
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  width: 400px;
  border: 1px solid #f40;
  cursor: pointer;
}
</style>
