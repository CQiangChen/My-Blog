<template>
  <div id="blog-img">
    <img src="../../../images/top.jpg" alt="">
    <div class="curtain"></div>
    <div class="avatar">
        <img src="../../../images/avatar.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:'BlogImg',
    data() {
      return{
          
      }
    }
  }
</script>

<style scoped>
  #blog-img{
    position: relative;
    z-index: 1;
  }
  img{
    width: 100%;
  }
  .curtain {
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
  .avatar{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%,-50%);
  }
  .avatar img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow:  0 0 0 2px white;
  }
</style>
