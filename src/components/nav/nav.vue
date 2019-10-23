<template>
  <div>
      <ul class="footer">
        <router-link to="/" tag="li">
          <i class="el-icon-s-home"></i>
          <p>首页</p>
        </router-link>
        <li>
         <i class="el-icon-s-order"></i>
          <!-- <p>分类</p> -->
          <router-link to="/classify" tag="p">分类</router-link>
        </li>
        <li>
           <i class=" el-icon-shopping-cart-full"></i>
            <p>购物车</p>
        </li>
         <router-link to="personal-center" tag="li">
          <i class="el-icon-s-custom"></i>
           <p>个人</p>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.footer{
  list-style: none;
  width: 100%;
  height: 0.8rem;
  // border: 0.01rem solid;
  display: flex;
  justify-content: space-around;
  font-size: 0.16rem;
  li{
    width: 25%;
    text-align: center;
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
