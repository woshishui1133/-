<template>
  <div>
    <div class="lun">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in pics" :key="index">
          <img :src="item.pic" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="con">
       <h3>{{bas.name}}</h3>
       <p>{{bas.characteristic}}</p>
       <div>
         <p>底价<span>￥{{bas.minPrice}}</span></p>
         <p>原价￥{{bas.originalPrice}}.00</p>
         <p>库存{{bas.stores}}</p>
       </div>
    </div>
      <div v-html="parlist.content">
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      parlist: [],
      bas: [],
      pics: []
    }
  },
  created () {
    // let par = this.$route.params.bardetaId
    let par = this.$route.params.bardetaId
    console.log(par)
    this.axios.post(`https://api.it120.cc/small4/shop/goods/detail?id=${par}`).then(res => {
      console.log(res.data)
      this.parlist = res.data.data
      this.bas = res.data.data.basicInfo
      this.pics = res.data.data.pics
      console.log(this.bas)
    })
  }
}
</script>

<style scoped lang="scss">
*{
  font-size: 0.2rem;
}
.lun{
  img{
    width: 100%;
  }
}
.con{
  h3{
   font-size:0.45rem;
  }
  &>p{
     font-size:0.3rem;
     color: slategray;
  }
  &>div{
   display: flex;
   justify-content: space-around;
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
