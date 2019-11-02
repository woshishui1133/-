<template>
  <div id="app">
    <div class="logo" v-show='!logoShow'>
     <van-loading type="spinner" color="red" class="dd" vertical>
       <img src="../src/assets/mao.png" alt="">
       <p>欢迎来到小范商城</p>
     </van-loading>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Loading } from 'vant'
Vue.use(Loading)
export default {
  components: {
  },
  name: 'App',
  data () {
    return {
      logoShow: false
    }
  },
  methods: {

  },
  created () {
    this.axios.get('https://api.it120.cc/small4/shop/goods/list').then(res => {
      if (res) {
        setInterval(() => {
          this.logoShow = true
        }, 2000)
      }
    })
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  font-size: 0.2rem;
}
.logo{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 25;
  width: 100%;
  height: 100%;
  .dd{
    width: 2rem;
    height: 2rem;
    border: 0.01rem solid;
    margin: 0 auto;
    margin-top:3.5rem;
    background: rgba(0,0,0,0.8);
    border-radius: 0.2rem;
  }
  img{
    width: 1rem;
    height: 1rem;
    border-radius: 0.3rem;
    margin: 0 auto;
    display: block;
  }
}
ul{
  list-style: none;
}
.quanx1{
    width: 7.5rem !important;
    img{
      width: 100% !important;
      height: 100% !important;
    }
    ul{
      width: 100% !important;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li{
        width: 100% !important;
        margin: 0.1rem 0;
        p{
          display: flex !important;
          span{
            display: block;
            width: 100%;
          }
          span:nth-child(1){
             text-align: left;
             margin-left: 0.3rem;
          }
          span:nth-child(2){
             display: block;
          }
        }
      }
    }
}
</style>
