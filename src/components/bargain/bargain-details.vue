<template>
  <div>
      <Shang></Shang>
       <router-link to="/bargain_info" tag="div">
         <div @click="barinId(csId)" class="kan"> 立即发起砍价，最低可砍到1元</div>
       </router-link>
  </div>
</template>

<script>
import Shang from '../popularity/shang-critic'
export default {
  components: {
    Shang
  },
  computed: {
    bas () {
      return this.$store.state.bainfo
    }
  },
  data () {
    return {
      pics: [],
      csId: '',
      baraa: []
    }
  },
  created () {
    let par = this.$route.query.barId

    this.axios.post(`https://api.it120.cc/small4/shop/goods/detail?id=${par}`).then(res => {
      console.log(res.data)
      this.csId = res.data.data.pics[0].goodsId
      console.log(this.csId)
      // console.log(this.bas)
      this.baraa = this.$store.state.bargainList.result
    })
  },
  methods: {
    barinId (v) {
      console.log(v)
      this.$store.state.barId = v
      this.baraa.filter(item => {
        if (item.goodsId === v) {
          this.$store.state.barinId = item.id
        }
      })
      console.log(this.$store.state.barinId)
    }
  }
}
</script>

<style scoped lang="scss">
*{
  font-size: 0.2rem;
}
.lun{
  button{
    width: 0.4rem;
    height: 0.4rem;
    border:none;
    border-radius: 50%;
    background: white;
    position: absolute;
    top:0.2rem;
    left: 0.2rem;
    z-index: 5;
    outline: none;
  }
  img{
    width: 100%;
    height: 100%;
  }
}
.con{
  height: 1.5rem;
  box-shadow: slategray 0 0.02rem 0;
  h3{
   font-size:0.4rem;
   margin:0.1rem 0.2rem;
  }
  &>p{
     font-size:0.25rem;
     color: slategray;
     margin: 0 0.2rem;
  }
  &>div{
   display: flex;
   justify-content: space-around;
   margin: 0.1rem 0.2rem;
   p{
     color: slategray;
   }
   p:nth-child(1){
     span{
       color: red;
       font-size: 0.25rem;
     }
   }
   p:nth-child(3){
     width: 60%;
     text-align: right;
   }
  }
}
.kan{
  height: 1rem;
  width: 100%;
  background: red;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.25rem;
  color: white;
  text-align: center;
  line-height: 1rem;
}
</style>
