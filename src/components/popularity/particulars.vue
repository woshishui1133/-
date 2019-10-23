<template>
  <div>
    <div class="lun">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in pics" :key="index">
          <img :src="item.pic" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
     <div  v-html="list.content">
     </div>
  </div>
</template>

<script>
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  data () {
    return {
      list: [],
      pics: []
    }
  },
  created () {
    let { id } = this.$route.query
    _product.part(id).then(res => {
      console.log(res.data.data)
      this.list = res.data.data
      this.pics = res.data.data.pics
      console.log(this.list)
      console.log(this.pics)
    })
  }
}
</script>

<style scoped lang="scss">
*{
  font-size: 0.16rem;
}

.el-carousel__item{
  img{
    width: 100%;
  }
}

</style>
