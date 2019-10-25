<template>
  <div>
    <div class="lun">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in pics" :key="index">
          <img :src="item.pic" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
     <Shang></Shang>
     <div class="parjia">
       <ul>
          <li><i class="el-icon-service"></i></li>
          <li>
            <i class="el-icon-shopping-cart-2"></i>
            <span>0</span>
          </li>
          <li><i class="el-icon-star-off"></i></li>
          <li>立即购买</li>
          <li>加入购物车</li>
       </ul>
     </div>
  </div>
</template>

<script>
import Shang from './shang-critic'
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  components: {
    Shang
  },
  data () {
    return {
      list: [],
      pics: []
    }
  },
  created () {
    let id = this.$route.query.id
    this.$store.state.partId = id
    _product.part(id).then(res => {
      console.log(res.data.data)
      this.$store.state.commList = res.data.data
      // console.log(this.$store.state.commList)
      this.pics = res.data.data.pics
      // console.log(this.pics)
    })
  }
}
</script>
<style scoped lang="scss">
*{
  font-size: 0.16rem;
  // width: 7.5rem;
   img{
      width: 7.5rem;
    }
}
.parjia{
  width: 7.5rem;
  height: 0.6rem;
  position: fixed;
  bottom:0;
  left: 0;
  background: palegreen;
  ul{
    display: flex;
    height: 0.6rem;
    li{
      width: 16%;
      height: 0.6rem;
      border-right: 0.01rem solid slategray;
      text-align: center;
      line-height: 0.6rem;
      .el-icon-service{
        font-size: 0.45rem;
        color: slategray;
      }
      .el-icon-shopping-cart-2{
        font-size: 0.45rem;
        color: slategray;
      }
      .el-icon-star-off{
        font-size: 0.45rem;
        color: slategray;
      }
    }
    li:nth-child(4){
      width: 25.6%;
      font-size: 0.23rem;
    }
    li:nth-child(5){
      width: 25.6%;
      background: red;
      font-size: 0.24rem;
      border-right: none;
    }
  }
}

</style>
