<template>
    <div id="deng">
           <header>
            <span class="iconfont"><router-link tag="span" to="/paihang">&#xe6e1;</router-link></span>         
    <span class="te">
      <h2>书籍详情</h2>
     
    </span>
    <span><router-link tag="span" to="/shujia">书架</router-link></span> 
         </header>
         <section>
        <ul style="background:#e39eda">
            <li>
                <img :src="detail.pimg"/>
                <div>
                 <span style="font-size:16px;">书籍名称：{{detail.pname}}</span>
                    <p style="font-size:14px;">类型：都市</p>
                    <p style="font-size:14px;">作者：蔡晋</p>
                    <p style="font-size:12px;">状态：连载</p>
                </div>  
            </li>
        </ul>
            <div class="lunxia">
            <span><p class="iconfont" style="color:#1ce391">&#xe636;</p><em>推荐</em></span>
            <span><p class="iconfont" style="color:#6455bf">&#xe63b;</p><em>分享</em></span>
            <span><p class="iconfont" style="color:#ea0606">&#xe622;</p><em>报错</em></span>
            </div>
            <hr/>
         <h3 style="margin-left:5px;">简介</h3>
          <p style="margin-top:20px;background:#dfe8a2;height:110px;line-height:36px;text-indent:2em">{{detail.pname}}{{detail.pdesc}}{{detail.pid}}</p>
        <h3 style="border-top:2px solid #d5d3d3;margin:10px 0 0 5px;">目录</h3>
          <p style="margin-top:20px;background:#dfe8a2;height:90px;line-height:36px;text-indent:2em">最新更新：{{detail.pid}}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第458章 欲擒故纵</p>
        <hr/>
        <h3>同类推荐</h3>
<div class="shu">  
<ul>
    <li>
      <router-link tag="span" :to="'/xiangqing/'+detail.pid"><p ><img src="../assets/s1.gif"/></p><em style="width:16px;">斗罗大陆</em></router-link>  
    </li>
    <li>
      <router-link tag="span" :to="'/xiangqing/'+detail.pid"><p ><img src="../assets/s2.gif"/></p><em>极品兵王</em></router-link>  
    </li>
    <li>
      <router-link tag="span" :to="'/xiangqing/'+detail.pid"><p ><img src="../assets/s3.gif"/></p><em>东皇大帝</em></router-link>  
    </li>
</ul>
</div>  
        </section>
<footer>
<router-link tag="span" to="/shucheng"><p class="iconfont">&#xe604;</p><em>加入书架</em></router-link>
<router-link tag="span" :to="'/xiangqing/'+detail.pid"><p class="iconfont">&#xe614;</p><em>立即阅读</em></router-link>
<router-link tag="span" to="/paihang"><p class="iconfont">&#xe603;</p><em>全本缓存</em></router-link>
</footer>
    </div>
</template>
<script>
 import axios from 'axios';
export default {
    name:'xiangqing',
    data(){
       return {
          
           detail:''
       }
   },
   mounted(){
       var _this=this
      axios({
         
          url:'http://jx.xuzhixiang.top/ap/api/detail.php',
          params:{id:_this.$route.params.id}
      }).then(function(data){
            _this.detail=data.data.data
      })   
   }
}
</script>
<style scoped="">
@font-face {
  font-family: 'iconfont';  /* project id 1014402 */
  src: url('//at.alicdn.com/t/font_1014402_lwut1pt71u.eot');
  src: url('//at.alicdn.com/t/font_1014402_lwut1pt71u.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1014402_lwut1pt71u.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1014402_lwut1pt71u.woff') format('woff'),
  url('//at.alicdn.com/t/font_1014402_lwut1pt71u.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1014402_lwut1pt71u.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:22px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
    #deng{
    height: 100vh;
    display: flex;
    flex-direction: column;
    
}
header{
    
    height:40px;
    display: block;
    background: red;
    line-height: 40px;
    color: #fff
}
header span{
    float: left;
    width: 100px;
    text-align: center;
   
}
header .te{
    width: 161px;
    margin-left: 40px
}
section{
     flex: 1;
    overflow:auto
}
ul{
   
   height:100px;
}
li img{
     display: block;
     width:80px;
     height:80px;
      float: left;
      margin-top:12px;
}
li div{
    width: 300px;
     float: left;
     margin-left:25px; 
}

.lunxia{
     display: block;
     height:50px;
     margin-top: 10px;
}
.lunxia p,em{
     margin-left: 0.04rem;
     font-style: normal;
}
.lunxia span{
    width:33.3%;
    float: left;
    text-align: center
}
.shu{
    margin-top:10px;
   display: block;
   height:135px;
}
.shu ul li{
    list-style: none;
    float: left;
    width:33%;
    
    text-align: center
}
.shu ul li p img{
     display: block;
     width: 92px;
    
     padding-left: 20px;
}
footer{
    display:flex;    
    margin-top:10px; 
    height:45px;
    
    overflow: hidden;
    border-top: rgb(138, 122, 122);
}
footer p{margin-left: 0.04rem;}
footer  em{font-style: normal;}



footer span{
    width:33.3%;
    float: left;
    text-align: center
}
</style>
