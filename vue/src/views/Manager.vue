<template>
  <div class="background-container">
    <div class="manager-container">
      <!--  头部  -->
      <div class="manager-header">
        <div class="manager-header-left">
          <img src="@/assets/imgs/xjtu_logo_red.png" />
          <div class="title">勿理实验教学中心</div>
        </div>

        <div class="manager-header-center">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="color: #0f9876;">
            <el-breadcrumb-item :to="{ path: '/' }" >首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: $route.path }">{{ $route.meta.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

      </div>

      <!--  主体  -->
      <div class="manager-main">
        <!--  侧边栏  -->
        <div class="manager-main-left">
          <el-menu
              :router="true"
              style="border: none"
              :default-openeds="['info', 'user']"
              @select="select"
              :default-active="$route.path"><!--            :collapse="true"-->
            <el-menu-item style="height: auto; padding: 0px; margin-bottom: 7px; box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.1)">
              <div class="manager-header-right">

                <div class="avatar">
                  <img :src="user.avatar || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" 
                       @error="handleImageError" />
                  <div style="color: #001e1c">{{ user.name ||  '管理员' }}</div>
                  <button class="logout-button" @click="logout">退出登录</button>
                </div>
<!--                <el-dropdown placement="bottom">-->
<!--                  -->
<!--                  <el-dropdown-menu slot="dropdown">-->
<!--                    <el-dropdown-item @click.native="goToPerson">个人信息</el-dropdown-item>-->
<!--                    <el-dropdown-item @click.native="$router.push('/password')">修改密码</el-dropdown-item>-->
<!--                    <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>-->
<!--                  </el-dropdown-menu>-->
<!--                </el-dropdown>-->
              </div>

            </el-menu-item>

            <el-menu-item

                @click.native="goToPerson"
                style=" padding: 0px 50px 0px 0px !important; text-align: center;" >
              <i class="el-icon-setting"></i>
              <span style="margin-left: 15px; text-align: center; " slot="title">个人设置</span>
            </el-menu-item>

            <el-menu-item

                style=" padding: 0px 50px 0px 0px !important; text-align: center"
                index="/home">
              <i class="el-icon-s-home"></i>

              <span style="margin-left: 15px; text-align: center; " slot="title">系统首页</span>
            </el-menu-item>
            <el-menu-item

                style=" padding: 0px 50px 0px 0px !important; text-align: center"
                index="/front">
              <i class="el-icon-back"></i>

              <span style="margin-left: 15px; text-align: center; " slot="title">系统前台</span>
            </el-menu-item>

            <el-submenu index="info">
              <template slot="title">
                <i class="el-icon-menu"></i><span style="margin-left: 15px; text-align: center">信息管理</span>
              </template>
              <el-menu-item index="/notice" v-if="user.role === 'ADMIN'">公告信息</el-menu-item>
              <el-menu-item index="/type" v-if="user.role === 'ADMIN'">实验室分类</el-menu-item>
              <el-menu-item index="/lab" v-if="user.role !== 'STUDENT'">实验室信息</el-menu-item>
              <el-menu-item index="/labStudent" v-else>实验室信息</el-menu-item>
              <el-menu-item index="/reserve">预约记录</el-menu-item>
              <el-menu-item index="/fix">报修记录</el-menu-item>
              <el-menu-item  index="/checks">检修记录</el-menu-item>

            </el-submenu>


            <el-submenu index="user" v-if="user.role === 'ADMIN'">
              <template slot="title">
                <i class="el-icon-menu"></i><span style="margin-left: 15px; text-align: center">用户管理</span>
              </template>
              <el-menu-item index="/admin">管理员信息</el-menu-item>
              <el-menu-item index="/labadmin">实验室管理员</el-menu-item>
              <el-menu-item index="/student">学生信息</el-menu-item>
            </el-submenu>

            <el-submenu index="search">
              <template slot="title">
                <i class="el-icon-search"></i>
                <span style="margin-left: 15px; text-align: center">搜索</span>
              </template>
              <el-menu-item index="/disease-wiki">番茄病害百科</el-menu-item>
              <el-menu-item index="/disease-detect">识别番茄病害</el-menu-item>
            </el-submenu>

          </el-menu>
        </div>

        <!--  数据表格 这个router-view的意思是, 切换路由的时候, 页面上这部分会切换, 也就是并没有切换整个页面; 在路由里面是写成: parent-children的形式 -->
        <div class="manager-main-right">
          <router-view @update:user="updateUser" />
        </div>
      </div>



      <!--  页面底部-->
      <div class = "footer">

        <p style="margin-top:15px;">地址：陕西省西安市咸宁西路28号</p>
        <p>版权所有：西安交通大学国家级物理实验教学示范中心 邮编：710049  电话 : 029-82668721</p>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Manager",
  data() {
    return {
      user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
    }
  },
  created() {
    if (!this.user.id) {
      this.$router.push('/front')
    }
  },
  methods: {
    handleImageError(e) {
      e.target.src = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    },
    updateUser() {
      this.user = JSON.parse(localStorage.getItem('xm-user') || '{}')   // 重新获取下用户的最新信息
    },
    goToPerson() {
      if (this.user.role === 'ADMIN') {
        this.$router.push('/adminPerson')
      }
      if (this.user.role === 'STUDENT') {
        this.$router.push('/studentPerson')
      }
      if (this.user.role === 'LABADMIN') {
        this.$router.push('/labadminPerson')
      }
    },


    logout() {
      localStorage.removeItem('xm-user')
      this.$router.push('/login')
    },

    handleMouseLeave() {
      setTimeout(() => {
        this.itemBackgroundColor = 'transparent';
      }, 500); // 设置延迟时间，单位为毫秒
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/manager.css";
</style>