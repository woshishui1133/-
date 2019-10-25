<template>
  <div>
    <div class="conver">
      <div class="top">
       <router-link to='/' tag="button">回</router-link>
       <img src="../../assets/55.jpg" alt="">
       <div class="dui">
           <input type="text" placeholder="请输入礼卷码">
           <p>兑换</p>
       </div>
      </div>
      <div class="con">
         <div class="jian">
           <div class="jian_left">
             <p>1 <span>元</span></p>
           </div>
           <div class="jian_con">
             <h1>满减1</h1>
             <p>满100元使用</p>
           </div>
            <button>立即领取</button>
           <div class="bot">
             领取7天内有效
           </div>
         </div>
         <div class="jian">
           <div class="jian_left">
             <p>0 <span>元</span></p>
           </div>
           <div class="jian_con">
             <h1>满减</h1>
             <p>满10元使用</p>
           </div>
            <button>立即领取</button>
           <div class="bot">
             领取7天内有效
           </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conver{
  .top{
    height: 4.8rem;
    position: relative;
   button{
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      border:none;
      background: white;
      position: absolute;
      top:0.2rem;
      left:0.2rem;
      outline: none;
    }
    img{
      width: 7.5rem;
    }
    .dui{
     width: 6rem;
     height: 1rem;
     border: 0.02rem solid paleturquoise;
     background: rgba(0,0,0,0.2);
     border-radius: 0.1rem;
    //  opacity: 0.5;
     position: absolute;
     bottom:0.5rem;
     left:0.6rem;
     display: flex;
     align-items: center;
     justify-content: space-around;
     input{
       width: 4rem;
       height: 0.4rem;
       background:white rgba(14,255,48,0.4);
       border: none;
       border-radius: 0.1rem;
       padding-left:0.2rem;
     }
     p{
       width: 0.8rem;
       height: 0.38rem;
       background: palevioletred;
       border-radius: 0.1rem;
       text-align: center;
       line-height: 0.38rem;
       font-size: 0.1rem;
       color: white;
     }
    }
  }
  .con{
    width: 7.5rem;
    .jian{
       width: 6.5rem;
       height: 2.5rem;
       margin: 0 auto;
       border: 0.01rem solid;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-around;
       align-items: center;
       background: palevioletred;
       color: white;
       margin-top: 0.3rem;
       .jian_left{
         p{
           font-size: 0.5rem;
         }
       }
       button{
         border: none;
         width: 1rem;
         height: 0.4rem;
         background: white;
         border-radius: 0.1rem;
         font-size:0.15rem;
       }
       .jian_con{
          width: 2rem;
          height: 0.8rem;
          display: flex;
          flex-wrap: wrap;
         h1{
            width: 100%;
            font-size: 0.3rem;
          }
       }
    }
    .bot{
      width: 100%;
      height: 0.8rem;
      margin-bottom:-0.4rem;
      background: peachpuff;
      color: slategray;
      line-height: 0.8rem;
      padding-left: 0.3rem;
    }
  }
}
</style>
