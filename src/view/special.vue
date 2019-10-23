<template>
  <div class="special">
       <router-link to="/special" tag="p" >精选专题</router-link>
       <SpecialHome></SpecialHome>
  </div>
</template>

<script>
import SpecialHome from '../components/special/specialHome'

export default {
  components: {
    SpecialHome
  }

}
</script>

<style lang="scss" scoped>
 p{
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      border-bottom: 0.01rem solid slategrey;
      text-align: center;
    }
</style>
