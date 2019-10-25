<template>
  <div>
    <div class="sign">
      <div class="top">
        <router-link to="/" tag="span"> 返 </router-link>
        <p>您的可用积分为</p>
        <h1>999</h1>
        <p></p>
      </div>
      <div class="con">
        <p>签到</p>
      </div>
      <div class="gouwu">
        <img src="../../assets/sss.png" alt="">
        <div>
          <p>消费购物</p>
          <p>购物完成，确认收货后立返积分</p>
        </div>
        <router-link to="/" tag="p">去购物</router-link>
      </div>
      <div class="gouwu">
        <img src="../../assets/44.gif" alt="">
        <div>
          <p>积分兑换</p>
          <p>积分兑换好礼，20积分即可兑换礼卷</p>
        </div>
        <router-link to="/" tag="p">去兑换</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.sign{
    width: 100%;
    .top{
      height: 5rem;
      background-image: linear-gradient(to left,#00E8D5,#FFAEC9,#00A2E8);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      text-align: center;
      position: relative;
      span{
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        background: white;
        font-size: 0.3rem;
        text-align: center;
        line-height: 0.5rem;
        border-radius: 0.5rem;
        position: absolute;
        top:0.3rem;
        left:0.3rem;
        color: slategray;
      }
      p{
        font-size: 0.5rem;
        width: 100%;
        color: snow;
      }
      h1{
       width: 100%;
       font-size:0.6rem;
       color: purple;
      }
      p:nth-child(3){
        height: 1.5rem;
        background: #FFAEC9;
        opacity: 0.8;
        margin-bottom:-0.45rem;
      }
    }
    .con{
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        width: 2rem;
        height: 0.6rem;
        background: springgreen;
        text-align: center;
        border-radius: 0.1rem;
        line-height: 0.6rem;
        color: white;
        font-size: 0.25rem;
      }
    }
    .gouwu{
      width: 6.5rem;
      height: 2.5rem;
      margin: 0 auto;
      display:flex;
      align-items: center;
      background: palegoldenrod;
      border-radius: 0.1rem;
      justify-content: space-around;
      margin-bottom: 0.5rem;
      img{
        width: 1.5rem;
        margin-top:1rem;
        position: relative;
        opacity: 0.5;
      }
     div{
       p{
         color: peru;
         height: 0.5rem;
       }
     }
     &>p{
       width: 1rem;
       height: 0.4rem;
       color: plum;
       background: steelblue;
       border-radius: 0.1rem;
       text-align: center;
       line-height: 0.4rem;
     }
    }
}
</style>
