<template>
  <div>




<!--    最顶端的一栏公告滚动播放-->
<!--    <div class="front-notice"><i class="el-icon-bell" style="margin-right: 2px"></i>公告：{{ top }}</div>-->

    <!--头部-->
    <body>
    <div class="front-header">

      <div class = "front-header-top-wrapper">
        <div class = "front-header-top">
          <!--        这里放日期和登陆注册按钮-->
          <!--      这是登陆注册的按钮-->
          <div class="header-top-calendar">
<!--            <a>2024-01-12 星期五</a>-->
            <time class="time">{{ currentDate }}</time>
          </div>

          <div class="front-header-top-button">
            <div v-if="!user.username">
              <el-button
                  class="top-button"
                  @click="$router.push('/login')">登录</el-button>
              <el-button
                  class="top-button"
                  @click="$router.push('/register')">注册</el-button>
            </div>

            <!--        这部分是登陆后会显示管理员头像的部分, 带有一个dropdown-->
            <div v-else>
              <el-dropdown>

                <div class="front-header-dropdown">
                  <img :src="user.avatar" alt="">
                  <div style="margin-left: 10px">
                    <span>{{ user.name }}</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
                  </div>
                </div>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <div style="text-decoration: none" @click="goToBackstage">进入后台</div>
                  </el-dropdown-item>

                  <el-dropdown-item>
                    <div style="text-decoration: none" @click="logout">退出</div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

            </div>

          </div>

        </div>
      </div>

      <div class="front-header-main-wrapper">
        <div class="front-header-main">

          <div class="front-header-main-left">
            <img src="@/assets/imgs/xjtu_logo_white.png" alt="">
            <div class="title"></div>
          </div>

          <div class="front-header-main-right">

<!--            这里放搜索框-->
            <div class="search">
              <el-input
                  class="search-input"
                  placeholder="全文搜索"  v-model="name"></el-input>
              <el-button
                  class="search-button"
                  type="info"  @click="load(1)">Search</el-button>
<!--              <el-button-->
<!--                  class="search-button"-->
<!--                  type="warning"  @click="reset">Reset</el-button>-->
            </div>
          </div>

        </div>
      </div>

<!--      <div class="front-header-center">-->
<!--&lt;!&ndash;        把这个导航栏单独分成一整行&ndash;&gt;-->
<!--        <div class="front-header-nav">-->
<!--          <el-menu :default-active="$route.path" mode="horizontal" router>-->
<!--						<el-menu-item index="/front/home">首页</el-menu-item>-->
<!--						<el-menu-item index="/front/person">个人中心</el-menu-item>-->
<!--          </el-menu>-->
<!--        </div>-->
<!--      </div>-->

      <div class = "top-nav-wrapper">
        <div class="top-nav">
          <el-menu
              text-color="#002623"
              active-text-color="ffffff"
              :default-active="$route.path"
              router
              class="top-nav-menu" mode="horizontal" @select="handleSelect">
<!--            <el-submenu index="1">-->
<!--              <template slot="title" >-->
<!--              实验室概况-->
<!--              </template>-->
<!--            </el-submenu>-->

            <el-menu-item index="/front/home" style="">
              首页
            </el-menu-item>
<!--            <el-menu-item class="nav-item-01" index="1"> 首页-->
<!--              因为菜单项文字没办法改悬停颜色所以放一个标签a-->
<!--              <a class="el-menu-text" href="Front.vue">首页rgba(0, 17, 16, 0.2)</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-->
<!--            </el-menu-item>-->

            <el-submenu class="nav-01" index="2" >
              <template slot="title" >中心概况</template>
              <el-menu-item class = "nav-sub-item"  index="/front/Centerinstruction">中心介绍</el-menu-item>
              <el-menu-item class = "nav-sub-item"  index="">历史沿革</el-menu-item>
              <el-menu-item class = "nav-sub-item"  index="2-3">中心机构</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title" >师资力量</template>
              <el-menu-item class = "nav-sub-item"   index="3-1">专任教师</el-menu-item>
              <el-menu-item class = "nav-sub-item"   index="3-2">实验技术人员</el-menu-item>
              <el-menu-item class = "nav-sub-item"   index="3-3">兼任教师</el-menu-item>
<!--              <el-submenu index="2-4">-->
<!--                <template slot="title">选项4</template>-->
<!--                <el-menu-item index="2-4-1">选项1</el-menu-item>-->
<!--                <el-menu-item index="2-4-2">选项2</el-menu-item>-->
<!--                <el-menu-item index="2-4-3">选项3</el-menu-item>-->
<!--              </el-submenu>-->
            </el-submenu>

            <el-menu-item index="4">
              实验室概况
            </el-menu-item>
<!--            <el-menu-item class="nav-item-01" index="4">-->
<!--                <a class="el-menu-text" href="Front.vue">规章制度</a>-->
<!--            </el-menu-item>-->
            <el-menu-item index="5">
              规章制度
            </el-menu-item>
<!--            <el-menu-item class="nav-item-01" index="5">-->
<!--              <a class="el-menu-text" href="Front.vue">规章制度</a>-->
<!--            </el-menu-item>-->

            <el-menu-item index="6">
              教学体系
            </el-menu-item>
<!--            <el-menu-item class="nav-item-01" index="6">-->
<!--              <a class="el-menu-text" href="Front.vue">规章制度</a>-->
<!--            </el-menu-item>-->

            <el-menu-item index="7">
              精品课程
            </el-menu-item>
            <el-menu-item index="8">
              课程思政
            </el-menu-item>
<!--            这个menu-item可以直接修改hover颜色, submenu要深度选择-->


          </el-menu>


        </div>
      </div>


    </div>

    <div class="main-body">
      <router-view @update:user="updateUser" />
    </div>



    <!--  页面底部-->
    <div class = "footer">

      <p style="margin-top:15px;">地址：陕西省西安市咸宁西路28号</p>
      <p>版权所有：西安交通大学国家级物理实验教学示范中心 邮编：710049  电话 : 029-82668721</p>

    </div>

    </body>
  </div>

</template>

<script>

// import card01 from '../views/front/xw-right-card/card01.vue';
export default {
  name: "Front",

  data () {
    return {
      top: '',
      notice: [],
      user: JSON.parse(localStorage.getItem("xm-user") || '{}'),
      imgwrap:[
        {url:require("../assets/imgs/桥-02.png")},
        {url:require("../assets/imgs/图书馆-01.png")},
        {url:require("../assets/imgs/樱花-03.jpg")},
        {url:require("../assets/imgs/bike.png")},
        {url:require("../assets/imgs/flower.png")}
      ],
      xwimg:[
        {url:require("../assets/imgs/xw-box01.jpg")},
        {url:require("../assets/imgs/xw-box02.jpg")},
        {url:require("../assets/imgs/xw-box03.jpg")},
      ],
      activeMenu: '1', // 初始选中的菜单项
      currentDate: new Date(),

      activeMenu1: '1',
    }
  },

  mounted() {
    this.loadNotice()
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

    goToBackstage() {
      this.$router.push("/home");
    },
  }

}
</script>

<style scoped>
  @import "@/assets/css/front.css";

  .top-nav/deep/ .el-menu-item,.top-nav/deep/ .el-submenu__title {
    height: 50px!important;
    line-height: 50px!important;
    width:150px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/ .el-menu__title{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .top-nav/deep/ .el-menu-item:hover{
    background-color: rgb(0, 38, 35) !important;
    color: #ffffff !important;
  }

  .top-nav/deep/ .el-menu-item.is-active{
    background-color: rgb(0, 38, 35) !important;
    color: #ffffff !important;
    border-bottom: 0px;
  }

  .el-submenu /deep/.el-submenu__title:hover {
    background-color: rgb(0, 38, 35) !important;
    /*// background-color: #41a3fb !important;*/

  }

  .nav-sub-item{
    background-color: rgba(173, 164, 164, 0.56) !important;
  }


  .nav-01{
    /*第一个导航栏*/
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: center;
  }

  /deep/ .el-carousel__item{
    width: 1200px;
    /*align-items: center;*/
    /*display: flex;*/
    /*justify-content: center;*/
  }

  .el-menu{
    height: 50px;

  }
.nav-02{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  .nav-02-01{
    width: 95px;
    flex-direction: row;
  }

  .el-menu-item{
    font-size: 16px;
  }

  .xw-right-nav/deep/.el-menu-item{
    border-bottom: rgba(113, 136, 132, 0.3) solid 2px !important;;
  }
  .xw-right-nav/deep/.el-menu-item:hover{
    background-color: #eaeaea;

    border-bottom: rgba(0, 53, 44, 0.8) solid 6px !important;;
  }
  .xw-right-nav/deep/.el-menu-item.is-active{
    border-bottom: rgba(0, 53, 44, 0.8) solid 6px !important;;
  }

  .search-input /deep/ .el-input__inner{
    width: 240px !important;
    height: 38px;
    border-radius: 2px;
  }

</style>

<style>

/*//设置鼠标悬停时el-submenu的样式*/
.el-submenu .el-submenu__title{
  font-size: 16px;
}
.el-submenu .el-submenu__title:hover{
  /*border-left: #33A2EF solid 6px !important;*/
  background-color: #003b35 !important;
  color: #f5f4f4 !important;

}


</style>

<!--这是el-card的样式-->
<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
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
