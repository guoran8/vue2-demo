
<template>
  <div class="container">
    <div>{{ msg }}</div>
    <div>{{ mixinMsg }}</div>
    <div @click="onClick">click</div>
  </div>
</template>

<script>
import mixin from '@/mixin/demo';

export default {
  mixins: [mixin],
  data: () => ({
    msg: 'data in component',
  }),
  created() {
    console.log('created method in component');
  },
  methods: {
    onClick() {
      console.log('onClick in component.');
    },
  },
};
</script>

<style>
.container {
  background: cadetblue;
}
</style>
