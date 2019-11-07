<template>
  <div>
     <div class="lun">
      <el-carousel indicator-position="outside">
         <router-link to="/" tag="button">回</router-link>
        <el-carousel-item v-for="(item,index) in pics" :key="index">
          <img :src="item.pic" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="con">
       <h3 v-html="bas.name">{{bas.name}}</h3>
       <p>{{bas.characteristic}}</p>
       <div>
         <p>底价<span>￥{{bas.minPrice}}</span></p>
         <p>原价￥{{bas.originalPrice}}.00</p>
         <p>库存{{bas.stores}}</p>
       </div>
    </div>
     <div class="shang">
       <p @click="comm">商品介绍</p>
       <p @click="pin(partId)">商品评价</p>
     </div>
     <div v-html='quans.content' v-show="!show" class="quanx1"> </div>
     <div class="pingl">
       <ul>
         <li v-for="(item,index) in pinlun" :key="index">
           <img src="../../assets/asw.png" alt="">
           <div class="con2">
             <div>
               <span>匿名用户</span>
               <span>{{item.goods.goodReputationStr}}</span>
             </div>
             <p>{{item.goods.goodReputationRemark}}</p>
             <div>
               <span>{{item.goods.dateReputation}}</span>
               <span>选择规格：<span v-html="item.goods.goodsName">{{item.goods.goodsName}}</span></span>
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
    },
    bas () {
      return this.$store.state.bainfo
    }
  },
  data () {
    return {
      show: false,
      pinlun: [],
      pics: []
    }
  },
  created () {
    console.log(this.partId)
    // 人气
    // this.$store.state.partId = this.$route.query.id
    // // // 砍价
    // this.$store.state.partId = this.$route.query.barId
    if (this.$store.state.partId = this.$route.query.id) {
      this.par()
    } else if (this.$store.state.partId = this.$route.query.barId) {
      this.par()
    }
  },
  methods: {
    par () {
      _product.part(this.$store.state.partId).then(res => {
        console.log(res.data.data)
        this.$store.state.commList = res.data.data
        this.pics = res.data.data.pics
        console.log(this.pics)
        this.$store.state.bainfo = res.data.data.basicInfo
      // console.log(this.$store.state.commList)
      })
    },
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
      .con2{
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
.lun{
  button{
    width: 0.4rem;
    height: 0.4rem;
    border:none;
    border-radius: 50%;
    background: white;
    position: fixed;
    top:0.2rem;
    left: 0.2rem;
    z-index: 5;
    outline: none;
  }
  img{
    width: 100%;
    height: 100%;
  }
}
.con{
  height: 1.5rem;
  box-shadow: slategray 0 0.02rem 0;
  h3{
   font-size:0.4rem;
   margin:0.1rem 0.2rem;
  }
  &>p{
     font-size:0.25rem;
     color: slategray;
     margin: 0 0.2rem;
  }
  &>div{
   display: flex;
   justify-content: space-around;
   margin: 0.1rem 0.2rem;
   p{
     color: slategray;
   }
   p:nth-child(1){
     span{
       color: red;
       font-size: 0.25rem;
     }
   }
   p:nth-child(3){
     width: 60%;
     text-align: right;
   }
  }
}
</style>
