<template>
<div class="home-header">
  <router-link to="/show/post">
    <img src="../../../images/post-icon.png" alt="">
    <h1>文章</h1>
  </router-link> 
  <router-link to="/show/photo">
    <img src="../../../images/photo-icon.png" alt="">
    <h1>相册集</h1>
  </router-link>  
  <router-link to="/show/demo">
    <img src="../../../images/demo.png" alt="">
    <h1>Demo</h1>
  </router-link>  
</div>
    
</template>

<script>
    export default{
      name:"HomeHeader",
      data(){
        return{

        }
      }
    }
</script>

<style scoped>
  .home-header{
    display: flex;
    justify-content: center;
    position: relative;
  }
  a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    margin: 20px;
  }
  a > img{
    max-width: 30%;
    transition: max-width 0.2s;
  }
  a > h1{
    display: none;
        font-size: 1.3em;
    font-weight: 350;
    transition: all 0.2s;
  }
  a:hover > img{
    max-width: 20%;
  }
  a:hover > h1{
    display: block;

  }
</style>
