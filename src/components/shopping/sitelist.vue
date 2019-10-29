<template>
  <div>
    <div class="top">
      <router-link to='/orderform' tag="button">回</router-link>
      <p>我的地址</p>
    </div>
    <ul class="sitelist">
      <li v-for="(item,index) in dizhilist" :key="index">
        <input type="checkbox" v-model='item.isDefault' @change="moren(item)">
        <div class="con">
          <p>{{item.linkMan}}</p>
          <p>{{item.mobile}}</p>
          <p>{{item.address}}</p>
        </div>
        <i class="el-icon-circle-close" @click="dele(item.id)"></i>
        <router-link to="/site" tag='i' class="el-icon-edit-outline"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  computed: {
    dizhilist () {
      return this.$store.state.dizhilist
    }
  },
  data () {
    return {
      showsta: false,
      token: ''
    }
  },
  created () {
    let token = JSON.parse(window.localStorage.getItem('1902'))
    console.log(token[0].kk)
    this.token = token[0].kk
    _product.dizhi(token[0].kk).then(res => {
      console.log(res.data.data)
      this.$store.state.dizhilist = res.data.data
      this.$store.state.dizhilist[0].isDefault = true
    })
  },
  methods: {
    // moren (val) {
    //   console.log(val)
    //   let index = this.$store.state.dizhilist.findIndex(item => {
    //     return item.id === val.id
    //   })
    //   console.log(index)
    //   if (index === -1) {
    //     this.$store.state.dizhilist[index].isDefault = true
    //   }
    // }
    dele (id) {
      let obj = {
        token: this.token,
        id: id
      }
      _product.deledizhi(obj).then(res => {
        console.log(res.data.data)
        this.$store.state.dizhilist = res.data.data
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.top{
  width: 100%;
   height: 0.8rem;
   display:flex;
   justify-content: space-around;
   align-items: center;
   border-bottom: 0.01rem solid slategray;
  button{
    width: 0.4rem;
    height: 0.4rem;
    border:0.01rem solid slategray;
    border-radius: 50%;
    background: white;
    position: fixed;
    top:0.2rem;
    left: 0.2rem;
    z-index: 5;
    outline: none;
  }
}
.sitelist{
  li{
    display: flex;
    height: 1.2rem;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.01rem solid slategray;
    .con{
       width: 4.5rem;
       display: flex;
       flex-wrap: wrap;
       p:nth-child(2){
         margin-left: 0.1rem;
       }
       p:nth-child(3){
         width: 100%;
       }
    }
    .el-icon-circle-close{
      font-size: 0.4rem;
    }
    .el-icon-edit-outline{
      font-size: 0.4rem;
    }
  }
}
</style>
