<template>
  <div id="app">
    <blog-header class="top"></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home/Home.vue'
import AddPost from './components/AddPost/AddPost.vue'
import BlogHeader from './components/BlogHeader'


export default {
  name: 'App',
  components: {
    Home,
    AddPost,
    BlogHeader,
  }
}
</script>

<style scoped>
  .top{
    position: fixed;
    z-index: 9999;
  }
</style>
