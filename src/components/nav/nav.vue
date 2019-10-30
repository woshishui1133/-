<template>
  <div>
      <ul class="footer">
        <router-link to="/" tag="li">
          <i class="el-icon-s-home"></i>
          <p>首页</p>
        </router-link>
       <router-link to="/classify" tag="li">
         <i class="el-icon-s-order"></i>
          <p>分类</p>
        </router-link>
        <router-link to="/shopping" tag="li">
           <i class=" el-icon-shopping-cart-full"></i>
           <span class="num11">{{numss}}</span>
            <p>购物车</p>
       </router-link>
         <router-link to="personal-center" tag="li">
          <i class="el-icon-s-custom"></i>
           <p>个人</p>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  computed: {
    numss () {
      return this.$store.getters.nums
    }
  }
}
</script>

<style lang='scss' scoped>
.footer{
  list-style: none;
  width: 100%;
  height: 0.8rem;
  background: white;
  // border: 0.01rem solid;
  display: flex;
  justify-content: space-around;
  font-size: 0.16rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 22;
  li{
    width: 25%;
    text-align: center;
    .num11{
      display: inline-block;
      color: white;
      width: 0.25rem;
      height: 0.25rem;
      background: red;
      border-radius: 50%;
    }
    .el-icon-s-home{
      font-size: 0.5rem;
    }
    .el-icon-s-order{
     font-size: 0.5rem;
    }
    .el-icon-shopping-cart-full{
      font-size: 0.5rem;
    }
    .el-icon-s-custom{
      font-size: 0.5rem;
    }
  }
}

</style>
