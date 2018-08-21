<template>
  <div id="home">
    <blog-img></blog-img>
    <home-header></home-header>
    <!-- <show-blog></show-blog> -->
    <router-view></router-view>
  </div>
</template>

<script>
import ShowBlog from './components/ShowBlog'
import BlogImg from './components/BlogImg'
import HomeHeader from './components/HomeHeader'

export default {
  name: 'Home',
  components: {
    ShowBlog,
    BlogImg,
    HomeHeader
  }
}
</script>

<style scoped>

</style>