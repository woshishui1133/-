<template>
  <div>
     <div class="tologin">
       <h1>账号登录</h1>
       <p>小范-严选商城欢迎你</p>
       <input type="text" placeholder="手机号码">
       <input type="password" placeholder="密码">
       <button>登录</button>
       <p>忘记密码</p>
       <p>还没有注册？立即注册</p>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.tologin{
  width: 6.5rem;
  height: 6rem;
  margin: 0.5rem auto;
  box-shadow: slategray 0 0 0.02rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
