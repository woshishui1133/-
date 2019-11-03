<template>
  <div class="shang">
     <ul class="nav">
       <li @click="syou">所有分类</li>
       <li v-for="(item,index) in navlist" :key="index" @click="fen(item.type)">
          {{item.name}}
       </li>
     </ul>
     <div class="lei">
       <div class="lun">
        <el-carousel :interval="5000" >
          <el-carousel-item v-for="(item,index) in navlist" :key="index">
           <img :src="item.icon" alt="">
          </el-carousel-item>
        </el-carousel>
       </div>
       <ul v-show="!show">
          <router-link :to="{path:'/class-details',query:{cladetaId:item.id}}"  v-for="(item,index) in productList" :key="index" tag="li">
            <img :src="item.icon" alt="">
            <p>{{item.name}}</p>
          </router-link>
       </ul>
       <ul v-show="show">
         <router-link :to="{path:'/class-details',query:{cladetaId:item.id}}"  v-for="(item,index) in fenlei" :key="index" tag="li">
             <img :src="item.icon" alt="">
             <p>{{item.name}}</p>
         </router-link>
       </ul>
     </div>
  </div>
</template>

<script>
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  computed: {
    // 导航
    navlist () {
      return this.$store.state.productList.filter(item => {
        if (item.type === 'jujia' || item.type === 'peishi' || item.type === 'fuzhuang' || item.type === 'dianqi') {
          return item
        }
      })
    },
    // 数据
    productList () {
      return this.$store.state.productList.filter(item => {
        if (item.type === 'jujia2' || item.type === 'peishi2' || item.type === 'fuzhuang2' || item.type === 'dianqi2') {
          return item
        }
      })
    },
    // 分类数据
    fenlei () {
      return this.$store.state.productList.filter(item => {
        if (item.type === this.type) {
          return item
        }
      })
    }
  },
  data () {
    return {
      type: '',
      show: false
    }
  },
  created () {
    _product.quans().then(res => {
      // console.log(res.data.data)
      this.$store.state.productList = res.data.data
    })
  },
  methods: {
    fen (val) {
      this.type = val + '2'
      console.log(this.type)
      this.show = true
    },
    syou () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
}
.shang{
  position: relative;
  height: 19.2rem;
  overflow: hidden;
}
.nav{
  width: 2rem;
  text-align: center;
  position: fixed;
  top:0.8rem;
  left:0;
  li{
    height: 0.8rem;
    line-height: 0.8rem;
  }
  // li:nth-child(1){
  //   color: red;
  //   border-left: 0.03rem solid red;
  // }
  li:hover{
     color: red;
    border-left: 0.03rem solid red;
  }
}
.lei{
  width: 5.5rem;
  border-left: 0.01rem solid slategray;
  position: absolute;
  top:0.8rem;
  left:2.01rem;
  z-index: -1;
  .lun{
    width: 90%;
    margin: 0 auto;
    height: 3rem;
   .el-carousel__item{
      img{
         width: 100%;
         height: 3rem;
         border-radius: 0.1rem;
      }
    }
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      text-align: center;
      width: 33.3%;
      img{
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

}
</style>
