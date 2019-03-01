<template>
<div id="deng">
<header><span class="left" @click="fan()">&lt;</span><span>用户登录</span></header>
    <div class="iconfont">&#xe623; <input type="text" placeholder="请输入用户名" id="username" v-model="username"></div>
    <div class="iconfont">&#xe718; <input type="text" placeholder="请输入密码" id="password" v-model="password"></div>
    <button class="dian" @click="tap()"> 确定 </button>
    <button class="zhu" @click="ta()">注册</button>
</div>
</template>



<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    name:'Login',
    data() {
    return {
      username: "",
      password: ""
    }
  },
  computed:{
     ...mapGetters(['users'])
  },
    methods:{
        ...mapActions(['tap']),
        tap(){
            var _this = this;
        if(_this.password==''||_this.username==''){
        alert('请输入用户名和密码！')
        }else{

         this.$store.commit('tap',this.username)


            this.$router.push('/shujia');

            
        }
        },
        
        ta(){
            this.$router.push('/zhuce')
        },
        fan(){
            this.$router.go(-1)
        }
    }
}
 </script>

<style scoped="">

@font-face {
  font-family: 'iconfont';  /* project id 1014402 */
  src: url('//at.alicdn.com/t/font_1014402_f5gl0y4oz0b.eot');
  src: url('//at.alicdn.com/t/font_1014402_f5gl0y4oz0b.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1014402_f5gl0y4oz0b.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1014402_f5gl0y4oz0b.woff') format('woff'),
  url('//at.alicdn.com/t/font_1014402_f5gl0y4oz0b.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1014402_f5gl0y4oz0b.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:32px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
header{
    height:40px;
    text-align: center;
    background: red;
    line-height: 40px;
    color: #fff
}
.left{
    font-size: 20px;
    position: absolute;
    left:20px;
} 
#deng div{
    margin-top:10px; 
    
    height:50px;
    border: 1px solid #000
}
input{
    border: 0;
    height: 45px;
    width: 70%;
}
.dian{
    width: 90%;
    height:40px;
    text-align: center;
    line-height: 40px;
    margin:30px 0 0 15px;
}
.zhu{
    width: 90%;
    height:40px;
    text-align: center;
    line-height: 40px;
    margin:30px 0 0 15px; 
}
</style>

