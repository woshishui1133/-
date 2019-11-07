<template>
  <div>
    <div class="header">
      <hea-der>
        <p slot="route"><router-link to='/orderxq'>回</router-link></p>
        <span slot="con">订单内容</span>
      </hea-der>
    </div>
    <ul>
      <div class="top">
           <p>内容</p>
           <p>价格</p>
           <p>数量</p>
         </div>
      <li v-for="(item,index) in orss" :key="index">
         <div class="con">
           <img :src="item.pic" alt="">
           <div class="nn">
              <p>{{item.goodsName}}</p>
              <p>{{item.property}}</p>
           </div>
            <p>{{item.amount}}</p>
            <p>{{item.number}}</p>
            <div class="ping">
              <p>评价</p>
              <input type="radio"  value="0" v-model="value1">差评
              <input type="radio"  value="1"  v-model="value1">一般
              <input type="radio"  value="2"  v-model="value1">好评
               <input type="text"  ref="txt" placeholder="评论">
               <!-- <p v-show="show">{{item.goodReputationRemark}}</p> -->
            </div>
         </div>
      </li>
      <button @click="pl" class="deti">提交评论</button>
    </ul>
  </div>
</template>

<script>
import HeaDer from '../nav/header'
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  components: {
    HeaDer
  },
  computed: {

  },
  data () {
    return {
      orss: [],
      arr: [],
      id: '',
      value1: 2,
      txt: '',
      show: false
    }
  },
  created () {
    this.$store.state.token = JSON.parse(window.localStorage.getItem('1902'))
    let id = this.$route.query.orid
    console.log(id)
    _product.orderxq(this.$store.state.token.kk, id).then(res => {
      console.log(res.data)
      this.orss = res.data.data.goods
      console.log(this.orss)
    })
  },
  methods: {
    pl () {
      this.orss.map((item, index) => {
        this.id = item.orderId
        let rep = {
          id: item.id,
          reputation: this.value1,
          remark: this.$refs.txt[index].value
        }
        this.arr.push(rep)
      })
      console.log(this.arr)
      let obj = {
        token: this.$store.state.token.kk,
        orderId: this.id,
        reputations: this.arr
      }
      let ss = {
        postJsonString: JSON.stringify(obj),
        token: this.$store.state.token.kk
      }
      console.log(JSON.stringify(obj))
      console.log(this.$store.state.token.kk)
      _product.ping(ss).then(res => {
        console.log(res.data.code)
        if (res.data.code === 0) {
          this.show = true
        } else {
          this.show = false
        }
      })
    }
  }

}
</script>

<style lang='scss' scoped>
.header{
  height: 0.8rem;
}
ul{
  .top{
        display: flex;
        justify-content: space-around;
        height: 0.5rem;
        align-items: center;
        border-top: 0.01rem solid slategrey;
        p:nth-child(1){
          width: 5rem;
          text-align: center;
        }
     }
   li{

     .con{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-around;
       align-items: center;
       width: 7rem;
       height: 1.8rem;
       margin: 0.1rem  auto;
       box-shadow: slategrey 0 0 0.02rem;
       .nn{
         width: 3rem;
       }
       .ping{
         width: 100%;
         height: 0.5rem;
         display: flex;
         align-items: center;
         justify-content: space-around;
       }
     img{
       width: 1rem;
       height: 1rem;
     }
     }
   }
}
.deti{
   width: 1.5rem;
   height: 0.4rem;
   border:none;
   border-radius: 0.1rem;
   outline: none;
   margin: 0 35%;
}
</style>
