<template>
  <div class="container">
    <input type="text" v-model.lazy="positionX" />
    <br />
    <br />
    <div class="boxWrapper">
      <!--
        elastic: 运动模式
        x: 运动方向
        positionX: 位移值
      -->
      <div v-animation:x.elastic="positionX" class="box">{{ positionX }}</div>
    </div>
  </div>
</template>

<script>
import animation from '@/directive/animation';

export default {
  data: () => ({
    positionX: 0,
  }),
  directives: {
    animation,
  },
};
</script>

<style scoped>
.boxWrapper {
  position: relative;
}
.box {
  width: 100px;
  height: 100px;
  line-height: 100px;
  background-color: red;
  text-align: center;
}
</style>
