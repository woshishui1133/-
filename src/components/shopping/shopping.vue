<template>
  <div class="ss1">

    <div class="shop-top">
      <span @click="accom" v-show="!dele" v-if="gouwulist.length>0">完成</span>
      <span @click="editor" v-show="dele" v-if="gouwulist.length>0">编辑</span>
      <p>购物车</p>
    </div>
    <div class="gwkong" v-show="!gouwulist.length>=1">
        <i class="el-icon-shopping-cart-2">
          没有商品~
        </i>
    </div>
    <div class="goucon">
       <ul>
         <li v-for="(item,index) in gouwulist" :key="index">
            <input type="checkbox" v-model="item.checked" @change="xuan">
            <img :src="item.barinfo.basicInfo.pic" alt="">
            <div class="gou_con">
              <p>{{item.barinfo.basicInfo.name}}</p>
              <div>
                <p>{{item.name}}</p>
                <p>{{item.size}}</p>
                <p>{{item.name1}}</p>
                <p>{{item.color}}</p>
              </div>
              <div>
                <p>￥{{item.barinfo.basicInfo.minPrice}}</p>
                <div>
                   <button @click="jian(item,index)">-</button>
                   <span>{{item.num}}</span>
                   <button @click="jia(item,index)">+</button>
                </div>
              </div>
            </div>
         </li>
       </ul>
    </div>
    <Guess></Guess>
    <div class="place" v-if="gouwulist.length>0">
       <div class="place_left">
         <input type="checkbox" v-model="check.check" @change="qcheck">
         全选
      </div>
      <div class="place_right" >
        <p>合计：￥{{prices}}</p>
        <p class="dele" v-show="!dele" @click="xiadan">下单</p>
        <p v-show="dele"  class="dele" @click="deleted">删除</p>
      </div>
    </div>
  </div>
</template>

<script>
import Guess from './guessyou'
import loca from '../../vuex/JSON'
export default {
  components: {
    Guess
  },
  computed: {
    // 购物车数据
    gouwulist () {
      return this.$store.state.gouwuList
    },
    // 总价
    prices () {
      return this.$store.getters.prices
    },
    // 全选框
    check () {
      return this.$store.state.qxcheck
    },
    dele () {
      return this.$store.state.dele
    }
  },
  created () {
    this.$store.state.logstatus = JSON.parse(window.localStorage.getItem('logs'))
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    jia (val, index) {
      val.num++
      console.log(this.$store.state.gouwuList)
    },
    jian (val, index) {
      val.num--
      // this.$store.state.gouwuList[index].num--
      this.$store.state.gouwuList.map(item => {
        if (item.num <= 1) {
          item.num = 1
        }
      })
      console.log(val.num)
    },
    // 复选框
    xuan () {
      this.$store.commit('xuan')
    },
    // 全选框
    qcheck () {
      this.$store.commit('qcheck')
    },
    // 点击完成
    accom () {
      this.$store.commit('accom')
    },
    // 点击编辑
    editor () {
      this.$store.commit('editor')
    },
    // 点击删除
    deleted () {
      this.$store.commit('deleted')
    },
    // 点击下单
    order () {
      console.log(1)
      this.$store.commit('order')
    },
    // 下单
    xiadan () {
      if (this.$store.state.logstatus) {
        let arr = []
        this.$store.state.gouwuList.map(item => {
          if (item.checked === true) {
            arr.push(item)
          }
        })
        if (arr.length <= 0) {
          alert('选择商品')
        } else {
          this.$router.push({path: '/orderform'})
        }
      } else {
        this.$router.push({path: '/Tologin'})
      }
    }
  },
  watch: {
    '$store.state.gouwuList': {
      handler: function () {
        loca.save('gouwu', this.$store.state.gouwuList)
      },
      deep: true
    },
    '$store.getters.nums': {
      handler: function () {
        loca.save('num00', this.$store.getters.nums)
      },
      deep: true
    }
  }
}
</script>

<style lang='scss' scoped>
.ss1{
  position: relative;
}

.shop-top{
  height: 0.5rem;
  border-bottom:0.01rem solid slategray;
  display: flex;
  align-items: center;
  justify-content: space-around;
  span{
    display: block;
    width: 10%;
    color: red;
  }
  p{
    width: 80%;
    text-align: center;
  }
}
.goucon{
  // position: relative;
  // height: 5rem;
  ul{
    li{
      display: flex;
      align-items: center;
      height: 2rem;
      border-bottom:0.01rem solid slategray;
      justify-content: space-around;
      img{
        width: 1rem;
        height: 1rem;
      }
      .gou_con{
        width: 4.5rem;
        &>p{
          font-size: 0.25rem;
        }
        div:nth-child(2){
          display: flex;
          margin-top: 0.2rem;
          p{
            color: slategray;
            font-size: 0.2rem;
          }
        }
        div:nth-child(3){
          display: flex;
          justify-content: space-between;
          margin-top: 0.2rem;
          p{
            color: red;
          }
          div{
            // border: 0.01rem solid slategray;
            button{
              width: 0.3rem;
            }
            span{
              display: block;
              width: 0.3rem;
              text-align: center;
              border-top: 0.01rem solid;
              border-bottom: 0.01rem solid;
            }
          }
        }
      }
    }
  }
}
.place{
  width: 100%;
  height: 1rem;
  border-bottom: 0.01rem solid slategray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom:0.8rem;
  left: 0;
  z-index: 5;
  background: white;
  .place_left{
    width: 1.4rem;
    text-align: center;
  }
  .place_right{
    width: 3.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-size: 0.3rem;
      color: red;
    }
   .dele{
      width: 2rem;
      height: 1rem;
      background: red;
      text-align: center;
      line-height: 1rem;
      color: white;
    }
  }
}
.gwkong{
  width: 100%;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
 .el-icon-shopping-cart-2{
     font-size: 0.8rem;
 }
}
</style>
