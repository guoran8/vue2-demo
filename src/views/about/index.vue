<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{path: '/about/girl' }">Girl</router-link>
    <router-link :to="{path: '/about/boy' }">Boy</router-link>
    <router-view />
  </div>
</template>
