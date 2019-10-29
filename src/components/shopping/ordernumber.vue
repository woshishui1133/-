<template>
  <div>
555555
  </div>
</template>

<script>
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  created () {
    _product.ddhao().then(res => {
      console.log(res.data)
      this.$store.state.moren = res.data.data
      console.log(this.$store.state.moren)
    })
  }

}
</script>

<style>

</style>
