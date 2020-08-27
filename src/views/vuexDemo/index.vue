<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style>

</style>
