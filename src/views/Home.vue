<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
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
        >
        <el-menu-item index="1">
            <i class="fa fa-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="fa fa-bars"></i>
              <span>分类管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="fa fa-product-hunt"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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
  .welcome {
    color: white;
    margin-right: 20px;
  }
  .fa{
      width: 18px;
      display: line-block;
  }
}
</style>
