<template>
  <div>
    <div class="top">
      <router-link to="/special" tag="span">返回</router-link>
      <p>专栏详情</p>
    </div>
    <div class="con">
       <h1>{{detlist.title}}</h1>
       <img :src="detlist.pic" alt="">
       <div v-html="detlist.content">
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deta: '',
      detlist: []
    }
  },
  created () {
    this.deta = this.$route.params.detaId
    // 专题详情
    this.axios.get(`https://api.it120.cc/small4/cms/news/detail?id=${this.deta}`).then(res => {
      console.log(res.data.data)
      this.detlist = res.data.data
      // console.log(this.detlist)
    })
  }
}
</script>

<style scoped lang="scss">
*{
  font-size: 0.2rem;
}
img{
  width: 100%;
}
 .top{
     display: flex;
     justify-content: space-around;
     height: 0.6rem;
     align-items: center;
     box-shadow: slategrey 0 0.02rem 0;
     p{
       width: 80%;
       text-align: center;
     }
   }
   .con{
     h1{
       height: 0.8rem;
       text-align: center;
       line-height: 0.8rem;
     }
   }
</style>
