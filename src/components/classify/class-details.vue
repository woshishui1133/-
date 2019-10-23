<template>
  <div class="cladeta">
    <div class="top">
      <router-link to="/classify" tag="span">返回</router-link>
      <p>分类商品</p>
    </div>
     <ul>
       <li v-for="(item,index) in fenxq" :key="index">
         <div>
           <img :src="item.pic" alt="">
           <p>{{item.characteristic}}</p>
         </div>
          <h2>{{item.name}}</h2>
          <div>
            <h1 v-show="item.minPrice>=1">￥{{item.minPrice}}.00</h1>
            <h1 v-show="item.minPrice<1">￥{{item.minPrice}}</h1>
            <span>已售{{item.numberSells}}</span>
          </div>
       </li>
     </ul>
  </div>
</template>

<script>
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  computed: {
    fenxq () {
      return this.$store.state.quanList.filter(item => {
        if (item.categoryId === this.cladetaId) {
          return item
        }
      })
    }
  },
  data () {
    return {
      cladetaId: '',
      fenxx: []
    }
  },
  methods: {

  },
  created () {
    this.cladetaId = this.$route.query.cladetaId
    // console.log(this.cladetaId)
    _product.fenxq().then(res => {
      this.$store.state.quanList = res.data.data
      // console.log(this.$store.state.quanList)
    })
  }
}
</script>

<style lang="scss" scoped>
*{
  font-size:0.2rem;
}
.cladeta{
  width: 100%;
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-top:0.3rem;
    // justify-content: space-between;
    li{
      width: 45%;
      margin-left:0.25rem;
      div:nth-child(1){
        position: relative;
        img{
            width: 100%;
            height: 4rem;
         }
          p{
            width: 100%;
            height: 0.4rem;
             overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
            background: palegoldenrod;
            position: absolute;
            bottom:0rem;
            left:0;
            line-height: 0.4rem;
            color: darkgoldenrod;
          }
      }
      &>p{
        width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }

      h2{
        font-size: 0.20rem;
      }
      div:nth-child(3){
        display: flex;
        height: 0.4rem;
        align-items: center;
        justify-content: space-between;
        span{
          color: slategrey;
        }
        h1{
          color: red;
        }
      }
    }
  }
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
</style>
