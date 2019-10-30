<template>
<div class="ge">

  <div class="guess">
     <h2>猜你喜欢</h2>
     <ul>
         <router-link :to="{path:'/particulars',query:{id:item.id}}" tag="li" v-for="(item,index) in populist" :key="index">
          <img :src="item.pic" alt="">
          <div>
            <p>{{item.name}}</p>
            <p>{{item.characteristic}}</p>
          </div>
          <h3 v-show="item.minPrice>=1">￥{{item.minPrice}}.00</h3>
          <h3 v-show="item.minPrice<1">￥{{item.minPrice}}</h3>
       </router-link>
     </ul>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      populist: []
    }
  },
  created () {
    // 全部商品信息
    this.$store.state.popularitylList = JSON.parse(window.localStorage.getItem('popul'))
    let num = Math.floor(Math.random() * this.$store.state.popularitylList.length)
    console.log(num)
    if (num > 4) {
      this.populist = this.$store.state.popularitylList.splice((num - 4), 4)
    } else {
      this.populist = this.$store.state.popularitylList.splice(num, 4)
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.ge{
   position: relative;
   margin-top:3rem;
}
.guess{
    width: 100%;
    height: 100%;
    background: white;
    position: relative;
    bottom:1.8rem;
    left: 0;
h2{
  text-align: center;
  height: 0.5rem;
}
ul{
     list-style: none;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     li{
       width: 40%;
       position: relative;
       img{
         height: 3rem;
       }
       div{
         width: 80%;
         position: absolute;
         bottom:0.7rem;
         p{
           width: 80%;
           overflow: hidden;
           text-overflow:ellipsis;
           white-space: nowrap;
           margin-top: 0.1rem ;
         }
         p:nth-child(2){
           color: slategray;
         }
       }
       h3{
         color: red;
       }
     }
   }
}

</style>
