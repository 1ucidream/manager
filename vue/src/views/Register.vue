<template>

  <!--注册还没放出入口. 但是在网址输入/register是可以访问-->
  <div class="container">
    <div style="width: 390px;  padding: 45px;  background: transparent; border-radius: 20px;  border: 1px solid rgba(255, 255, 255, 0.5); backdrop-filter: blur(5px);">
      <div style="text-align: center; font-size: 40px; margin-bottom: 32px; color: #ffffff; font-family: 'Book Antiqua',serif">Register</div>

      <el-form style="border-radius: 50%; padding-bottom: 0px;"  :model="form" :rules="rules" ref="formRef">

        <el-form-item prop="username">
          <el-input class = "username-input-wrapper" prefix-icon="el-icon-user" placeholder="Enter Username" v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input class = "password-input-wrapper" prefix-icon="el-icon-lock" placeholder="Enter Password" show-password  v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item  prop="confirmPass">
          <el-input class = "password-confirm-wrapper" prefix-icon="el-icon-lock" placeholder="Confirm Password" show-password  v-model="form.confirmPass"></el-input>
        </el-form-item>

        <el-form-item style = "  margin-bottom: 5px;">
          <el-button class = "register-button" @click="register">Register</el-button>
        </el-form-item>
        <div class="login-label" >
<!--          <div style="flex: 1"></div>-->
<!--          <div style="flex: 1; text-align: right">-->
            Got an Account? <a href="/login">Log in</a>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    // 验证码校验
    const validatePassword = (rule, confirmPass, callback) => {
      if (confirmPass === '') {
        callback(new Error('请确认密码'))
      } else if (confirmPass !== this.form.password) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }
    return {
      form: { role : 'STUDENT' },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        confirmPass: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      }
    }
  },
  created() {

  },
  methods: {
    register() {
      this.$refs['formRef'].validate((valid) => {
        if (valid) {
          // 验证通过
          this.$request.post('/register', this.form).then(res => {
            if (res.code === '200') {
              this.$router.push('/')  // 跳转登录页面
              this.$message.success('注册成功')
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(to top, rgba(250, 208, 196, 0.63) 0%, rgba(250, 208, 196, 0.62) 1%, rgba(255, 209, 255, 0.68) 100%);
  /*background-image: url("@/assets/imgs/miguel_in_dust.webp");*/
  background-size: 100%;
  backdrop-filter: blur(10px); /* 应用模糊效果，数字可根据需要进行调整 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  padding-bottom: 50px;


  display: flex;
  flex-direction: column;
}

.username-input-wrapper {
  border-radius: 50%;
  font-size: large;
  align-items: center; /* 垂直居中对齐 */
  margin-bottom: 0px;
}/*设置输入框的圆角半径为5px */

.username-input-wrapper>>>.el-input__inner{   /*或者 .s2>>>.el-input__inner  */
  background-color: rgb(255, 255, 255);    /*调整inner的背景色，透明*/
  height: 50px;    /*调整inner的高度*/
  border-color: white;     /*输入框圆角值*/
  border-radius: 25px;
  color: #e3e3e3;

}

.password-input-wrapper{
  border-radius: 50%; /* 设置输入框的圆角半径为5px */
  font-size: large;
}

.password-input-wrapper>>>.el-input__inner{
  background-color: rgb(255, 255, 255);    /*调整inner的背景色，透明*/
  height: 50px;    /*调整inner的高度*/
     /*输入框圆角值*/
  border-radius: 25px;
  /* 改变获取焦点后的竖线颜色 */
  caret-color: rgba(255, 255, 255, 0.8);
  color: #e3e3e3;
}

.password-confirm-wrapper{
  border-radius: 50%; /* 设置输入框的圆角半径为5px */
  font-size: large;
  margin-bottom: 27px;
}

.password-confirm-wrapper>>>.el-input__inner{
  background-color: rgb(255, 255, 255);    /*调整inner的背景色，透明*/
  height: 50px;    /*调整inner的高度*/
  /*输入框圆角值*/
  border-radius: 25px;
  /* 改变获取焦点后的竖线颜色 */
  caret-color: rgba(255, 255, 255, 0.8);
  color: #e3e3e3;
}

.register-button {
  width: 100%;
  background: rgba(243, 235, 235, 0.2);    /*调整inner的背景色，透明*/
  border-color: #ffffff;
  color: #ffffff;
  height: 50px;    /*调整inner的高度*/
  border-radius: 25px;
  font-size: 20px;

  margin-top: auto;
}

.register-button:hover{
  background: rgb(255, 255, 255, 0.9);
  color: #340606;
}

.login-label{
  display: flex;
  justify-content: center;
  color: white;
}

a {
  color: #f5f4f4;
}

a:hover{
  text-decoration: underline;
}
</style>