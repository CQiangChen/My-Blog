<template>
  <div class="show-blog">
      <div class="post" v-for="post in posts" :key="post.id">
          <div class="label">
            <img src="../../../images/label.png">
            <span v-if="post.isPost">文章</span>
            <span v-else>心情</span>
          </div>
          <div v-if="post.isPost" class="is-post">
            <img :src="post.src" alt="">
            <div class="is-cnt">
              <h1>{{ post.title }}</h1>
              <span>时间：2018年8月11日</span>
              <article>
              {{ post.content | igOverstep }}
              </article>
            </div>
          </div>
          <div v-else class="not-post">
              <div class="not-cnt">
                <div class="not-time">
                  <span>2018</span>
                  <span>9.10</span>
                </div>
                <span> {{ post.content }} </span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlog",
  data() {
    return {
      posts: [
        {
          id: 0,
          title: "测试1",
          content: "今天心情好好",
          time: "2018-9-10",
          src: "https://chen-img.oss-cn-beijing.aliyuncs.com/1.jpg",
          isPost: false
        },
        {
          id: 1,
          title: "测试2",
          content:
            "试1测测试1测试1测试1测试1测测试1测试1测试1测测试1测试1测试1测试1测试11测试1测试试1测测试1测试1测试1测试1测试1测试11测试1测试试1测测试1测试1测试1测试1测试1测试11测试1测试",
          src: "https://chen-img.oss-cn-beijing.aliyuncs.com/buiding03.jpg",
          isPost: true
        },
        {
          id: 3,
          title: "测试1",
          content: "今天心情好好",
          time: "2018-9-10",
          src: "https://chen-img.oss-cn-beijing.aliyuncs.com/1.jpg",
          isPost: false
        },
        {
          id: 4,
          title: "测试2",
          content:
            "试1测测试1测试1测试1测试1测测试1测试1测试1测测试1测试1测试1测试1测试11测试1测试试1测测试1测试1测试1测试1测试1测试11测试1测试试1测测试1测试1测试1测试1测试1测试11测试1测试",
          src: "https://chen-img.oss-cn-beijing.aliyuncs.com/buiding03.jpg",
          isPost: true
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.label {
  display: flex;
  align-items: center;
  font-size: 1.3em;
  font-family: 'FangSong';
  font-weight: bold;
  margin: 10px;
  position: relative;
}
.label span::after{
  content: '';
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 80px;
  /* 0.5px的实现 */
  border-bottom: 1px solid black;
  transform: scale(0.5);
  transform-origin: 50% 100%;
}
.label img{
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.not-post,
.is-post {
  width: 55%;
  max-height: 400px;
  background: white;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
}
.is-post::before,
.not-post::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.5);
}
.is-post img {
  float: left;
  max-width: 50%;
  max-height: 50%;
  margin-right: 10px;
}
.is-cnt {
  padding: 10px;
  font-family: "NSimSun";
}
.is-cnt h1 {
  font-size: 1.5em;
}
.is-cnt span {
  font-size: 0.8em;
}
.is-cnt::after {
  content: "";
  background: url();
}
.not-cnt {
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.not-cnt > span {
  margin-left: 10px;
  font-size: 1.5em;
}
.not-time {
  margin-left: 10px;
}
.not-time span:first-child {
  display: block;
  font-size: 1.5em;
}
</style>
