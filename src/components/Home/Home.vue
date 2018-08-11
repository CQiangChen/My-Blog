<template>
  <div id="home">
    <blog-img></blog-img>
    <show-blog></show-blog>
  </div>
</template>

<script>
import ShowBlog from './components/ShowBlog'
import BlogImg from './components/BlogImg'

export default {
  name: 'Home',
  components: {
    ShowBlog,
    BlogImg
  }
}
</script>

<style scoped>

</style>