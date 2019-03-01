<template>
<div id="deng">
<header>
    <span>
      <select name="男生">
            <option>男生</option>
            <option>女生</option>
      </select>  
    </span>
    <span class="te">
      <router-link tag="span" to="/sousuo"><input type="text" value="搜索"/></router-link>
     
    </span>
    <span><router-link tag="span" to="/paihang">分类</router-link></span>
    
</header>
<section>
<div style="flex: 0">
 <mt-navbar v-model="selected">
  <mt-tab-item id="1"><router-link tag="span" to="/paihang">精选</router-link></mt-tab-item>
  <mt-tab-item id="2">榜单</mt-tab-item>
  <mt-tab-item id="3">书单</mt-tab-item>
</mt-navbar>
</div>
<div>
<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
   <!-- <mt-swipe :auto="4000">
  <mt-swipe-item><img src="../assets/lunb1.gif"/></mt-swipe-item>
  <mt-swipe-item><img src="../assets/lunbo2.gif"/></mt-swipe-item>
  <mt-swipe-item><img src="../assets/lunbo3.gif"/></mt-swipe-item> 
</mt-swipe> -->
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="(n,i) in 14" :title="'猜你喜欢 ' + n" :key='i'/>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="(n,i) in 16" :title="'最爱 ' + n" :key='i' />
  </mt-tab-container-item>
</mt-tab-container>
</div>

<div id="lunbo">
    <mt-swipe :auto="2000">
  <mt-swipe-item><img src="../assets/lunb1.gif"/></mt-swipe-item>
  <mt-swipe-item><img src="../assets/lunbo2.gif"/></mt-swipe-item>
  <mt-swipe-item><img src="../assets/lunbo3.gif"/></mt-swipe-item>
</mt-swipe> 
</div>
   
<div class="lunxia">
<router-link tag="span" to="/shouye"><p class="iconfont">&#xe636;</p><em>推荐</em></router-link>
<router-link tag="span" to="/paihang"><p class="iconfont">&#xe606;</p><em>评分</em></router-link>
<router-link tag="span" to="/shujia"><p class="iconfont">&#xe605;</p><em>收藏</em></router-link>
<router-link tag="span" to="/paihang"><p class="iconfont">&#xe645;</p><em>热更</em></router-link>
</div>

<div id="biao">
     
        <span class="iconfont" style="color:red;font-size:18px">&#xe65a;重磅推荐</span>
        <span class="te1"><router-link tag="span" to="/paihang">更多&gt;</router-link></span>
   
</div>
<div class="shu">  
<ul>
    <li>
      <router-link tag="span" to="/paihang"><p ><img src="../assets/s1.gif"/></p><em>斗罗大陆||</em></router-link>  
    </li>
    <li>
      <router-link tag="span" to="/paihang"><p ><img src="../assets/s2.gif"/></p><em>极品兵王</em></router-link>  
    </li>
    <li>
      <router-link tag="span" to="/paihang"><p ><img src="../assets/s3.gif"/></p><em>东皇大帝</em></router-link>  
    </li>
</ul>
</div>
<article>
                <div>
                <router-link  tag="div" to="/paihang" class="xiang">
                <h2 class="iconfont" style="color:red;margin-left:10px;font-size:18px;">&#xe65a;热门推荐</h2>             
                     
                    <div class="qing">
                    <span>书籍名称：医门宗师</span>
                    <p>类型：都市</p>
                    <p>作者：蔡晋</p>
                    <p>简介：从高山晕倒的那一刻开始，世间多了一个医门传人。</p>
                    </div>
               </router-link> 
              </div>
              <div>
                <router-link  tag="div" to="/paihang" class="xiang1">                                                
                    <div class="qing1">
                    <span>书籍名称：次元远征</span>
                    <p>类型：都市</p>
                    <p>作者：蔡晋</p>
                    <p>简介：我可救人，也能杀人！医门传承成就宗师传奇！</p>
                    </div>
               </router-link> 
              </div> 
               <div>
                <router-link  tag="div" to="/paihang" class="xiang">                                    
                    <div class="qing">
                    <span>书籍名称：都市神医</span>
                    <p>类型：都市</p>
                    <p>作者：蔡晋</p>
                    <p>简介：从高山晕倒的那一刻开始，世间多了一个医门传人。</p>
                    </div>
               </router-link> 
              </div>
              <div>
                <router-link  tag="div" to="/paihang" class="xiang1">                                                
                    <div class="qing1">
                    <span>书籍名称：次元远征</span>
                    <p>类型：都市</p>
                    <p>作者：蔡晋</p>
                    <p>简介：我可救人，也能杀人！医门传承成就宗师传奇！</p>
                    </div>
               </router-link> 
              </div> 

              <div class="shu">  
<ul>
    <li>
      <router-link tag="span" to="/paihang"><p ><img src="../assets/s1.gif"/></p><em>斗罗大陆||</em></router-link>  
    </li>
    <li>
      <router-link tag="span" to="/paihang"><p ><img src="../assets/s2.gif"/></p><em>极品兵王</em></router-link>  
    </li>
    <li>
      <router-link tag="span" to="/paihang"><p ><img src="../assets/s3.gif"/></p><em>东皇大帝</em></router-link>  
    </li>
</ul>
</div>       
</article>

</section>
<footer>
<router-link tag="span" to="/shujia"><p class="iconfont">&#xe604;</p><em>书架</em></router-link>
<router-link tag="span" to="/shouye"><p class="iconfont">&#xe614;</p><em>书城</em></router-link>
<router-link tag="span" to="/paihang"><p class="iconfont">&#xe603;</p><em>排行榜</em></router-link>
</footer>
    
</div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

import { Swipe, SwipeItem } from 'mint-ui';

       
 
export default {
   name :'shouye',
   data(){
       return {
           selected:'',
         
       }
   }
   
  
   
}
</script>

<style scoped="">
@font-face {
  font-family: 'iconfont';  /* project id 1014402 */
  src: url('//at.alicdn.com/t/font_1014402_l0wgppbw2za.eot');
  src: url('//at.alicdn.com/t/font_1014402_l0wgppbw2za.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1014402_l0wgppbw2za.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1014402_l0wgppbw2za.woff') format('woff'),
  url('//at.alicdn.com/t/font_1014402_l0wgppbw2za.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1014402_l0wgppbw2za.svg#iconfont') format('svg');
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

.mint-tab-container-item{
    height:150px;
}
.mint-swipe-items-wrap > div

.mint-swipe-items-wrap > div{
    width: 414.4px;
    height:150px;
}
.mint-swipe-items-wrap > div img{
    display: block;
    width: 414.4px;
    height:150px;
}

#lunbo{
    display: block;
    width: 100%;
    height:150px;
}
article{
    display: block;
   
}
article .xiang{
    display: block;
    height:150px;
    margin-top: 5px;
}
article .xiang1{
    display: block;
    height:120px;
    margin-top: 5px;
}
article .xiang .qing{
    background: url(../assets/xiang.gif) no-repeat;
    background-size: 112px 118px;
    height:100px;
    margin-top: 10px;
}
article .xiang1 .qing1{
    background: url(../assets/xiang1.gif) no-repeat;
    background-size: 112px 118px;
    height:100px;
    margin-top: 10px;
}
article .xiang1 .qing1 span,p{
    margin-left:120px; 
     
}
article .xiang .qing span,p{
    margin-left:140px; 
     
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
    width:25%;
    float: left;
    text-align: center
}


.shu ul li p,em{
     margin-left: 0.04rem;
     font-style: normal;
    
}
.shu{
    margin-top:10px;
   display: block;
   height:140px;
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
#biao{
    margin-top:10px;
    display:block;
    
}
#biao span{
    margin: 5px;
    width:100px;
    height:32px; 
}
#biao .te1{
    margin-left:245px; 
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
.router-link-active{
    color: #f00;
}
</style>

