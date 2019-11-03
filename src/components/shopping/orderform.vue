<template>
  <div>
    <div class="order">
      <div class="top">
        <router-link to="/shopping" tag="button">回</router-link>
        <p>确定订单</p>
      </div>
      <router-link to='/site' tag="div" class="site">
        <div class="site_left" v-show="!moren.id">
          <p><i class="el-icon-plus"></i></p>
          <p>新增收货地址</p>
        </div>
        <!-- 默认地址组件 -->
        <Moren></Moren>
        <p><i class="el-icon-arrow-right"></i></p>
      </router-link>
      <div class="order_con">
        <p class="ord_top">商品列表</p>
        <ul>
          <li v-for="(item,index) in orderlist" :key="index">
              <img :src="item.barinfo.basicInfo.pic" alt="">
              <div class="ordxq">
                <p>{{item.barinfo.basicInfo.name}}</p>
                <div class="ordxq_left">
                  <p>{{item.name}}</p>
                  <p>{{item.size}}</p>
                  <p>{{item.name1}}</p>
                  <p>{{item.color}}</p>
                </div>
              </div>
              <div class="ordxq_right">
                <p>￥{{item.barinfo.basicInfo.minPrice}}</p>
                <p>X{{item.num}}</p>
              </div>
          </li>
        </ul>
      </div>
      <div class="dist">
        <div>
          <p>配送方式</p>
          <p>快递</p>
        </div>
        <div>
          <p>备注</p>
          <input type="text" placeholder="如需备注请输入">
        </div>
         <div>
          <p>商品金额</p>
          <p>￥{{prices}}</p>
        </div>
      </div>
      <div class="submit">
          <p>合计：￥{{prices}}</p>
           <router-link :to="{path:'/ordernumber',query:{orderId: this.$store.state.orderid}}" tag='p'>
          <span @click="dingdan1">提交订单</span>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Moren from './morendizhi'
import Product from '../../services/prodct-service'
import loca from '../../vuex/JSON'
import Qs from 'Qs'
import Axios from 'axios'
const _product = new Product()
export default {
  components: {
    Moren
  },
  computed: {
    // 总价
    prices () {
      return this.$store.getters.prices
    },
    moren () {
      return this.$store.state.moren
    }
  },
  data () {
    return {
      dizhilist: [],
      token: '',
      orderlist: [],
      payment: []
    }
  },
  created () {
    let token = JSON.parse(window.localStorage.getItem('1902'))
    this.$store.state.gouwuList = JSON.parse(window.localStorage.getItem('gouwu'))
    this.token = token[0].kk
    // console.log(this.token)
    _product.default(token[0].kk).then(res => {
      // console.log(res.data)
      this.$store.state.moren = res.data.data
      console.log(this.$store.state.moren)
    })

    // 购物车数据过滤
    this.$store.state.gouwuList.map(item => {
      if (item.checked === true) {
        this.orderlist.push(item)
        console.log(this.orderlist)
      }
    })
    let aa = {
      'goodsId': '',
      'number': '',
      'propertyChildIds': '',
      'logisticsType': ''
    }
    this.orderlist.map(item => {
      aa = {
        'goodsId': item.barinfo.basicInfo.id,
        'number': item.num,
        'propertyChildIds': `${item.sizeid},${item.colorid}`,
        'logisticsType': 0
      }
      this.payment.push(aa)
    })
    console.log(this.payment)
    // 订单号生成
    let obj = {
      token: token[0].kk,
      goodsJsonStr: JSON.stringify(this.payment)
    }
    Axios({
      method: 'post',
      url: 'https://api.it120.cc/small4/order/create',
      data: Qs.stringify(obj)
    }).then(res => {
      console.log(res.data)
      this.$store.state.orderid = res.data.data.id
      this.$store.state.ordernumber.push(res.data.data)
      console.log(this.$store.state.ordernumber)
    })
  },
  methods: {
    // 提交订单
    dingdan1 () {
      let arr = []
      this.$store.state.gouwuList.forEach(item => {
        if (item.checked === false) {
          arr.push(item)
        }
      })
      this.$store.state.gouwuList = arr
    }
  },
  watch: {
    '$store.state.gouwuList': {
      handler: function () {
        loca.save('gouwu', this.$store.state.gouwuList)
      },
      deep: true
    },
    '$store.state.ordernumber': {
      handler: function () {
        loca.save('order', this.$store.state.ordernumber)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.order{
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
 .site{
   display: flex;
   height: 1rem;
   border-bottom: 0.01rem solid palevioletred;
   justify-content: space-between;
   align-items: center;
   .site_left{
      width: 3rem;
      display: flex;
      justify-content: center;
      p:nth-child(1){
        width: 0.4rem;
        height: 0.4rem;
        background: steelblue;
        color: white;
        text-align: center;
        line-height: 0.4rem;
        .el-icon-plus{
          font-size: 0.3rem;
        }
      }
    }

    .el-icon-arrow-right{
      font-size: 0.3rem;
      padding-right:0.3rem;
    }
 }
 .order_con{
    .ord_top{
      height: 0.6rem;
      line-height: 0.6rem;
      padding-left: 0.4rem;
    }
    ul{
      li{
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 0.01rem solid slategrey;
        height: 2rem;
        img{
          width: 1.5rem;
          height: 1.5rem;
        }
        .ordxq{
          width: 4.5rem;
          height: 1.5rem;
          p{
            font-size: 0.23rem;
          }
          .ordxq_left{
            display: flex;
            flex-wrap: wrap;
            margin-top: 0.5rem;
            p{
              width: 40%;
              height: 0.3rem;
               color: slategrey;
            }
          }
        }
        .ordxq_right{
          height: 1.5rem;
         p:nth-child(2){
            padding-top: 1rem;
            color: slategrey;
         }
        }
      }
    }
 }
 .dist{
   height: 4rem;
   div:nth-child(1){
     border-bottom: 0.01rem solid slategrey;
     height: 0.8rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     p{
       width: 1.8rem;
       text-align: center;
     }
   }
   div:nth-child(2){
     border-bottom: 0.01rem solid slategrey;
     height: 0.8rem;
     display: flex;
     align-items: center;
     p{
       width: 1.8rem;
       text-align: center;
     }
     input{
       width: 4rem;
       height: 0.4rem;
       border: none;
       outline: none;
     }
   }
   div:nth-child(3){
     height: 1rem;
    //  border-top: 0.3rem solid slategrey;
     border-bottom: 0.01rem solid slategrey;
     display: flex;
     justify-content: space-between;
     align-items: center;
     p{
       width: 1.5rem;
       text-align: center;
        font-size: 0.25rem;
     }
   }
 }
 .submit{
    height: 0.8rem;
    width: 100%;
    border-top: 0.01rem solid;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    p:nth-child(1){
      width: 5.5rem;
      height: 0.8rem;
      text-align: right;
      line-height: 0.8rem;
    }
    p:nth-child(2){
      width: 1.5rem;
      height: 0.8rem;
      background: red;
      color: white;
      line-height: 0.8rem;
      text-align: center;
    }
 }
}

</style>
