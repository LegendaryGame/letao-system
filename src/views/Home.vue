<template>
  <div class="home">
    <el-container>
      <el-aside :width="collapse?auto:width">
        <div class="profile">
          <div class="avatar">
            <img
              src="../assets/avatar.jpg"
              alt=""
            >
          </div>
          <h4>软糖</h4>
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="collapse"
          :router='true'
        >
          <el-menu-item index="user">
            <i class="fa fa-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="fa fa-bars"></i>
              <span>分类管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="categoryFirst">一级分类管理</el-menu-item>
              <el-menu-item index="categorySecond">二级分类管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="productList">
            <i class="fa fa-product-hunt"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <a
            href="javaScript:;"
            @click="collapse = !collapse"
            class="myicon myicon-menu toggle-btn"
          ></a>
          <div class="system-title">乐淘后台管理系统</div>
          <div class="logout"><span>退出</span></div>
        </el-header>
        <el-main style="backgroundColor:#666">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      auto: 'auto',
      width: '200px',
      collapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #545c64;
  }
  .profile {
    height: 135px;
    padding-top: 25px;
    text-align: center;
    background-color: #545c64;
    .avatar {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      overflow: hidden;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      img {
        width: 100%;
        display: block;
      }
    }
    h4 {
      color: #fff;
      font-size: 16px;
      margin-top: 10px;
    }
  }
  .toggle-btn {
    padding: 0 15px;
    margin-left: -20px;
    font-size: 36px;
    color: white;
    cursor: pointer;
    line-height: 60px;
    &:hover {
      background-color: #4292cf;
    }
  }
  .system-title {
    font-size: 28px;
    color: white;
  }
  .fa {
    width: 18px;
    display: line-block;
  }
  .logout {
    color: #fff;
  }
}
</style>
