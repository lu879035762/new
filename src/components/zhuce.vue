<template>
<div id="deng" className="registe">
<header><span class="left" @click="fa()">&lt;</span><span>用户注册</span></header>
    <div><input type="text" placeholder="请输入用户名"  v-model="username"></div>
    <div><input type="password" placeholder="请输入3~18位的密码" v-model="password" className='password1'></div>
    <div><input type="password" placeholder="确认密码"></div>
    <div><input type="text" placeholder="输入手机号码" v-model="phono" ><mt-button size="normal" style="width:60px;height:50px;margin-left:62px;font-size:12px;background:#ccc;">发送</mt-button> </div>
    <button class="dian" @click="register()"> 注册 </button>
</div>
</template>


<script>
import axios from 'axios';

export default {
    name:'zhuce',
    data(){
			return{
				username:'',
				password:'',
				phono:'',
				
            }
    },
    methods:{
        register(){
        var _this=this;
				if(_this.username==''||_this.password==''){
					alert('用户名或者密码不能为空！')
				}else{
                    this.$router.push('./LOgin')
                }
				
				},   
     
    fa(){
           this.$router.go(-1)
         }
         
         }
    }   



</script>

<style scoped="">
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
</style>

