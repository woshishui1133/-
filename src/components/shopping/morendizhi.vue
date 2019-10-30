<template>
  <div>
      <div  class="site_dizhi">
          <i class="el-icon-location-outline"></i>
          <div>
            <p>{{moren.linkMan}}</p>
            <p>{{moren.mobile}}</p>
            <p>{{moren.address}}</p>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  computed: {
    moren () {
      return this.$store.state.moren
    }
  }
}
</script>

<style lang='scss' scoped>
.site_dizhi{
       display: flex;
       width: 3rem;
       align-items: center;
      //  justify-content: space-around;
       height: 1rem;
       width: 100%;
       box-shadow: slategray 0 0.01rem 0;
       .el-icon-location-outline{
         margin-left: 0.3rem;
       }
       div{
         width: 2rem;
         display: flex;
         flex-wrap: wrap;
         margin-left: 0.2rem;
         p:nth-child(3){
           font-size: 0.18rem;
           color: slategrey;
           margin-top: 0.1rem;
         }
       }
    }
</style>
