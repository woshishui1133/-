
<!-- //   <div>
//      <div class="register">
//        <h1>新用户注册</h1>
//        <p>很高兴您将成为商城的会员（注册只需一步）</p>
//        <input type="text" placeholder="手机号" v-model="post.mobile">
//        <input type="password" placeholder="密码"  v-model="post.pwd">
//        <input type="password" placeholder="确认密码" >
//        <input type="text" placeholder="用户名" v-model="post.nick">
//        <input type="text" placeholder="图形验证码" v-model="post.code">
//        <p>{{this.tuyan}}</p>
//        <input type="text" placeholder="选择省-选择市">
//        <input type="text" placeholder="获取验证码">
//        <p>获取验证码</p>
//        <button>立即注册</button>
//        <p>已有账号？立即登录</p>
//      </div>
//   </div> -->
<!-- // </template> -->

<!-- <script>
// import Product from '../../services/prodct-service'
// const _product = new Product()
// export default {
//   data () {
//     return {
//       post: {
//         mobile: '', // 注册手机号
//         pwd: '', // 密码
//         code: '', // 短信验证
//         nick: '', // 昵称
//         province: '', // 所属省份
//         city: ''// 所属城市
//       },
//       tuyan: ''
//     }
//   },
//   created () {
//     _product.tux().then(res => {
//       console.log(res.data)
//       // this.tuyan = res.data
//     })
//   }
// }
// </script>

// <style lang="scss" scoped>
// .register{
//   width: 6.5rem;
//   height: 10rem; -->
<!-- //   margin: 0.5rem auto;
//   box-shadow: slategray 0 0 0.02rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: slategray;
//   position: relative;
//    h1{
//    width: 4.5rem;
//    height: 0.6rem;
//    line-height: 0.6rem;
//    font-size: 0.5rem;
//    font-weight: inherit;
//    margin-top:0.5rem;
//   }
//   p:nth-child(2){
//     width: 4.5rem; -->
<!-- //     font-size: 0.3rem; -->
<!-- //     margin: 0.2rem;
//   }
//   input{
//     width: 4.5rem;
//     height: 0.6rem;
//     margin: 0.15rem 0;
//     font-size: 0.25rem;
//     background:#efefefef  url('../../assets/shou.png') no-repeat right;
//     border: none;
//     border-radius: 0.05rem;
//     padding-left: 0.1rem;
//   }
//   input:nth-child(4){ -->
<!-- //     background:#efefefef  url('../../assets/yan.png') no-repeat right;
//   }
//   input:nth-child(5){
//     background:#efefefef  url('../../assets/yan.png') no-repeat right;
//   }
//   input:nth-child(6){
//     background:#efefefef  url('../../assets/asa.png') no-repeat right;
//   }
//   p:nth-child(8){
//     height: 0.55rem;
//     width: 2rem;
//     background: springgreen;
//     position: absolute;
//     top:6.05rem;
//     left:3.55rem;
//   }
//   input:nth-child(9){
//     background: #efefefef;
//   }
//   p:nth-child(11){
//     height: 0.55rem;
//     width: 2rem;
//     background: springgreen;
//     position: absolute;
//     top:7.85rem;
//     left:3.55rem;
//   }
//   button{
//     width: 2rem;
//     height: 0.5rem;
//     border: none;
//     background-image: linear-gradient(to right,#CFA4B7,#FFC90E,#96FF0E);
//     border-radius: 0.1rem;
//     color: white;
//     margin: 0.2rem;
//   }
// }
// </style> -->
<template>
  <div class="box">
    <div class="register">
      <h1>新用户注册</h1>
      <p>很高兴您将成为商城的会员（注册只需一步）</p>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item  prop="mobile">
        <el-input v-model.number="ruleForm.mobile" placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item  prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码"></el-input>
      </el-form-item>
    <el-form-item  prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码"></el-input>
    </el-form-item>
     <el-form-item  prop="name">
       <el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
    </el-form-item>
     <el-form-item  prop="tupian">
        <el-input v-model="ruleForm.tupian" placeholder="图片验证" ></el-input>
     </el-form-item>
     <p class="yanz" @click="tupyan">
       <img :src="this.tuyan" alt="">
    </p>
    <el-select v-model="ruleForm.region" placeholder="请选择省" @change="sheng1(ruleForm.region)">
      <el-option :label="item.name" :value="item.name" v-for="(item,index) in sheng" :key="index"></el-option>
    </el-select>
    <el-select v-model="ruleForm.region2" placeholder="请选择市">
        <el-option :label="item.name" :value="item.name" v-for="(item,index) in shilist" :key="index"></el-option>
    </el-select>
     <el-form-item  prop="yanz">
        <el-input v-model="ruleForm.yanz"></el-input>
     </el-form-item>
     <p class="yanzm" @click="huoqu(ruleForm.mobile,num,ruleForm.tupian)">获取验证码</p>
    <el-form-item>
     <el-button class="button" type="primary" @click="submitForm('ruleForm')">提交</el-button>
   </el-form-item>
  </el-form>
   <router-link to='/tologin' tag="p">已有账号？立即登录</router-link>
   </div>

  </div>
</template>

<script>
import Product from '../../services/prodct-service'
const _product = new Product()
export default {
  data () {
    let checkmobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 11111111111) {
            callback(new Error('必须年满11位'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      sheng: [],
      shiId: '',
      shilist: [],
      tuyan: '',
      num: '',
      ruleForm: {
        pass: '', // 密码
        checkPass: '',
        mobile: '', // 手机
        name: '', // 用户名
        region: '', // 省
        region2: '', // 市
        tupian: '', // 图片验证码
        yanz: ''// 手机验证码

      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        mobile: [
          { validator: checkmobile, trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        region2: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]

      }
    }
  },
  methods: {
    submitForm (formName) {
      console.log(this.region)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    // 点击省
    sheng1 (val) {
      console.log(val)
      this.sheng.map(item => {
        if (item.name === val) {
          this.shiId = item.id
        }
      })
      console.log(this.shiId)
      // 市
      _product.shi(this.shiId).then(res => {
        // console.log(res.data.data)
        this.shilist = res.data.data
      })
    },
    // 刷新图片验证
    tupyan () {
      this.num = new Date().getTime()
      _product.tux(this.num).then(res => {
        // console.log(res.config.url)
        this.tuyan = res.config.url
      })
    },
    // 点击获取手机验证码
    huoqu (a, v, i) {
      console.log(a, v, i)
      let obj = {
        mobile: a,
        num: v,
        picCode: i
      }
      _product.duanx(obj).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    // 省
    _product.sheng().then(res => {
      // console.log(res.data.data)
      this.sheng = res.data.data
    })
    // 图片验证码
    this.tupyan()
  }
}

</script>

<style lang="scss" scoped>
.box{
//   width: 7.5rem;
//  position: relative;
 .register{
   width: 6.5rem;
   height: 9rem;
   margin: 0.5rem auto;
   box-shadow: slategray 0 0 0.02rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   color: slategray;
   position: relative;
    h1{
    width: 4.5rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.5rem;
    font-weight: inherit;
    margin-top:0.5rem;
   }
   p:nth-child(2){
     width: 4.5rem;
      font-size: 0.3rem;
      margin: 0.2rem;
  }
  .yanz{
      position: absolute;
      top:5.33rem;
      left:3.5rem;
      z-index: 1;
      img{
        width: 2rem;
      }
    }
     .yanzm{
      width: 1.2rem;
      height: 0.42rem;
      line-height: 0.4rem;
      text-align: center;
      border-left: 0.01rem solid;
      position: absolute;
      z-index: 1;
      top:6.6rem;
      left:4rem;
      background: white;
    }
    .demo-ruleForm{
   width: 100%;
   .el-form-item {
     width: 100%;
    //  border: 0.01rem solid;
   }
   .el-input{
     width:4rem;
   }
   .el-select{
     margin-left: 0.4rem;
   }
    .button{
      width: 2rem;
      height: 0.5rem;
      background-image: linear-gradient(to left,#99D9EA,#FFC90E);
      border:none;
      margin-left: 1.2rem;
    }
 }
 }

}
</style>
