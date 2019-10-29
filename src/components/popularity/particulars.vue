<template>
  <div class="par11">
    <div class="lun">
      <el-carousel indicator-position="outside">
         <router-link to="/" tag="button">回</router-link>
        <el-carousel-item v-for="(item,index) in pics" :key="index">
          <img :src="item.pic" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
     <Shang></Shang>
     <div class="parjia">
       <ul>
          <li><i class="el-icon-service"></i></li>
          <router-link to="/shopping" tag="li">
            <i class="el-icon-shopping-cart-2"></i>
            <span class="num11">{{numss}}</span>
          </router-link>
          <li><i class="el-icon-star-off"></i></li>
          <li>立即购买</li>
          <li @click="xs">加入购物车</li>
       </ul>
     </div>
     <div class="gouwu"  v-show="gwcshow">
       <div class="gouwu_to">
          <img :src="bainfo.pic" alt="">
          <div>
            <p>{{bainfo.name}}</p>
            <span>￥{{bainfo.minPrice}}</span>
          </div>
          <p><i @click="yic" class="el-icon-circle-close"></i></p>
       </div>
       <div class="gouwu_prop">
         <ul>
           <li>
             <div>
               <p>{{prop.name}}</p>
               <div  v-for="(aa,ii) in prop.childsCurGoods" :key='ii' :class="ii===index00?'aa':''">
                   <p  @click="gouwujia(aa,bainfo.id,ii,prop.name)" :title="aa.name">{{aa.name}} </p>
               </div>
             </div>
             <div>
               <p>{{prop1.name}}</p>
               <div  v-for="(bb,ss) in prop1.childsCurGoods" :key='ss' :class="ss===index11?'aa1':''">
                   <p  @click="gouwujia1(bb,ss,prop1.name)" :title="bb.name">{{bb.name}} </p>
               </div>
             </div>
           </li>
         </ul>
        </div>
        <div class="gouwu_num">
          <p>购买数量</p>
          <div>
            <button @click="jian">-</button>
            <span>{{this.$store.state.num}}</span>
            <button  @click="jia">+</button>
          </div>
        </div>
        <div class="gwcj" @click='gouwuche'>添加购物车</div>
     </div>
     <div class="alert" v-show="guishow">
       <div>
         <h1>提示</h1>
         <p>请选择商品规格！</p>
         <h2 @click="gui">确定</h2>
       </div>
     </div>
  </div>
</template>

<script>
import Shang from './shang-critic'
import Product from '../../services/prodct-service'
import loca from '../../vuex/JSON'
const _product = new Product()
export default {
  components: {
    Shang
  },
  computed: {
    numss () {
      return this.$store.getters.nums
    }
  },
  data () {
    return {
      show: false,
      gwcshow: false,
      guishow: false,
      guishow2: false,
      index00: 99,
      index11: 99,
      list: [],
      pics: [],
      bainfo: [],
      prop: [],
      prop1: [],
      gouwulist: [],
      size: '',
      sizeid: '',
      colorid: '',
      color: '',
      name: '',
      name1: '',
      minprice: ''
    }
  },
  created () {
    let id = this.$route.query.id
    this.$store.state.partId = id
    _product.part(id).then(res => {
      console.log(res.data.data)
      this.$store.state.commList = res.data.data
      this.bainfo = res.data.data.basicInfo
      this.prop = res.data.data.properties[0]
      if (res.data.data.properties.length >= 2) {
        this.prop1 = res.data.data.properties[1]
      }
      console.log(this.prop)
      // console.log(this.$store.state.commList)
      this.pics = res.data.data.pics
      // console.log(this.pics)
    })
  },
  methods: {
    // 规格价格
    goo () {
      let obj = {
        sid: this.bainfo.id,
        propid: this.sizeid,
        prcolor: this.colorid
      }
      console.log(obj)
      _product.goulist(obj).then(res => {
        console.log(res.data.data)
        this.minprice = res.data.data.price
        this.bainfo.minPrice = this.minprice
      })
    },
    gouwujia (val, id, ii, n) {
      console.log(val, id)
      this.show = true
      this.index00 = ii
      this.size = val.name
      this.name = n
      this.sizeid = val.id
      // console.log(ii, this.index)
      this.goo()
    },
    gouwujia1 (val, ii, nn) {
      this.show = true
      this.index11 = ii
      this.name1 = nn
      this.color = val.name
      this.colorid = val.id
      console.log(val, ii, nn)
      this.goo()
      this.bainfo.minPrice = this.minprice
    },
    jia () {
      this.$store.state.num++
    },
    jian () {
      this.$store.state.num--
      if (this.$store.state.num <= 1) {
        this.$store.state.num = 1
      }
    },
    gouwuche () {
      if (this.size === '') {
        this.guishow = true
      } else if (this.size === '' || !this.color === '') {
        this.guishow = true
      }

      let obg = {
        barinfo: this.$store.state.commList,
        num: this.$store.state.num,
        name: this.name,
        name1: this.name1,
        color: this.color,
        colorid: this.colorid,
        checked: true,
        size: this.size,
        sizeid: this.sizeid
      }
      console.log(obg)
      this.$store.commit('gouwulist', obg)

      this.index00 = 99
      this.index11 = 99
      this.$store.state.num = 1
    },
    // 显示购物页面
    xs () {
      this.gwcshow = true
    },
    // 隐藏购物页面
    yic () {
      this.gwcshow = false
      this.index00 = 99
      this.index11 = 99
      this.$store.state.num = 1
    },
    // 规格警告
    gui () {
      this.guishow = false
    }
  },
  watch: {
    '$store.state.gouwuList': {
      handler: function () {
        loca.save('gouwu', this.$store.state.gouwuList)
      },
      deep: true
    }
  }
}
</script>
<style scoped lang="scss">

.par11{
   width: 100%;
}
.lun{
   button{
    width: 0.4rem;
    height: 0.4rem;
    border:none;
    border-radius: 50%;
    background: white;
    position: fixed;
    top:0.2rem;
    left: 0.2rem;
    z-index: 5;
    outline: none;
  }
   img{
      width: 100%;
    }
}
.parjia{
  width: 100%;
  height: 0.6rem;
  position: fixed;
  bottom:0;
  left: 0;
  background: palegreen;
  ul{
    display: flex;
    height: 0.6rem;
    li{
      width: 16%;
      height: 0.6rem;
      border-right: 0.01rem solid slategray;
      text-align: center;
      line-height: 0.6rem;

      .el-icon-service{
        font-size: 0.45rem;
        color: slategray;
        margin-top: 0.1rem;
      }
      .el-icon-shopping-cart-2{
        font-size: 0.45rem;
        color: slategray;
        margin-top: 0.1rem;
      }
      .el-icon-star-off{
        font-size: 0.45rem;
        color: slategray;
        margin-top: 0.1rem;
      }
    }
    li:nth-child(2){
      display: flex;
      justify-content: center;
      .num11{
        display: block;
        width: 0.25rem;
        height: 0.25rem;
        background: red;
        color: white;
        line-height: 0.3rem;
        border-radius: 50%;
      }
    }
    li:nth-child(4){
      width: 25.6%;
      font-size: 0.23rem;
    }
    li:nth-child(5){
      width: 25.6%;
      background: red;
      font-size: 0.24rem;
      border-right: none;
    }
  }
}
.gouwu{
  position: fixed;
  bottom: 0;
  left:0;
  z-index: 3;
  width: 100%;
  height: 7.4rem;
  background: white;
  .gouwu_to{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 0.01rem solid silver;
    height: 1.8rem;
    img{
      width: 1rem;
    }
    div{
      width: 4.5rem;
      height: 1.3rem;
      &>p{
          font-size: 0.25rem;
      }
      span{
        color: red;
        display: block;
        margin-top: 0.5rem;
        font-size: 0.3rem;
      }
    }
    .el-icon-circle-close{
       height: 1.1rem;
       font-size: 0.5rem;
    }
  }
  .gouwu_prop{
    width: 100%;
    height: 2.8rem;
    border-bottom: 0.01rem solid slategray;
    &>p{
      padding-left:0.2rem;
      padding-top:0.2rem;
    }
    ul{
      li{
        margin: 0.2rem 0.3rem;
        &>div{
           display: flex;
          flex-wrap: wrap;
         &>p{
            width: 100%;
            height: 0.5rem;
          }
          div{
            width: 1.5rem;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            border:0.01rem solid slategray;
            justify-content: space-around;
            border-radius: 0.1rem;
            margin-right: 0.4rem;
           margin-top: 0.1rem;
            p{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .aa{
               border:0.01rem solid red;
               p{
                 color: red;
                }
          }
          .aa1{
               border:0.01rem solid red;
               p{
                 color: red;
                }
             }
        }
      }
    }
  }
  .gouwu_num{
    display: flex;
    height: 1.5rem;
    align-items: center;
    p{
      font-size: 0.25rem;
      width: 2.5rem !important;
      text-align: center;
    }
    &>div{
      display: flex;
      border: 0.01rem solid slategray;
      margin-left: 2.5rem;
      button{
        width: 0.5rem;
        height: 0.4rem;
        font-size: 0.3rem;
      }
      span{
        display: block;
        width: 0.5rem;
        height: 0.4rem;
        font-size: 0.3rem;
        text-align: center;
      }
    }
  }
  .gwcj{
    width: 100%;
    height: 1rem;
    background: red;
    font-size: 0.5rem;
    color:white;
    text-align: center;
    line-height: 1rem;

  }
}
.alert{
  width: 120%;
  height: 150%;
  position: fixed;
  top:0;
  left:0;
  background: rgba(0,0,0,0.1);
  z-index: 20;
  &>div{
    width: 5rem;
    height: 2.5rem;
    margin:3rem auto;
    background: white;
    text-align: center;
    h1{
      font-size: 0.35rem;
      padding-top: 0.3rem;
    }
    p{
      font-size: 0.25rem;
      margin-top: 0.3rem;
    }
    h2{
      height: 0.7rem;
      border-top: 0.01rem solid slategray;
      margin-top: 0.4rem;
      line-height: 0.7rem;
      font-size: 0.3rem;
    }
  }
}

</style>
