<template>
    <div class="login">
        <div class="container">
           <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      class="demo-ruleForm"
    >
      <img
        src="../assets/avatar.jpg"
        alt=""
        class="avatar"
      >
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          prefix-icon='myicon myicon-user'
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          prefix-icon='myicon myicon-key'
          type='password'
        ></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn" @click="submitForm('loginForm')">登录</el-button>
    </el-form>
      </div>
    </div>
</template>

<script>
import {eLogin} from '@/api'
export default{
  data () {
    return {
      loginForm: {
        username: 'root',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          eLogin(this.loginForm).then(res => {
            // console.log(res)
            if (res.success) {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              this.$router.push({name: 'User'})
            } else if (res.error === 1000) {
              this.$message({
                message: '用户名错误',
                type: 'error'
              })
            } else if (res.error === 1001) {
              this.$message({
                message: '密码错误',
                type: 'error'
              })
            }
          })
        } else {
          this.$message({
            message: '连接超时,请检查您的网络问题...',
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
