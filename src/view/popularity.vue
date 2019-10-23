<template>
  <div class="pop">
     <router-link to="/bargain" tag='p'>人气推荐</router-link>
      <PopularHome></PopularHome>
  </div>
</template>

<script>
import PopularHome from '../components/popularity/popularityHome'
export default {
  components: {
    PopularHome
  }
}
</script>

<style lang="scss"  scoped >

p{
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      border-bottom: 0.01rem solid slategrey;
      text-align: center;
    }
</style>
