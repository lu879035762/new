import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


// var state={
//     count:0
// }

// var getters={
//     count:function(state){
//         return state.count;
//     }
// }


// var mutations={
//     add(a){
//           a.count++
//     },
//     jian(a){
//          a.count--
//     }
// }

// var actions={
//     add:({commit})=>{
//         commit('add')
//     },
//     jian:({commit})=>{
//         commit('jian')
//     }
// }
var modules={
   username:{
      state:{
          users:''
      },
      getters:{
         users:function(state){
             return state.users
         } 
      },
      mutations:{
          tap:function(a,b){
            a.users= b 
          }
      },
      actions:{
          tap:({commit},b)=>{
              commit('tap',b)
          }
      }
   } 
}

export default new Vuex.Store({

// state,
// getters,
// mutations,
// actions,
modules

})