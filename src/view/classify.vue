<template>
  <div>
     <div class="top">
       <input type="text" placeholder="搜索商品">
     </div>
      <Classshang></Classshang>
  </div>
</template>

<script>
import Classshang from '../components/classify/classshang'
export default {
  components: {
    Classshang
  }
}
</script>

<style lang="scss" scoped>

.top{
  width: 100%;
  height: 0.7rem;
  position: fixed;
  top:0;
  left:0;
  border-bottom: 0.01rem solid slategray;
  background: white;
  input{
    color: red;
    height: 0.3rem;
    width: 3rem;
    position: absolute;
    top:0.2rem;
    left:2rem;
    background: url('../assets/1571812022.png') no-repeat 0.1rem;
    background-size: 0.2rem 0.2rem;
    padding-left:0.5rem;
    border: 0.01rem solid gainsboro;
    border-radius: 0.2rem;
  }
}
</style>
