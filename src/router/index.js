import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import zhuce from '../components/zhuce'
import shouye from '../components/shouye'
import shujia from '../components/shujia'
import shucheng from '../components/shucheng'
import paihang from '../components/paihang'
import Mint from 'mint-ui'
import xiangqing from '../components/xiangqing'
import sousuo from '../components/sousuo'
Vue.use(Mint);
// import Mian from '../components/Mian'
// import Home from '../components/Home'
// import About from '../components/About'
// import Other from '../components/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
      
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/zhuce',
      component:zhuce
    },
    {
      path:'/shouye',
      component:shouye                      
    },
     {
          path:'/shujia',
          component:shujia
        },
        {
          path:'/shucheng',
          component:shucheng
        },
        {
          path:'/xiangqing/:id',
          component:xiangqing
        },
        {
          path:'/paihang',
          component:paihang
        },
        {
          path:'/sousuo',
          component:sousuo
        }
    // {
    //   path:'/mian',
    //   component:Mian,
    //   children:[
    //     {
    //       path:'/home',
    //       component:Home
    //     },
    //     {
    //       path:'/about',
    //       component:About
    //     },
    //     {
    //       path:'/other',
    //       component:Other
    //     }
    //   ]
    // }
  ]
})
