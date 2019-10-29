<template>
  <div>
     <div class="shang">
       <p @click="comm">商品介绍</p>
       <p @click="pin(partId)">商品评价</p>
     </div>
     <div v-html='quans.content' v-show="!show" class="quanx1"> </div>
     <div class="pingl">
       <ul>
         <li v-for="(item,index) in pinlun" :key="index">
           <img src="../../assets/asw.png" alt="">
           <div class="con">
             <div>
               <span>匿名用户</span>
               <span>{{item.goods.goodReputationStr}}</span>
             </div>
             <p>{{item.goods.goodReputationRemark}}</p>
             <div>
               <span>{{item.goods.dateReputation}}</span>
               <span>选择规格：{{item.goods.goodsName}}</span>
             </div>
           </div>
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  computed: {
    quans () {
      return this.$store.state.commList
    },
    partId () {
      return this.$store.state.partId
    }
  },
  data () {
    return {
      show: false,
      pinlun: []
    }
  },
  created () {
    _product.part(this.$store.state.partId).then(res => {
      // console.log(res.data.data)
      this.$store.state.commList = res.data.data
      // console.log(this.$store.state.commList)
    })
  },
  methods: {
    comm () {
      this.show = false
    },
    pin (v) {
      console.log(v)
      this.show = true

      _product.reput(v).then(res => {
        console.log(res.data.data)
        this.pinlun = res.data.data
      })
    }
  }

}
</script>

<style scoped lang="scss">

.shang{
  width: 100%;
  display: flex;
  justify-content: space-around;
  p{
    width: 50%;
    text-align: center;
    font-size: 0.4rem;
    line-height: 0.8rem;
    height: 0.8rem;
  }
  p:hover{
    border-bottom: 0.04rem solid red;

  }
}
.pingl{
  ul{
    li{
      height: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 0.01rem solid slategray;
      img{
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }
      .con{
        height: 1rem;
        width: 5.5rem;
        div{
          margin: 0.1rem 0;
        }
        p{
          font-size: 0.25rem;
          height: 0.4rem;
        }
        div:nth-child(1){
          display: flex;
          span:nth-child(2){
            display: block;
            width: 0.8rem;
            height: 0.3rem;
            background: red;
            text-align: center;
            color: white;
            border-radius: 0.05rem;
            margin-left: 0.3rem;
          }
        }
        div:nth-child(3){
          span{
            color: slategray;
            font-size:0.18rem;
          }
        }
      }
    }
  }
}
</style>
