<template>
  <div class="bargain1">
    <router-link to="/bargain" tag='p'>全民砍价</router-link>
    <BargainHome></BargainHome>
  </div>
</template>

<script>
import BargainHome from '../components/bargain/bargainHome'
export default {
  components: {
    BargainHome
  }
}
</script>

<style lang="scss" scoped>
*{
  margin:0;
  padding: 0;
}
   p{
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      border-bottom: 0.01rem solid slategrey;
      text-align: center;
    }
</style>
