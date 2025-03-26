<template>
  <div class="container">
    <div style="width: 390px;  padding: 45px 45px 10px 45px;  background: transparent; border-radius: 20px;  border: 1px solid rgba(255, 255, 255, 0.5); backdrop-filter: blur(5px); /* 应用模糊效果，数字可根据需要进行调整 */
             ">
      <div style="text-align: center; font-size: 30px; margin-bottom: 32px; color: #ffffff; font-family: 'Book Antiqua',serif">SafeLink</div>

      <el-form style="border-radius: 50%; padding-bottom: 0px;" :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input class = "username-input-wrapper" prefix-icon="el-icon-user" placeholder=" Enter Username" v-model="form.username" ></el-input>
        </el-form-item>

        <el-form-item prop="password" >
          <el-input class = "password-input-wrapper" prefix-icon="el-icon-lock" placeholder=" Enter Password" show-password  v-model="form.password" ></el-input>

          <div class = "check-box-forget">
          <el-checkbox class = "check-box" v-model="form.remember">Remenber me</el-checkbox>
          <a href="#" class="forget-password">Forget Password？   </a>
          </div>
        </el-form-item>

        <el-form-item style = "margin-bottom: 5px">
          <el-button class = "login-button"  @click="login" >Login</el-button>
        </el-form-item>

        <div class="register">Don't have an account? <a href="/register">  Register</a>
<!--          <div style="align-items: center"></div>-->
<!--          <div style=" align-items: center">  -->
<!--          </div>-->
        </div>

        <el-form-item>
        <div class = "not_login">
        <a href="/front">暂不登录</a>
        </div>

        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {  },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  created() {

  },
  methods: {
    login() {
      this.$refs['formRef'].validate((valid) => {
        if (valid) {
          // 验证通过
          this.$request.post('/login', this.form).then(res => {
            if (res.code === '200') {
              localStorage.setItem("xm-user", JSON.stringify(res.data))  // 存储用户数据
              this.$router.push('/')  // 跳转主页
              this.$message.success('登录成功')
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
  /*background-image: url("@/assets/imgs/Miguel.webp");*/
  background-image: linear-gradient(to top, rgba(227, 164, 184, 0.44) 0%, rgba(173, 181, 222, 0.47) 100%);

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

.select{
  width: 100%;

}

.select>>>.el-input__inner{
  background-color: rgba(250, 243, 243, 0.88);    /*调整inner的背景色，透明*/
  height: 50px;    /*调整inner的高度*/
     /*输入框圆角值*/
  border-radius: 25px;
  color: #e3e3e3;
  font-size: 18px;
  text-align: center
}

.select>>>.el-input__inner:hover{
  background: rgb(255, 255, 255, 0.9);
  color: #340606;

}

/*
.select>>>.el-select,
.select>>>.el-input,
.select>>>.el-input__inner{
  color:#fff;
  text-align: center;
}*/

/*el-input聚焦的时候 外层的border会有一个样式*/
.select>>>.el-select .el-input.is-focus .el-input__inner{

    border: 1px solid whitesmoke;
  }

/*修改总体选项的样式 最外层
    */
.select>>> .el-select-dropdown{
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(15px);
    border:1px;
  border-radius: 10px;
  margin-top: 5px;
}

/*修改单个的选项的样式*/

.select>>>.el-select-dropdown__item{
    background-color: transparent;
    color: #423f3f;
  border:1px;

}

/*item选项的hover样式*/

.select>>>.el-select-dropdown__item:hover{
    font-weight: bold;
    color: rgb(255, 255, 255);
    background: rgba(80, 76, 80, 0.3);
  }

/*修改的是下拉框选项内容上方的尖角*/
.select>>>.el-popper .popper__arrow, .el-popper .popper__arrow::after{
    display: none;
  }

.username-input-wrapper {
  border-radius: 50%;
  font-size: large;
  align-items: center; /* 垂直居中对齐 */
  margin-bottom: 0px;
  color: white;

}/*设置输入框的圆角半径为5px */

.username-input-wrapper>>>.el-input__inner{   /*或者 .s2>>>.el-input__inner  */
  background-color: rgba(250, 243, 243, 0.88);    /*调整inner的背景色，透明*/
  height: 50px;    /*调整inner的高度*/
  border-color: white;       /*输入框圆角值*/
  border-radius: 25px;
  color: #bd5757;

}

.password-input-wrapper{
  border-radius: 50%; /* 设置输入框的圆角半径为5px */
  font-size: large;
  border: 1px;
  color: #6b2121;
}

.password-input-wrapper>>>.el-input__inner{
  background-color: rgba(250, 243, 243, 0.88);    /*调整inner的背景色，透明*/
  height: 50px;    /*调整inner的高度*/
  border-color: white;    /*输入框圆角值*/
  border-radius: 25px;
  /* 改变获取焦点后的竖线颜色 */
  caret-color: rgba(255, 255, 255, 0.8);
  color: #772828;
}

.login-button {
  width: 100%;
  background: rgba(236, 232, 232, 0.2);    /*调整inner的背景色，透明*/
  border-color: #e3e3e3;
  color: #ffffff;
  height: 50px;    /*调整inner的高度*/
  border-radius: 25px;
  font-size: 20px;

  margin-top: auto;
}

.login-button:hover{
  background: rgb(255, 255, 255, 0.9);
  color: #340606;
}

.check-box-forget{
  margin-left: 5px;
  display: flex; /* 使用 Flexbox 布局 */
  /* align-items: center;  垂直居中对齐 */
  justify-content: space-between;/*使得checkbox和忘记密码可以分居两侧*/

}
.check-box{
  color: #ffffff;
  margin-right: 10px; /* 设置复选框和链接之间的右边距，可根据需要进行调整 */
}

.check-box>>>.el-checkbox__inner {
  accent-color: #ffffff;
  border-color: #ffffff;
}
.forget-password:hover{
  text-decoration: underline;/*添加:hover,悬停, underline是添加下划线*/
}
a {
  color: #fdfdfd;
  /* text-align: right;  将内容右对齐 */
}

a:hover{
  text-decoration: underline;/*添加:hover,悬停, underline是添加下划线*/

}

.register {
  display: flex;
  justify-content: center;
  color: #ffffff;
}

.not_login{
  display: flex;
  justify-content: right;
  color: #f5f4f4;
}
</style>

