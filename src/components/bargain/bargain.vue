<template>
  <div class="bargain">
      <div class="top">
        <router-link to="/" tag='span'>返回</router-link>
        <p>砍价列表</p>
      </div>
       <ul>
         <router-link :to="'/bargain-details/'+item.id" v-for="(item,index) in bargainList" :key="index" tag="li" >
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
export default {
  computed: {
    bargainList () {
      return this.$store.state.bargainList.goodsMap
    }
  },
  methods: {
    barId (v) {
      this.$store.state.partId = v
      // console.log(v)
    }
  }

}
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding: 0;
  font-size: 0.2rem;
}
.top{
     display: flex;
     justify-content: space-around;
     height: 0.6rem;
     align-items: center;
     box-shadow: slategrey 0 0.02rem 0;
     p{
       width: 80%;
       text-align: center;
     }
   }
.bargain{

    &>ul{
      height: 3rem;
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
           p{
             font-size:0.25rem;
           }
           &>p:nth-child(2){
             font-size:0.2rem;
             color: slategray;
             margin-top:0.1rem;
           }
           ul{
             height: 0.3rem;
             display: flex;
             justify-content: space-between;
             margin-top:0.3rem;
             li{
               width: 33.3%;
               height: 0.8rem;
               display: flex;
               flex-wrap: wrap;
               color: slategray;
               text-align: center;
               p{
                 width: 100%;
                  font-size: 0.2rem;
               }
             }
             li:nth-child(1){
               p:nth-child(1){
                 color: red;
                 font-weight: 900;
               }
               p{
                 color: black;
               }
             }
              li:nth-child(2){
                border-left:0.01rem solid slategray;
                border-right:0.01rem solid slategray;
              }

           }
         }
      }
    }
  }
</style>
