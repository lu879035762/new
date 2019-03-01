<template>
<router-link tag="div" to="/shouye">
<div class="search">

    <header>
    <span class="iconfont"> &#xe600; </span>    
    
    <span class="te">
      <span><input type="text" placeholder="请输入书名/作者等"/></span>
     
    </span>
    <span class="iconfont">&#xe623;</span>
    
</header>
                
                <section>
                    <div>
                        <h2>大家都在找</h2>
                        <ul>
                            <li>斗破苍穹</li>
                            <li>星辰变</li>
                        </ul>
                    </div>
                    <div>
                        <h2>搜索历史</h2>
                        <ul>
                            
                        </ul>
                        <div><span >清除历史记录</span> </div>
                    </div>
                </section>
            </div>
</router-link>
    
</template>
<script>
export default {
    name:'sousuo'
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

li{
  list-style: none;
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
    
}

.active p,.active span{
  color: #53748c;
  font-weight: 700;
}

.search{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.search header{
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search header span{
    font-size: 1.2rem;
    
   
    text-align: center;
   
}

.search section{
    flex: 1;
    border-bottom:0 !important;
    overflow: auto;
    padding: 0.1rem 0.2rem;
}
.search section>div h2{
    font-size: 0.2rem;
}
.search section>div:first-of-type ul{
    display: flex;
    margin-top: 0.2rem;
}
.search section>div:first-of-type ul li{
    padding: 0.05rem 0.1rem;
    margin-right: 0.2rem;
    border: 0.01rem solid #eee;
}
.search section>div:nth-of-type(2){
    margin-top: 0.2rem;
}
.search section>div:nth-of-type(2) ul{
    margin-top: 0.1rem;
}
.search section>div:nth-of-type(2) ul li{
    border-bottom: 0.01rem solid #ccc;
    padding: 0 0.05rem;
    line-height: 0.3rem;
    color: #999;
}
.search section>div:nth-of-type(2) div{
    text-align: center;
    line-height: 0.4rem;
}
</style>
