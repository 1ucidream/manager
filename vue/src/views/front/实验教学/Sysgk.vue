<template>
  <!--主体-->
<!--  这个是实验教学-->
<!--他的children是实验室概况等等-->

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
            <el-breadcrumb separator-class="el-icon-arrow-right" >
              <el-breadcrumb-item :to="{ path: '/front/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/front/sysgk' }">实验教学</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/front/sysgk' }">实验室概况</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="wz-right-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;西安交通大学物理教学实验中心前身可追溯到始建于1906年的交通大学物理实验室，
              是我国高校最早创建的物理实验室，也是最早将物理实验课从西方引入中国高等学校的大学之一。
              1928年交通大学创建物理系，物理实验室成为物理系有力的支撑。1984年西迁后的交大在西安重建应用物理系，并设立工科、理科及近代物理实验室。1996年将物理实验室统一管理，设立物理教学实验中心。2005年物理实验中心获批为国家工科物理课程教学基地，2006年全国首批获批建设国家级实验教学示范中心。近年来依托物理实验中心的建设与发展，还建设了陕西省物理专业实验教学示范中心和物理虚拟仿真实验教学中心。

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
  name: "Sysgk",

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
  computed: {
    // activeMenuComponent() {
    //   // 根据选中的菜单项返回对应的组件
    //   switch (this.activeMenu) {
    //     case '1':
    //       return card01;
    //     case '2':
    //       return card01;
    //     case '3':
    //       return card01;
    //     case '4':
    //       return card01;
    //     case '5':
    //       return card01;
    //     case '6':
    //       return card01;
    //     default:
    //       return null;
    //   }
    // },
  },

  methods: {
    // 这个加载所有公告得要登陆过再进前台才能
    loadNotice() {
      this.$request.get('/notice/selectAll').then(res => {
        this.notice = res.data
        let i = 0
        if (this.notice && this.notice.length) {
          this.top = this.notice[0].content
          setInterval(() => {
            this.top = this.notice[i].content
            i++
            if (i === this.notice.length) {
              i = 0
            }
          }, 2500)
        }
      })
    },
    updateUser() {
      this.user = JSON.parse(localStorage.getItem('xm-user') || '{}')   // 重新获取下用户的最新信息
    },
    // 退出登录
    logout() {
      localStorage.removeItem("xm-user");
      this.$router.push("/login");
    },

    // 新闻box右侧的卡片切换
    handleMenuSelect(index) {
      this.activeMenu = index; // 当菜单项被选中时更新activeMenu的值
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
.wz-right-nav {
  margin-top: 50px;
  font-family: "楷体", KaiTi, "Microsoft YaHei","Arial", sans-serif; /* 设置字体样式，可以根据需要更改 */
  font-size: 23px; /* 设置字体大小，可以根据需要更改 */
  line-height: 1.5; /* 设置行高，可以根据需要更改 */
  color: #333; /* 设置字体颜色，可以根据需要更改 */
  font-weight: bold;
}

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
