import Home from './components/Home/Home.vue'
import AddPost from './components/AddPost/AddPost.vue'
import ShowBlog from './components/Home/components/ShowBlog.vue'
import ShowPhoto from './components/Home/components/ShowPhoto.vue'
import ShowDemo from './components/Home/components/ShowDemo.vue'


export default[
   { path:"/", component:Home },
   { path:'/add',component:AddPost},
   { path:'/show/post',component:ShowBlog },
   { path:'/show/photo',component:ShowPhoto },
   { path:'/show/demo',component:ShowDemo },

]