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
      <h2>排行榜</h2>
     
    </span>
    <span><router-link tag="span" to="/shouye">返回</router-link></span> 
         </header>

         <section>
              <ul v-for="(item,i) in list"><router-link :to="'/xiangqing/'+item.pid">
            <li>
                <img :src="item.pimg"/>
                <div>
                 <span style="font-size:16px;">书籍名称：{{item.pdesc}}}</span>
                    <p style="font-size:14px;">类型：都市</p>
                    <p style="font-size:14px;">作者：蔡晋</p>
                    <p style="font-size:12px;">简介：我可救人，也能杀人！医门传承成就宗师传奇！</p>
                </div>  
            </li>
           </router-link> 
        </ul>
         </section>
       
       <footer>
          <router-link tag="span" to="/shujia"><p class="iconfont">&#xe604;</p><em>书架</em></router-link>
          <router-link tag="span" to="/shouye"><p class="iconfont">&#xe614;</p><em>书城</em></router-link>
          <router-link tag="span" to="/paihang"><p class="iconfont">&#xe603;</p><em>排行榜</em></router-link>
       </footer>
    </div>
</template>
<script>
 import axios from 'axios';
export default {
    name:'paihang',
    data(){
       return {
          
           list:[]
       }
   },
   mounted(){
       var _this=this
      axios({
          method:'get',
          url:'http://jx.xuzhixiang.top/ap/api/productlist.php'
      }).then(function(data){
        //   console.log(_this.data.data);
            _this.list=data.data.data
      })   
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

ul{
   margin-top:30px;
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
