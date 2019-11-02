<template>
  <div class="cladeta">
    <div class="header">
       <hea-der>
         <p slot='route'><router-link to='/classify'>回</router-link></p>
         <span slot="con">分类商品</span>
       </hea-der>
    </div>
    <div v-show="this.fenxq.length<=0" class="shang">
         <i class="el-icon-present"></i>
         <p>还没有商品</p>
    </div>
     <ul v-show="this.fenxq.length>0">
       <router-link :to="{path:'/particulars',query:{id:item.id}}" tag="li" v-for="(item,index) in fenxq" :key="index">
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
       </router-link>
     </ul>
  </div>
</template>

<script>
import Product from '../../services/prodct-service'
import HeaDer from '../nav/header'
const _product = new Product()
export default {
  components: {
    HeaDer
  },
  data () {
    return {
      cladetaId: '',
      fenxq: [],
      fenshow: false
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
    this.$store.state.quanList.filter(item => {
      if (item.categoryId === this.cladetaId) {
        this.fenxq.push(item)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.header{
  height: 0.8rem;
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
  .shang{
    width: 100%;
    height: 100%;
    text-align: center;
    .el-icon-present{
      font-size: 1.8rem;
      margin-top: 30%;
    }
    p{
      font-size: 0.5rem;
      color: slategrey;
    }
  }
}

</style>
