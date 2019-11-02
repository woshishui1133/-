<template>
  <div class="header">
    <p class="rou">
      <slot name='route'><router-link to='/'>回</router-link></slot>
    </p>
     <div class="cc">
       <slot name="con">砍价列表</slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  align-items: center;
  height: 0.8rem;
  width: 100%;
  border-bottom: 0.01rem solid slategrey;
  justify-content: space-around;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  a{
    color: white;
    text-decoration: none;
  }
  .rou{
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background: peru;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    color: white;
  }
  .cc{
    width: 6rem;
    text-align: center;
  }
}

</style>
