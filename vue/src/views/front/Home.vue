<template>
  <!--主体-->


  <div class="main-body">
<!--    <router-view ref="child" @update:user="updateUser" />-->

    <div class="body-banner-wrapper-container">
      <div class="body-banner-wrapper">
        <div class="body-banner">
          <!--          <el-carousel :interval="4000" type="card" height="370px">-->
          <!--            <el-carousel-item v-for="item in imgwrap" :key="item.url">-->
          <!--              <img :src="item.url" class="bannerimg"/>-->
          <!--            </el-carousel-item>-->
          <!--          </el-carousel>-->

          <el-carousel trigger="click" height="370px" interval="2000">
            <el-carousel-item v-for="item in imgwrap" :key="item.url">
              <img :src="item.url" class="bannerimg"/>
            </el-carousel-item>
          </el-carousel>


        </div>
      </div>

    </div>


    <div class="xw-box-wrapper">
      <div class="xw-box">
        <div class="xw-box-left-wrapper">
          <div class="xw-box-left">

            <div class = "xw-box-left-top">

              <div class="xw-left-top-logo-part">
                <img src="@/assets/imgs/xjtu_logo_red.png" alt="">
                <div class="xwzhongxin" >中心要闻</div>
              </div>
              <div class="xw-left-top-text"> <a class="xw-left-top-text" href="http://localhost:8080"> 进入新闻中心>>> </a> </div>
            </div>

            <div class="xw-box-left-banner">
              <el-carousel trigger="click" height="420px">
                <el-carousel-item v-for="item in xwimg" :key="item.url">
                  <img :src="item.url" class="bannerimg"/>

                </el-carousel-item>

              </el-carousel>
              <!--              <p class="caption">-->
              <!--              基础物理实验教学中心在第十一届全国高校物理实验教学研讨会自制教学实验仪器评比中荣获一等奖-->
              <!--            </p>-->

            </div>

          </div>
        </div>
        <div class="xw-box-right-wrapper">

          <div class="xw-box-right">
            <!--              这里是一个各种物理新闻的卡片式展示, 包括一个顶端导航栏, 下半部分是列表-->

            <div class="xw-right-nav">
              <el-menu
                  @select="handleMenuSelect"
                  :default-active="activeMenu"
                  text-color="#002623"
                  class="nav-02" mode="horizontal" >
                <el-menu-item class="nav-02-01" index="1">信息公开</el-menu-item>
                <el-menu-item class="nav-02-01" index="2">普通物理</el-menu-item>
                <el-menu-item class="nav-02-01" index="3">基础物理</el-menu-item>
                <el-menu-item class="nav-02-01" index="4">综合物理</el-menu-item>
                <el-menu-item class="nav-02-01" index="5">近代物理</el-menu-item>
                <el-menu-item class="nav-02-01" index="6">前沿物理</el-menu-item>


              </el-menu>

              <component :is="activeMenuComponent"></component>
            </div>

            <div class="xw-right-card">

              <!--                <el-card-->
              <!--                    shadow="never"-->
              <!--                    body-style="height: 400px; padding: 15px"-->
              <!--                    v-show="activeMenu === '1'">-->
              <!--                  <div v-for="o in 4" :key="o" class="text item">-->
              <!--                    {{'列表内容3 ' + o }}-->
              <!--                  </div>-->
              <!--                </el-card>-->
              <transition name="fade" mode="out-in">
                <el-card
                    style="height: 350px;  width: 590px;"
                    shadow="never"
                    body-style="height: 260px;  padding: 15px; "

                    v-show="activeMenu === '1'"
                    class="box-card">
                  <div slot="header" class="clearfix">
                    <div class="baiya">
                      <h3>
                        <a style="font-size: 18px; color: #ad0b00" href="info/1048/1140.htm" target="_blank" title="国家级实验教学示范中心 阶段性总结（2018- 2022年）">国家级实验教学示范中心 阶段性总结（2018- 2022年）</a>
                      </h3>
                      <p style="margin-top: 23px; color: #999999">基础物理国家级实验教学示范中心（北京大学）（以下简称“中心”）是首批国家级实验教学示范中心，由实验室与设备管理部...</p>
                    </div>
                  </div>

                  <!--                  <div v-for="o in 4" :key="o" class="text item">-->
                  <!--                    {{'列表内容 ' + o }}-->
                  <!--                  </div>-->
                  <ul
                      class="card-01-buju">
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1151.htm" target="_blank" title="2023年春季普通/基础物理实验课表">2023年春季普通/基础物理实验课表</a><p class="xw-date">2023-07-11</p></li>

                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1153.htm" target="_blank" title="23春基础物理实验循环表（周四下午）">23春基础物理实验循环表（周四下午）</a><p class="xw-date">2023-07-11</p></li>
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1152.htm" target="_blank" title="23春基础物理实验循环表（周三下午）">23春基础物理实验循环表（周三下午）</a><p class="xw-date">2023-07-11</p></li>
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1093.htm" target="_blank" title="误差数据处理和习题-2023春">误差数据处理和习题-2023春</a><p class="xw-date">2023-07-11</p></li>
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1094.htm" target="_blank" title="《普通&amp;基础物理实验》实验记录要求（V20210913）">《普通&amp;基础物理实验》实验记录要求（V20210913）</a><p class="xw-date">2023-07-11</p></li>
                  </ul>
                  <span><a  href="index/jcwl.htm" style="float:right;">更多&gt;&gt;</a></span>
                </el-card>
              </transition>

              <transition name="fade" mode="out-in">
              </transition>
              <el-card
                  shadow="never"
                  body-style="height: 450px; padding: 15px; width: 570px"
                  v-show="activeMenu === '2'">
                <!--                  <div v-for="o in 4" :key="o" class="text item">-->
                <!--                    {{'列表内容 ' + o }}-->
                <!--                  </div>-->
                <ul
                    class="card-01-buju">
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1151.htm" target="_blank" title="2023年春季普通/基础物理实验课表">2023年春季普通/基础物理实验课表</a><p class="xw-date">2023-07-11</p></li>

                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1153.htm" target="_blank" title="23春基础物理实验循环表（周四下午）">23春基础物理实验循环表（周四下午）</a><p class="xw-date">2023-07-11</p></li>
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1152.htm" target="_blank" title="23春基础物理实验循环表（周三下午）">23春基础物理实验循环表（周三下午）</a><p class="xw-date">2023-07-11</p></li>
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1093.htm" target="_blank" title="误差数据处理和习题-2023春">误差数据处理和习题-2023春</a><p class="xw-date">2023-07-11</p></li>
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1094.htm" target="_blank" title="《普通&amp;基础物理实验》实验记录要求（V20210913）">《普通&amp;基础物理实验》实验记录要求（V20210913）</a><p class="xw-date">2023-07-11</p></li>
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1092.htm" target="_blank" title="普物（基础）实验预习要求和实验报告要求v1.4.0">普物（基础）实验预习要求和实验报告要求v1.4.0</a><p class="xw-date">2023-07-11</p></li>
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1091.htm" target="_blank" title="《普通&amp;基础物理实验》上课须知（V20210910）">《普通&amp;基础物理实验》上课须知（V20210910）</a><p class="xw-date">2023-07-11</p></li>
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1092.htm" target="_blank" title="普物（基础）实验预习要求和实验报告要求v1.4.0">普物（基础）实验预习要求和实验报告要求v1.4.0</a><p class="xw-date">2023-07-11</p></li>
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1091.htm" target="_blank" title="《普通&amp;基础物理实验》上课须知（V20210910）">《普通&amp;基础物理实验》上课须知（V20210910）</a><p class="xw-date">2023-07-11</p></li>
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1092.htm" target="_blank" title="普物（基础）实验预习要求和实验报告要求v1.4.0">普物（基础）实验预习要求和实验报告要求v1.4.0</a><p class="xw-date">2023-07-11</p></li>
                  <li class="card-01-text">
                    <a  class="card-01-a" href="info/1068/1091.htm" target="_blank" title="《普通&amp;基础物理实验》上课须知（V20210910）">《普通&amp;基础物理实验》上课须知（V20210910）</a><p class="xw-date">2023-07-11</p></li>


                  <span><a  href="index/jcwl.htm" style="float:right;margin-right: 15px">更多&gt;&gt;</a></span>
                </ul>

              </el-card>

              <transition name="fade" mode="out-in">
                <el-card
                    shadow="never"
                    body-style="height: 400px; padding: 15px; width: 570px"
                    v-show="activeMenu === '3'">
                  <!--                  <div v-for="o in 4" :key="o" class="text item">-->
                  <!--                    {{'列表内容 ' + o }}-->
                  <!--                  </div>-->
                  <ul
                      class="card-01-buju">
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1151.htm" target="_blank" title="2023年春季普通/基础物理实验课表">2023年春季普通/基础物理实验课表</a><p class="xw-date">2023-07-11</p></li>

                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1153.htm" target="_blank" title="23春基础物理实验循环表（周四下午）">23春基础物理实验循环表（周四下午）</a><p class="xw-date">2023-07-11</p></li>
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1152.htm" target="_blank" title="23春基础物理实验循环表（周三下午）">23春基础物理实验循环表（周三下午）</a><p class="xw-date">2023-07-11</p></li>
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1093.htm" target="_blank" title="误差数据处理和习题-2023春">误差数据处理和习题-2023春</a><p class="xw-date">2023-07-11</p></li>
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1094.htm" target="_blank" title="《普通&amp;基础物理实验》实验记录要求（V20210913）">《普通&amp;基础物理实验》实验记录要求（V20210913）</a><p class="xw-date">2023-07-11</p></li>
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1092.htm" target="_blank" title="普物（基础）实验预习要求和实验报告要求v1.4.0">普物（基础）实验预习要求和实验报告要求v1.4.0</a><p class="xw-date">2023-07-11</p></li>
                    <li class="card-01-text">
                      <a  class="card-01-a" href="info/1068/1091.htm" target="_blank" title="《普通&amp;基础物理实验》上课须知（V20210910）">《普通&amp;基础物理实验》上课须知（V20210910）</a><p class="xw-date">2023-07-11</p></li>
                    <span><a  href="/index/jcwl.htm" style="float:right;margin-right: 15px">更多&gt;&gt;</a></span>
                  </ul>

                </el-card>
              </transition>


              <transition name="fade" mode="out-in">
                <el-card
                    shadow="never"
                    body-style="height: 400px; padding: 15px"
                    v-show="activeMenu === '4'">
                  <div v-for="o in 4" :key="o" class="text item">

                    {{'列表内容3 ' + o }}
                  </div>
                </el-card>
              </transition>


              <transition name="fade" mode="out-in">
                <el-card
                    shadow="never"
                    body-style="height: 400px; padding: 15px"
                    v-show="activeMenu === '5'">
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容3 ' + o }}
                  </div>
                </el-card>
              </transition>


              <transition name="fade" mode="out-in">
                <el-card
                    shadow="never"
                    body-style="height: 400px; padding: 15px"
                    v-show="activeMenu === '6'">
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容3 ' + o }}
                  </div>
                </el-card>
              </transition>


            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="lab-link-wrapper">
      <div class="lab-link">

        <div class="link-01">
          <el-card shadow="hover">
            <a href="https://dean.xjtu.edu.cn/">
              <img src="@/assets/imgs/link01.png">
            </a>

          </el-card>
        </div>

        <div class="link-01">
          <el-card shadow="hover">
            <a href="https://www.cnki.net/">
              <img src="@/assets/imgs/link02.png">
            </a>
          </el-card>
        </div>
        <div class="link-01">
          <el-card shadow="hover">
            <a href="https://phy.xjtu.edu.cn/">
              <img src="@/assets/imgs/link03.png">
            </a>

          </el-card>

        </div>




      </div>

    </div>
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
        {url:require("@/assets/imgs/桥-02.png")},
        {url:require("@/assets/imgs/图书馆-01.png")},
        {url:require("@/assets/imgs/樱花-03.jpg")},
        {url:require("@/assets/imgs/bike.png")},
        {url:require("@/assets/imgs/flower.png")}
      ],
      xwimg:[
        {url:require("@/assets/imgs/xw-box01.jpg")},
        {url:require("@/assets/imgs/xw-box02.jpg")},
        {url:require("@/assets/imgs/xw-box03.jpg")},
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