<template>
  <div>
    <div>
      <div class="top">
        <!-- <button>回</button> -->
        <router-link to='/' tag="button">回</router-link>
        <p>确定付款</p>
      </div>
       <div class="order">
         <p class="price">￥</p>
         <div class="order_con">
           <p>商品总价：<span>￥{{ order[0].amount}}</span></p>
           <p>订单号：{{ order[0].orderNumber}}</p>
         </div>
       </div>
       <Moren></Moren>
       <p>{{order}}</p>
    </div>
  </div>
</template>

<script>
import Moren from './morendizhi'
import Product from '../../services/prodct-service'
const _product = new Product()

export default {
  components: {
    Moren
  },
  computed: {
    order () {
      return this.$store.state.ordernumber.filter(item => {
        if (item.id === this.$store.state.orderid) {
          return item
        }
      })
    }
  },
  data () {
    return {
      payment: ''
    }
  },
  created () {
    let token = JSON.parse(window.localStorage.getItem('1902'))
    this.$store.state.ordernumber = JSON.parse(window.localStorage.getItem('order'))
    console.log(token)
    let id = this.$route.query.orderId
    console.log(this.$route.query.orderId)
    _product.orderxq(token[0].kk, id).then(res => {
      console.log(res.data)
      this.$store.state.orderxq.push(res.data.data)
    })
  }

}
</script>

<style lang='scss' scoped>
.top{
   height: 0.8rem;
   display:flex;
   justify-content: space-around;
   align-items: center;
   border-bottom: 0.01rem solid slategray;
   button{
    width: 0.4rem;
    height: 0.4rem;
    border:0.01rem solid slategray;
    border-radius: 50%;
    background: white;
    position: fixed;
    top:0.2rem;
    left: 0.2rem;
    z-index: 5;
    outline: none;
  }
 }
.order{
    height: 1rem;
    border-bottom: 0.01rem solid slategray;
    display: flex;
    align-items: center;
    .price{
      width: 0.4rem;
      height: 0.4rem;
      border: 0.01rem solid red;
      border-radius: 50%;
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.3rem;
      color: red;
      margin-left: 0.8rem;
    }
    .order_con{
      margin-left:0.4rem;
      height: 0.7rem;
      p{
        span{
          color: red;
          font-weight: 800;
        }
      }
      p:nth-child(2){
         margin-top: 0.1rem;
         color: slategray;
      }
    }
 }
 .dd{
   width: 100%;
 }
</style>
