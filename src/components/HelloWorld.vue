<template>
  <div class="hello">
    <div id="my">
       <el-carousel  >
         <el-carousel-item v-for="(item,index) in list"   :key="index">
           <img :src="item.picUrl" alt="">
         </el-carousel-item>
        </el-carousel>
    </div>
     <div class="nav">
        <ul>
         <router-link to='/sign' tag="li">
            <img src="../assets/1571703000(1).png" alt="">
            <p>签到</p>
          </router-link>
          <router-link to="/conver" tag='li'>
            <img src="../assets/1571703024(1).png" alt="">
            <p>礼卷</p>
          </router-link>
          <router-link to="/bargain" tag='li'>
            <img src="../assets/1571703040(1).png" alt="">
            <p>砍价</p>
          </router-link>
           <router-link to='/special' tag='li'>
            <img src="../assets/1571703065(1).png" alt="">
            <p>专栏</p>
          </router-link>
        </ul>
     </div>
     <!-- 砍价 -->
      <Bargain></Bargain>
      <!-- 精选专题  -->
      <Special></Special>
      <!-- 人气推荐 -->
      <Popularity></Popularity>
    <!-- <Route></Route> -->
  </div>
</template>

<script>
import Bargain from '../view/bargain'
import Special from '../view/special'
import Popularity from '../view/popularity'
// import Route from '../components/route'
export default {
  components: {
    Bargain,
    Special,
    Popularity
    // Route
  },
  computed: {
    productList () {
      return this.$store.state.productList
    }
  },
  data () {
    return {
      list: [] // 轮播图
    }
  },
  created () {
    // 轮播图
    this.axios.get('https://api.it120.cc/small4/banner/list').then(res => {
      this.list = res.data.data
      // console.log(this.list)
    })
  },
  methods: {

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

*{
  margin: 0;
  padding: 0;
  font-size: 0.20rem;
}
ul{
  list-style: none;
}
a{
text-decoration: none;
color: black;
}
.hello{
  .el-carousel__item{
    img{
      width: 100%;
      height: 4rem;
    }
      }
  .nav{
    height: 1rem;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    &>ul{
      display: flex;
      justify-content: space-around;
      li{
        width: 25%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        &>img{
          width: 0.8rem;
          height: 0.8rem;
          margin: 0 auto;
        }
        p{
          width: 100%;
        }
      }
    }
  }
}

</style>
