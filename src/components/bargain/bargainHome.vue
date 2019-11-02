<template>
  <div class="bargain">
      <ul>
          <router-link :to="{path:'/bargain-details',query:{barId:item.id}}" tag="li" v-for="(item,index) in bargainList" :key="index">
           <img :src="item.pic" alt="" @click="barId(item.id)">
           <div @click="barId(item.id)">
             <p>{{item.name}}</p>
             <p>{{item.characteristic}}</p>
             <ul>
               <li>
                 <p>￥{{item.minPrice}}.00</p>
                 <p>底价</p>
               </li>
               <li>
                 <p>￥{{item.originalPrice}}.00</p>
                 <p>原价</p>
               </li>
               <li>
                 <p>{{item.stores}}</p>
                 <p>限量</p>
               </li>
             </ul>
           </div>
        </router-link>
       </ul>
  </div>
</template>

<script>
import loca from '../../vuex/JSON'
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  computed: {
    bargainList () {
      return this.$store.state.bargainList.goodsMap
    }
  },
  data () {
    return {
    }
  },
  methods: {
    barId (v) {
      this.$store.state.partId = v
      // console.log(v)
    }
  },
  created () {
    // 砍价
    _product.list().then(res => {
      console.log(res.data)
      this.$store.state.bargainList = res.data.data
    })
  },
  watch: {
    '$store.state.bargainList': {
      handler: function () {
        loca.save('bar', this.$store.state.bargainList)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
}
.bargain{
  height: 7.4rem;
  &>ul{
   height: 7.2rem;
   overflow: hidden;
   &>li{
     display: flex;
     height: 2.4rem;
     justify-content: space-around;
     border-bottom: 0.01rem solid silver;
     align-items: center;
     img{
       width: 2rem;
       height: 2rem;
     }
      div{
         width: 60%;
         height: 1.8rem;
         position: relative;
         p{
             font-size:0.25rem;
          }
          &>p:nth-child(2){
             font-size:0.2rem;
             color: slategray;
             margin-top:0.1rem;
          }
          ul{
            display: flex;
            justify-content: space-between;
            height: 0.8rem;
            position: absolute;
            left:0;
            bottom:0;
           li{
               width: 33.3%;
               display: flex;
               flex-wrap: wrap;
               color: slategray;
               p{
                 width: 100%;
                  font-size: 0.2rem;
               }
             }
             &>li:nth-child(1){
               p:nth-child(1){
                 color: red;
                 font-weight: 900;
               }
               p{
                 color: black;
               }
             }
           }
      }
   }
  }

  }
</style>
