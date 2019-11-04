<template>
  <div>
      <div class="top">
        <!-- <button>回</button> -->
        <router-link to="/sitelist" tag="button"> 回</router-link>
        <p>新增地址</p>
      </div>
      <div class="con">
        <form >
          <ul>
           <li>
            <p>联系人</p>
            <input type="text" placeholder="姓名" v-model="ruleForm.name">
           </li>
            <li>
            <p>手机号</p>
            <input type="number" placeholder="11位手机号" v-model="ruleForm.mobile">
           </li>
            <li>
            <p>选择地区</p>
            <input type="text" class="ins" v-model="sheng2" placeholder="请选择">
            <input type="text"  class="ins" v-model="shi2" placeholder="请选择">
            <input type="text"  class="ins" v-model="shi2" placeholder="请选择">
           </li>
            <li>
            <p>详情地址</p>
            <input type="text" placeholder="街道门牌信息" v-model="ruleForm.xq">
           </li>
           <li>
            <p>邮政编码</p>
            <input type="text" placeholder="邮政编码" v-model="ruleForm.postal">
           </li>
           </ul>
            <button @click="submitForm(ruleForm,shiId,shengId)">保存</button>
        </form>
      </div>
      <div class="shengshi" >
          <h1>请选择省</h1>
          <select v-model="sheng2"  @change="shengs(sheng2)">
            <option disabled value="">请选择省</option>
            <option v-for="(item,index) in sheng" :key="index">
               <p >{{item.name}}</p>
            </option>
          </select>
          <h1>请选择市</h1>
          <select v-model="shi2" @change="shis(shi2)">
            <option disabled value="">请选择市</option>
            <option v-for="(item,index) in shi" :key="index">
               <p>{{item.name}}</p>
            </option>
          </select>

      </div>
  </div>
</template>

<script>
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  data () {
    return {
      dizhilist: [],
      sheng: [],
      shi: [],
      shiId: '',
      shengId: '',
      sheng2: '',
      shi2: '',
      token: [],
      ruleForm: {
        name: '', // 名字
        mobile: '', // 电话
        xq: '', // 详情
        postal: '', // 邮箱
        checked: true,
        shiId: '', // 市
        shengId: '', // 省
        token: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    let token = JSON.parse(window.localStorage.getItem('1902'))
    console.log(token.kk)
    this.token = token.kk
    _product.sheng().then(res => {
      console.log(res.data)
      this.sheng = res.data.data
    })
  },
  methods: {
    submitForm (val) {
      console.log(val)
      this.ruleForm.shiId = this.shiId
      this.ruleForm.shengId = this.shengId
      this.ruleForm.token = this.token
      _product.shouhuo(this.ruleForm).then(res => {
        console.log(res.data)
      })
      // this.$store.commit('site', val)
    },
    shengs (val) {
      console.log(val)
      this.sheng.map(item => {
        if (item.name === val) {
          this.shengId = item.id
        }
      })
      console.log(this.shengId)
      // 市
      _product.shi(this.shengId).then(res => {
        // console.log(res.data.data)
        this.shi = res.data.data
      })
    },
    shis (val) {
      this.shi.map(item => {
        if (item.name === val) {
          this.shiId = item.id
        }
      })
      console.log(this.shiId)
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  position: relative;
}
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
.con{
  ul{
    li{
      height: 0.8rem;
      border-bottom: 0.01rem solid slategray;
      display: flex;
      align-items: center;
      // justify-content: space-around;
      p{
        width: 1rem;
        margin-left: 0.3rem;
      }
      input{
        width: 5rem;
        height: 0.4rem;
        border:none;
        outline: none;
      }
      .ins{
        width: 1rem;
      }
    }
  }
   button{
      width: 4rem;
      height: 0.4rem;
      margin: 0.3rem 20%;
      border-radius: 0.1rem;
      border:none;
      outline: none;
      background:springgreen;
      color: white;
    }
}
.shengshi{
  display: flex;
  justify-content: space-around;
  height: 2rem;
  // border: 0.01rem solid;
  align-items: center;
}

</style>
