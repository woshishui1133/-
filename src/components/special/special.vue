<template>
  <div class="special">
     <div class="top">
         <router-link to="/" tag='span'>返回</router-link>
       <p>严选专栏</p>
     </div>
     <ul>
       <li v-for="(item,index) in specialList" :key="index">
          <div>
            <img :src="item.pic" alt="">
          </div>
          <div>
            <p>{{item.title}}</p>
            <p>{{item.descript}}</p>
            <router-link :to="'/details/'+item.id" tag='p'>查看详情</router-link>
          </div>
       </li>
     </ul>
  </div>
</template>

<script>
export default {
  computed: {
    specialList () {
      return this.$store.state.specialList
    }
  }
}
</script>

<style lang="scss" scoped>
.special{
  font-size: 0.2rem;
  .top{
     display: flex;
     justify-content: space-around;
     height: 0.6rem;
     align-items: center;
     box-shadow: slategrey 0 0.02rem 0;
     p{
       width: 80%;
       text-align: center;
     }
   }
  ul{
    list-style: none;
  }
  ul{
    margin-left: -0.5rem;
    li{
      position: relative;
      div{
        width: 100%;
        height: 4rem;
        p{
          width: 80%;
          font-size: 0.3rem;
           overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 0.4rem;
        }
        img{
          width: 100%;
          height: 4rem;
        }
      }
      div:nth-child(2){
        position: absolute;
        top: 0;
        left:0;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        p:nth-child(3){
          width: 1.6rem;
          height: 0.6rem;
          border: 0.02rem solid;
          line-height: 0.6rem;
          border-radius: 0.1rem;
        }
      }
    }
  }
}
</style>
