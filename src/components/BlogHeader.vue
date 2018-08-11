<template>
    <div id="blog-header">
        <div class="left-title">
          <h1>MyBlog</h1>
          <span>踏踏实实的走每一步</span>
        </div>
        <div class="right-title">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/add">Set</router-link>
            </li>
            <li>
              <router-link to="">About</router-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "BlogHeader",
  data() {
    return {
    };
  }
};
</script>

<style scoped>
#blog-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.5);
  font-size: 1em;
  background: rgba(255, 255, 255, 0.5);
}
.left-title h1{
  display: inline-block;
  width: 80px;
  font-weight:250;
  margin: 10px;
  font-size: 1.5em;
}
.left-title h1:hover{
  transform: scale(1.5) translateX(10px);
  -webkit-text-stroke: 1px #000;
  -webkit-text-fill-color: transparent;
  animation: elastic 2s;
}
.left-title span{
  color: #b0b2b4;
}
.right-title ul{
  margin: 10px;

}
.right-title li{
  display: inline-block;
  padding: 10px;
  font-weight:300;
  border-radius: 10px;
  transition: all 0.5s;
}

.right-title li:hover{
  box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.5);
  transform: translateX(4px);
}


@keyframes elastic {
  0%{
    /* 字体间距 */
    transform: rotate(0deg);
    letter-spacing: 0.5rem; 
  } 50% {
      letter-spacing: -0.5rem;
  } 100% {
    letter-spacing: 0.5em;
    transform: rotate(360deg);
  }
}
</style>
