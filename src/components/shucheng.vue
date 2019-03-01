<template>

    <div id="den">
        <header>
    <span class="iconfont" @click="fan()">&#xe600;</span>
    <span>我的书架</span>
    <span class="iconfont">&#xe602;</span>
    <span class="iconfont">&#xe601;</span>
</header>
<section>
    <h4 style="margin-top:10px;">欢迎：<span style="color:#f00">{{this.$store.state.username.users}}&nbsp;&nbsp;&nbsp;</span>登录</h4>
<div>
                <div to="/xiangqing" class="xiang"> 
                                                       
                    <div class="qing">
                    <span>书籍名称：医门宗师</span>
                    <p>类型：都市</p>
                    <p>作者：蔡晋</p>
                    <p>简介：从高山晕倒的那一刻开始，世间多了一个医门传人。</p>
                    </div>              
               </div> 
               <router-link tag="span" to="/shujia"><button style="color:#f00;width:80px;margin-left:120px">删除</button></router-link>
              </div>
              
</section>
<footer>
<router-link tag="span" to="/shucheng"><p class="iconfont">&#xe604;</p><em>书架</em></router-link>
<router-link tag="span" to="/shouye"><p class="iconfont">&#xe614;</p><em>书城</em></router-link>
<router-link tag="span" to="/paihang"><p class="iconfont">&#xe603;</p><em>排行榜</em></router-link>
</footer>


    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';

export default {
    name:'shucheng',
    compuyed:{
        ...mapGetters(['users'])
    },
    methods:{
       fan(){
            this.$router.push('./Login')
       },
       shu(){
         this.$router.push('./shouye')  
       }
   }
}
</script>
<style scoped="">
@font-face {
  font-family: 'iconfont';  /* project id 1014402 */
  src: url('//at.alicdn.com/t/font_1014402_bonntfsd9os.eot');
  src: url('//at.alicdn.com/t/font_1014402_bonntfsd9os.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1014402_bonntfsd9os.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1014402_bonntfsd9os.woff') format('woff'),
  url('//at.alicdn.com/t/font_1014402_bonntfsd9os.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1014402_bonntfsd9os.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:22px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
#den{
    height: 100vh;
    display: flex;
    flex-direction: column;
}

header{
    height:40px;
    
    background: red;
    line-height: 40px;
    color: #fff
}
header span{
    float: left;
    width: 100px;
    text-align: center;
    line-height: 50px;
}

section{
    flex: 1;
}
.xiang{
    display: block;
    height:150px;
    margin-top: 5px;
}
.xiang .qing{
    background: url(../assets/xiang.gif) no-repeat; 
    background-size: 112px 118px;
    height:100px;
    margin-top: 10px;
}
.xiang .qing span,p{
    margin-left:140px; 
     
}
.router-link-active{
    color: #f00;
}

footer p{margin-left: 0.04rem;}
footer  em{font-style: normal;}

section{
    flex: 1;
}
footer{
    overflow: hidden;
    border-top: rgb(138, 122, 122);
}
footer span{
    width:33.3%;
    float: left;
    text-align: center
}

section div img{
   
    width: 40%;
   
}
section div div{
    margin: 110px 0 0 10px;
    text-align: center;
}
section div h4{
     text-align: center;
     margin: 110px 0 0 0;
}
</style>
