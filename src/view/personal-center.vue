<template>
  <div class="box">
      <div class="top">
        <img src="../assets/zz.gif" alt="">
        <div>
          <!-- <p>点击登录</p> -->
          <router-link to="/Tologin" v-show="!show" tag="p">点击登录</router-link>
          <span v-show="show">登录成功</span>
          <p>积分：0</p>
        </div>
      </div>
      <div class="hot">新上线更稳定的付费快递查询接口</div>
      <div class="ding">
         <div class="ding-top">
           <div>
               <i class="el-icon-date"></i>
               <p>我的订单</p>
           </div>
            <i class="el-icon-arrow-right"></i>
         </div>
        <ul>
          <li>
            <i class="el-icon-bank-card"></i>
            <p>待付款</p>
          </li>
          <li>
            <i class="el-icon-takeaway-box"></i>
            <p>待发货</p>
          </li>
          <li>
            <i class="el-icon-truck"></i>
            <p>待收货</p>
          </li>
          <li>
            <i class="el-icon-chat-line-square"></i>
            <p>待评论</p>
          </li>
        </ul>
      </div>
      <div class="sever">
        <ul>
          <li>
            <i class="el-icon-coin"></i>
            <p>我的余额</p>
          </li>
          <li>
            <i class="el-icon-collection-tag"></i>
            <p>我的砍价</p>
          </li>
          <li>
            <i class="el-icon-collection"></i>
            <p>我的礼卷</p>
          </li>
          <li>
            <i class="el-icon-star-off"></i>
            <p>我的收藏</p>
          </li>
          <li>
            <i class="el-icon-map-location"></i>
            <p>我的地址</p>
          </li>
          <li>
            <i class="el-icon-service"></i>
            <p>联系客服</p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  created () {
    let token = JSON.parse(window.localStorage.getItem('1902'))
    if (token) {
      this.show = true
    } else {
      this.show = false
    }
    console.log(token)
  }

}
</script>

<style scoped lang="scss">

.top{
  width: 100%;
  height: 3.5rem;
  background-image: linear-gradient(to top,#ddd,#EFE4B0,#B122A2);
  display: flex;
  align-items: center;
  img{
    margin: 0 0.3rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }
  div{
    height: 1.5rem;
    p:nth-child(1){
       font-size: 0.25rem;
       color: white;
    }
    p:nth-child(3){
      width: 1rem;
      height: 0.3rem;
      background:rgba(0,0,0,0.3);
      color: white;
      font-size:0.18rem;
      text-align: center;
      line-height: 0.3rem;
      margin-top: 0.3rem;
      border-radius: 0.05rem;
    }
  }
}
.hot{
  height: 0.4rem;
  background: url('../assets/22.png') no-repeat 0.2rem;
  padding-left: 0.5rem;
  line-height: 0.4rem;
  color: red;
  font-size:0.16rem;
  box-shadow: slategray 0 0.02rem 0;
}
.ding{
  height: 2rem;
  border-bottom: 0.01rem solid;
  .ding-top{
      height: 0.8rem;
      border-bottom: 0.01rem solid slategray;
      display: flex;
      align-items: center;
      justify-content: space-around;
      div{
         width: 5rem;
         display: flex;
         align-items: center;
         .el-icon-date{
           font-size: 0.4rem;
           color: peru;
         }
         p{
           font-size: 0.13rem;
           margin-left: 0.1rem;
         }
      }
      .el-icon-arrow-right{
        font-size: 0.4rem;
      }
  }
  ul{
    height: 1.2rem;
     display: flex;
     justify-content: space-around;
     align-items: center;
     li{
       width: 25%;
       text-align: center;
       color: slategray;
      .el-icon-bank-card{
        font-size: 0.5rem;
      }
       .el-icon-takeaway-box{
         font-size: 0.5rem;
      }
      .el-icon-truck{
        font-size: 0.5rem;
      }
      .el-icon-chat-line-square{
         font-size: 0.5rem;
      }

     }
  }
}
.sever{
  margin-top:0.5rem;
  border-top:0.01rem solid slategray;
   ul{
     height: 2rem;
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
     align-items: center;
     li{
       width: 33.3%;
       text-align: center;
       p{
         font-size:0.10rem;
         margin-top:0.1rem;
       }
       .el-icon-coin{
         color: darkgoldenrod;
         font-size: 0.5rem;
       }
       .el-icon-collection-tag{
         color: palevioletred;
         font-size: 0.5rem;
       }
       .el-icon-collection{
         color: darkgreen;
         font-size: 0.5rem;
       }
       .el-icon-star-off{
         color: teal;
         font-size: 0.5rem;
       }
       .el-icon-map-location{
         color: greenyellow;
         font-size:0.5rem;
      }
      .el-icon-service{
        color: springgreen;
        font-size: 0.5rem;
      }
     }
   }
}
</style>
