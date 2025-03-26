<template>
  <!--主体-->
<!--  大学物理实验-->

  <div class="main-body">
    <div class="info-boxx-wrapper">
      <div class="info-boxx">
          <img src="@/assets/imgs/scenery2.jpg">
          </img>
      </div>
    </div>
    <div class="info-box-wrapper">
      <div class="info-box">

        <div class="info-box-left-wrapper">
          <div class="info-box-left">
                  <el-menu
                      router
                      :default-active="$route.path"
                      class="left-menu"
                      @open="handleOpen"
                      @close="handleClose">
                    <div class="left-menu-title">实验教学

                    </div>
                    <el-menu-item class="left-menu-item" index="/front/sysgk">
                      <span slot="title">实验室概况</span>
                    </el-menu-item>
                    <el-menu-item  class="left-menu-item" index="/front/dxwlsy" >
                      <span slot="title">大学物理实验</span>
                    </el-menu-item>
                    <el-menu-item  class="left-menu-item" index="/front/zywlsy">
                      <span slot="title">专业物理实验</span>
                    </el-menu-item>
                    <el-menu-item  class="left-menu-item" index="/front/jdwlsy">
                      <span slot="title">近代物理实验</span>
                    </el-menu-item>
                    <el-menu-item  class="left-menu-item" index="/front/zhwlsy">
                      <span slot="title">综合物理实验</span>
                    </el-menu-item>
                       

                  </el-menu>

          </div>
        </div>
        <div class="info-box-right-wrapper">

          <div class="info-box-right">
            <!--              这里是一个各种物理新闻的卡片式展示, 包括一个顶端导航栏, 下半部分是列表-->
            <el-breadcrumb class="breadcrumb-02" >
              <el-breadcrumb-item :to="{ path: '/front/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/front/sysgk' }">实验教学</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/front/jdwlsy' }">近代物理实验</el-breadcrumb-item>
            </el-breadcrumb>

              <div class="wz-title"> 近代物理实验 </div>

              <div class="wz-list">
                <ul class="wz-list-ul">

                  <li class="wz-list-li">
                    <a href="/front/Dxwlsy-info-01" class="wz-list-a">【近代物理】光纤数值孔径测量实验</a><p class="wz-list-p">2019-09-12</p>
                  </li>
                  <li class="wz-list-li">
                    <a href="../info/1088/1421.htm"  class="wz-list-a">【近代物理】光纤系列实验讲义</a><p class="wz-list-p">2019-09-12</p>
                  </li>
                  <li class="wz-list-li">
                    <a href="/front/Jdwlsy-info-01" class="wz-list-a">近代物理系列实验讲义</a><p class="wz-list-p">2019-09-12</p>
                  </li>

                </ul>

                <el-pagination
                    background="true"
                    layout="prev, pager, next"
                    :total="3">
                </el-pagination>

              </div>
          </div>

        </div>
      </div>
    </div>



    </div>

</template>


<script>

// import card01 from '../views/front/info-right-card/card01.vue';
export default {
  name: "Jdwlsy",

  data () {
    return {
      top: '',
      notice: [],
      user: JSON.parse(localStorage.getItem("xm-user") || '{}'),

      activeMenu: '1', // 初始选中的菜单项
      currentDate: new Date(),
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      activeMenu1: '1',
      isCollapse: true,
    }
  },
  created() {
    this.load(1)
  },
  mounted() {
    this.loadNotice()
  },
  methods: {
    // 这个加载所有公告得要登陆过再进前台才能
    updateUser() {
      this.user = JSON.parse(localStorage.getItem('xm-user') || '{}')   // 重新获取下用户的最新信息
    },
    // 退出登录
    logout() {
      localStorage.removeItem("xm-user");
      this.$router.push("/login");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }

}
</script>

<style scoped>
@import "@/assets/css/sysgk.css";

/*body字体样式*/


</style>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
