<template>
  <div>
     <div class="tologin">
       <h1>账号登录</h1>
       <p>小范-严选商城欢迎你</p>
       <input type="text" placeholder="手机号码" v-model="mobile">
       <input type="password" placeholder="密码" v-model="mima">
       <button @click="denglu(mobile,mima)">登录</button>
       <router-link to="/" tag="p">忘记密码</router-link>
       <router-link to='/register' tag='p'>还没有注册？立即注册</router-link>
     </div>
  </div>
</template>

<script>
import Product from '../../services/prodct-service'
import loca from '../../vuex/JSON'
const _product = new Product()
export default {
  data () {
    return {
      mobile: '',
      mima: '',
      data: ''
    }
  },
  created () {
  },
  methods: {
    denglu (v, m) {
      console.log(v, m)
      let obj = {
        mobile: v,
        pwd: m
      }
      _product.register(obj).then(res => {
        console.log(res.data)
        if (res.data.code === 0) {
          let obj = {
            kk: res.data.data.token,
            yy: res.data.data.uid
          }
          this.$store.commit('fan', obj)
          this.$router.push('/')
        }
      })
    }
  },
  watch: {
    '$store.state.token': {
      handler: function () {
        loca.save('1902', this.$store.state.token)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tologin{
  width: 6.5rem;
  height: 8rem;
  margin: 0.5rem auto;
  box-shadow: slategray 0 0 0.02rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: slategray;
  h1{
   width: 4.5rem;
   height: 0.8rem;
   line-height: 0.8rem;
   font-size: 0.6rem;
   font-weight: inherit;
   margin-top:0.5rem;
  }
  p:nth-child(2){
    width: 4.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.35rem;
  }
  input{
    width: 4.5rem;
    height: 0.5rem;
    margin: 0.2rem 0;
    font-size: 0.25rem;
    background:#efefefef  url('../../assets/shou.png') no-repeat right;
    border: none;
    border-radius: 0.05rem;
    padding-left: 0.1rem;
  }
  input:nth-child(4){
    background:#efefefef  url('../../assets/yan.png') no-repeat right;

  }
 button{
   width: 3rem;
   height: 0.5rem;
   margin-top: 0.3rem;
   border: none;
   border-radius: 0.1rem;
   color: white;
   background-image: linear-gradient(to left,#CC3F9F,#C2A4CF,#A4CFC9)
  }
  p:nth-child(6){
    font-size: 0.1rem;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  p:nth-child(7){
     font-size: 0.3rem;
     color: skyblue;
  }
}
</style>
