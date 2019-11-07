<template>
  <div>
    <div class="header">
    <hea-der>
      <div slot="route">
          <router-link to="/personal-center">回</router-link>
      </div>
     <span slot="con">订单详情</span>
    </hea-der>
    </div>
     <ul class="order">
      <!-- <router-link :to="{path:'/ordersp',query:{orid:index}}" v-for="(item,index,s) in order" :key='s' tag='li'> -->
      <li v-for="(item,index,s) in order" :key='s' @click="pinglun(index,s)">
         <div class="top">
           <p>内容</p>
           <p>价格</p>
           <p>数量</p>
         </div>
         <div class="con" v-for="(item2,index2) in order[index]" :key="index2">
           <img :src="item2.pic" alt="">
           <div class="nn">
              <p>{{item2.goodsName}}</p>
              <p>{{item2.property}}</p>
           </div>
            <p>{{item2.amount}}</p>
            <p>{{item2.number}}</p>
         </div>
        <div class="bottom"  v-for="(item3,index3) in ordernum" v-if='Number(item3.id)===Number(index)' :key='index3'>
            <p class="wei" v-show="item3.status===-1">{{item3.statusStr}}</p>
            <p  class="yi" v-show="item3.status===0">未支付</p>
            <p  class="yi" v-show="item3.status===3">未评论</p>
            <p  class="yi" v-show="item3.status===4">已支付</p>
            <p>订单号：{{item3.orderNumber}}</p>
            <p>总价：{{item3.amount}}</p>
            <p>总数：{{item3.goodsNumber}}</p>
            <button>支付</button>
         </div>
      </li>
     </ul>
  </div>
</template>

<script>
import HeaDer from '../nav/header'
import Product from '../../services/prodct-service'
const _product = new Product()

export default {
  computed: {
    order () {
      return this.$store.state.order
    },
    ordernum () {
      return this.$store.state.orderxq
    }
  },
  components: {
    HeaDer
  },
  data () {
    return {
      orderid: []

    }
  },
  created () {
    this.$store.state.token = JSON.parse(window.localStorage.getItem('1902'))
    this.$store.state.logstatus = JSON.parse(window.localStorage.getItem('logs'))

    console.log(this.$store.state.logstatus)
    if (this.$store.state.logstatus) {
      let id = this.$store.state.token.kk
      console.log(id)
      _product.orderlist(id).then(res => {
        console.log(res.data)
        this.$store.state.order = res.data.data.goodsMap
        // console.log(this.$store.state.order)
        this.orderid = Object.keys(this.$store.state.order)
        console.log(this.orderid)

        this.$store.state.orderxq = res.data.data.orderList.filter(item => {
          return this.orderid.map(item2 => {
            return item.id === Number(item)
          })
        })
        this.$store.state.orderxq = this.$store.state.orderxq.reverse()
        console.log(this.$store.state.orderxq)
      })
    } else {
      this.$router.push({path: '/Tologin'})
    }
  },
  methods: {
    pinglun (v, i) {
      console.log(i)
      if (this.$store.state.orderxq[i].status >= 3) {
        this.$router.push({path: '/ordersp', query: {orid: v}})
      } else {
        alert('请支付')
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.header{
  height: 0.8rem;
}
.order{
   li{
     border-bottom: 0.2rem solid rgba(0,0,0,0.1);
    //  margin-bottom: 0.2rem;
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
     .con{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-around;
       align-items: center;
       width: 7rem;
       height: 1.4rem;
       margin: 0.1rem  auto;
       box-shadow: slategrey 0 0 0.02rem;
       .nn{
         width: 3rem;
       }
       .ping{
         width: 100%;
         display: flex;
       }
     }
     .bottom{
       display: flex;
       align-items: center;
       justify-content: space-around;
       height: 0.5rem;
       .wei{
         color: red;
         font-weight: 800;
       }
       .yi{
          font-weight: 800;
       }
       button{
         border:none;
         width: 0.6rem;
         height: 0.4rem;
         border-radius: 0.1rem;
         background: palevioletred;
         color: white;
       }
     }
     img{
       width: 1rem;
       height: 1rem;
     }
   }
}

</style>
