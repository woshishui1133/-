<template>
  <div class="popul">
     <ul>
         <router-link :to="{path:'/particulars',query:{id:item.id}}" tag="li" v-for="(item,index) in proplist" :key="index">
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
</template>

<script>
import Product from '../../services/prodct-service'
import loca from '../../vuex/JSON'
const _product = new Product()
export default {
  computed: {

  },
  data () {
    return {
      proplist: []
    }
  },
  created () {
    // 人气推荐
    _product.renq().then(res => {
      console.log(res.data.data)
      this.proplist = res.data.data.splice(8, 4)
      this.$store.state.popularitylList = res.data.data
      console.log(this.$store.state.popularitylList)
    })
  },
  watch: {
    '$store.state.popularitylList': {
      handler: function () {
        loca.save('popul', this.$store.state.popularitylList)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss"  scoped>
.popul{
  //  width: 7.2rem;
    //  margin-left:0rem;
   ul{
     list-style: none;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     li{
       width: 50%;
       display: flex;
       flex-wrap: wrap;
       position: relative;
       img{
         height: 3.2rem;
         width: 2.5rem;
         margin: 0 auto;
       }
       div{
         width: 80%;
         position: absolute;
         left:0.6rem;
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
         width: 70%;
         height: 0.4rem;
         line-height: 0.4rem;
         margin: 0 auto;
       }
     }
   }
}
</style>
