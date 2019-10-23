<template>

 <div class="person-wrap" ref="personWrap">
      <ul  class="person-list" ref="personTab">
         <router-link :to="'/details/'+item.id" tag='li' class="person-item" v-for="(item,index) in specialList" :key="index">
          <img :src="item.pic" alt="">
          <span>{{item.title}}</span>
          <p>{{item.descript}}</p>
        </router-link>
      </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  computed: {
    // 精选专题
    specialList () {
      return this.$store.state.specialList
    }
  },
  created () {
    // 精选专题
    _product.jingx().then(res => {
      // console.log(res.data)
      this.$store.state.specialList = res.data.data
    })
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.personWrap, {
          scrollX: true,
          // 忽略竖直方向的滚动
          scrollY: false,
          eventPassthrough: 'vertical'
        })
      } else {
        this.scroll.refresh()
      }
    })
  }

}
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
}
 .person-wrap{
    width: 100%;
    margin-top:0.1rem;
     height: 4rem;
      overflow: hidden;
     position: relative;
     ul{
      width: 400%;
       display: flex;
       position: absolute;
       left:0;
       top:0;
       li{
         width: 60%;
         margin-right: 0.1rem;
         &>img{
           width:100%;
           height: 3rem;
         }
         span{
           display: block;
          width: 80%;
          font-size: 0.25rem;
           overflow: hidden;
          white-space:nowrap;
          text-overflow:ellipsis;
        }
        p{
          width: 80%;
          overflow: hidden;
          // white-space:nowrap;
          text-overflow:ellipsis;
          color: slategrey;
          margin-top:0.1rem;
        }
       }
     }
  }

</style>
