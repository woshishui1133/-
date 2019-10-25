<template>
  <div>
    <div class="kanjy">
       <router-link to="/bargain-details" tag="button">回</router-link>
        <img src="../../assets/7118.png_300.png" alt="">
        <p>{{this.name}}</p>
        <P>我发现一件好货，来帮我砍到最低价吧~</P>
        <div class="con">
          <img :src="bainfo.pic" alt="">
          <div class="con_right">
            <p>{{bainfo.name}}</p>
            <div>
               <p>底价<span>￥{{kanj.minPrice}}</span></p>
               <p>原价￥{{kanj.curPrice}}</p>
            </div>
          </div>
        </div>
        <div class="hep">
          <p>当前价<span>{{kanj.curPrice-helps}}</span>元</p>
          <p>已砍<span>{{helps}}</span>元</p>
        </div>
        <div class="invite">
            <p>已当前价格购买</p>
            <button @click="yaoq(2)">邀请好友砍价</button>
        </div>
        <div class="date">
          <p>06</p>
          <span>:</span>
          <p>04</p>
          <span>:</span>
          <p>33</p>
          <span>:</span>
          <p>50</p>
        </div>
    </div>
    <ul>
      <li v-for="(item,index) in helps2" :key="index">
        <img src="../../assets/sss.png" alt="">
        <div class="ul_con">
          <p>{{item.nick}}</p>
          <span>{{item.dateAdd}}</span>
        </div>
         <div class="ul_right">
           <img src="../../assets/a12.gif" alt="">
           <p>砍掉{{helps}}元</p>
         </div>
      </li>
    </ul>
    <div class="inv" v-show="!show">
      <div class="gx">
          <p><i class="el-icon-close" @click="hide(1)"></i></p>
          <h1>恭喜</h1>
          <p>砍价创建成功</p>
          <p>邀请好友来砍价吧~</p>
          <div class="yer">
            <div class="yao">
               <p><i class="el-icon-link"></i></p>
               <span>邀请好友</span>
            </div>
             <div class="yao">
               <p> <i class="el-icon-picture-outline"></i></p>
               <span>生成二维码</span>
             </div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    barId () {
      return this.$store.state.barId
    },
    bainfo () {
      return this.$store.state.bainfo
    },
    // 砍的价格
    helps () {
      let pricehep = 0
      return this.$store.state.helps.map(item => {
        pricehep += item.cutPrice
        return pricehep
      })
    },
    // 砍价的人
    helps2 () {
      return this.$store.state.helps
    }
  },
  data () {
    return {
      kanj: [],
      name: '',
      show: true
    }
  },
  methods: {
    yaoq (b) {
      console.log(b)
      this.show = false
    },
    hide (a) {
      console.log(a)
      this.show = true
    }

  },
  created () {
    // console.log(JSON.parse(window.localStorage.getItem('1902')))
    let token = JSON.parse(window.localStorage.getItem('1902'))
    // console.log(token[0].yy)
    this.axios.post(`https://api.it120.cc/small4/shop/goods/kanjia/info?kjid=${this.$store.state.barinId}&joiner=${token[0].yy}`).then(res => {
      console.log(res.data)
      this.kanj = res.data.data.kanjiaInfo
      this.name = res.data.data.joiner.nick
      this.$store.state.helps = res.data.data.helps
    })
  }
}
</script>

<style lang="scss" scoped>
.kanjy{
  height: 8rem;
  background-image: linear-gradient(to top,#99D9EA,#FFAEC9);
  text-align: center;
  &>button{
    width: 0.4rem;
    height: 0.4rem;
    border:none;
    border-radius: 50%;
    background: white;
    position: absolute;
    top:0.2rem;
    left: 0.2rem;
    z-index: 5;
    outline: none;
  }
   &>img{
     width: 1rem;
     height: 1rem;
     border-radius: 50%;
     margin: 0.3rem auto;
   }
   &>p{
     color: white;
   }
   &>p:nth-child(2){
     color: white;
     font-size: 0.25rem;
   }
   .con{
     width: 6.5rem;
     height: 2.5rem;
     box-shadow: slategray 0 0 0.02rem;
     display: flex;
     align-items: center;
     justify-content: space-around;
     margin: 0.3rem auto;
     background: palegreen;
     border-radius: 0.1rem;
     img{
       width: 2rem;
       border-radius: 0.1rem;
     }
     .con_right{
       width: 4rem;
       height: 1.8rem;
       text-align: left;
      &>p:nth-child(1){
        font-size: 0.26rem;
      }
      div:nth-child(2){
        display: flex;
        justify-content: space-between;
        width: 3rem;
        height: 2rem;
        line-height: 2rem;
        p:nth-child(1){
          span{
            font-size: 0.25rem;
            font-weight: 800;
            color:red;
          }
        }
        p:nth-child(2){
            text-decoration: line-through;
        }
      }
     }
   }
   .hep{
     width: 5rem;
     height: 0.5rem;
     margin: 0 auto;
     display: flex;
    justify-content: space-around;
    align-items: center;
    p{
      color: white;
      font-size: 0.25rem;
      span{
        font-size: 0.3rem;
      }
    }
   }
   .invite{
     height: 1rem;
     width: 6rem;
     margin: 0 auto;
     display: flex;
     align-items: center;
     justify-content: space-around;
     p{
       width: 2.5rem;
       height: 0.5rem;
       background: #FFAEC9;
       line-height: 0.5rem;
       border-radius: 0.1rem;
       color: white;
     }
     button{
       width: 2rem;
       height: 0.5rem;
       outline: none;
       border:0.01rem solid peru;
       border-radius: 0.1rem;
       color: white;
       background: rgba(0,0,0,0);
     }
   }
   .date{
     width: 2.5rem;
     height: 0.3rem;
     display: flex;
     justify-content: space-around;
     margin: 0 auto;
     p{
       width: 0.3rem;
       height: 0.3rem;
       background: lemonchiffon;
       font-size: 0.18rem;
       line-height:0.3rem;
       border-radius: 0.05rem;
     }
   }
}
ul{
  li{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.5rem;
    border-bottom: 0.01rem solid;
    &>img{
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
    }
    .ul_con{
      width: 3rem;
      height: 1rem;
      p{
        font-weight: 700;
      }
      span{
        display: block;
        margin-top:0.3rem;
        font-size: 0.18rem;
      }
    }
    .ul_right{
      display: flex;
      align-items: center;
    }
  }
}
.inv{
  width: 100%;
  height: 150%;
  position: absolute;
  top:0;
  left:0;
  background: rgba(0,0,0,0.1);
  .gx{
    width: 4.5rem;
    height: 5rem;
    background-image: linear-gradient(to top,#FFAEDA,#C2BAC2);
    margin: 2rem auto;
    text-align: center;
    color: white;
    &>p:nth-child(1){
      width: 100%;
      padding-left: 40%;
      padding-top: 0.1rem;
      i{
        font-size: 0.3rem !important;
        color: black;
      }
    }
    h1{
      font-size: 0.27rem;
    }
    p:nth-child(3){
      font-size: 0.2rem;
      margin:0.15rem;
    }
    .yer{
      width: 100%;
      height: 2.5rem;
      // border: 0.01rem solid;
      display: flex;
      align-items: center;
      .yao{
        width: 50%;
        p{
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          background: rgba(0,0,0,0.1);
          line-height: 0.8rem;
          margin: 0 auto;
          .el-icon-link{
            font-size: 0.5rem;
            margin: 0.15rem auto;
          }
          .el-icon-picture-outline{
            font-size: 0.5rem;
             margin: 0.15rem auto;
          }
        }
      }
    }
  }
}
</style>
