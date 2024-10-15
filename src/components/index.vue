<template>
  <div class="content">
    <!--导航栏-->
    <div class="header" v-if="token !== ''">
      <div class="header_logo">
        <!--<img @click="toIndex" class="logo left" src="https://picture-cdn.paquapp.com/cmspic/logo.png" alt="">-->
        <div class="cmsName">特种作业学员报名管理后台</div>
      </div>

      <div class="login_status">
        <el-dropdown>
        <span class="el-dropdown-link">
          你好，{{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="toPassword">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!--页面主题部分-->
    <div class="main">
      <div class="left_area" v-if="token !== ''">
        <el-menu
            :default-active="$route.path"
            router
            unique-opened
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-submenu :index="index + 1 + ''" v-for="(item, index) in navList" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.submenuTitle }}</span>
            </template>
            <el-menu-item-group v-for="(item2, index2) in item.children" :key="index2">
              <el-menu-item :index="item2.path">{{item2.itemName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </div>
      <div class="right_area">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      list: [],
      token: '',
      name: '',
      navList: []
    }
  },
  mounted() {
    this.name = sessionStorage.getItem('name');
    this.token = sessionStorage.getItem('token');
    this.navList = JSON.parse(sessionStorage.getItem('navList'));
  },
  methods: {
    logout() {
      sessionStorage.clear("name");
      sessionStorage.clear("token");
      sessionStorage.clear("navList");
      this.$router.replace('/login');
      location.reload();
    },
    toIndex() {
      location.href = '/index';
    },
    toPassword() {
      location.href = '/password';
    }
  }
}
</script>

<style scoped>
.header {
  background: #2A2E3F;
  color: rgb(255, 255, 255);
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
}

.main {
  width: 100%;
  height: calc(100% - 76px);
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
}

.el-menu-vertical-demo {
  width: 200px;
}

.left_area {
  width: 200px;
  background: #545c64;
  min-height: calc(100vh - 76px);
  max-height: 100%;
  /* overflow-y: scroll; */
}

.right_area {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 30px;
}

.main-left {
  width: 160px;
  height: 100vh;
  background: #f2f2f2;
}

.main-right {
  height: calc(100% - 160px);
  max-height: 100%;
}

.header_logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.el-icon-switch-button {
  font-size: 20px;
  cursor: pointer;
}

.logo {
  height: 30px;
  cursor: pointer;
}

.cmsName {
  margin-left: 20px;
  font-size: 20px;
}

.login_status {
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
