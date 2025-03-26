<template>
  <!--主体-->


  <div class="main-body">
    <div class="xw-boxx-wrapper">
      <div class="xw-boxx">
        <div class="block">
          <img src="@/assets/imgs/scenery2.jpg">
      </div>
    </div>
    </div>
    <div class="xw-box-wrapper">
      <div class="xw-box">

        <div class="xw-box-left-wrapper">
          <div class="xw-box-left">



            <div class="xw-box-left-banner">
              <el-row class="tac">
                <el-col :span="12">
                  <el-menu
                      :default-active="$route.path"
                      router
                      text-color="#002623"
                      active-text-color="ffffff"
                      default-active="2"
                      class="top-nav-leftmenu custom-menu-width"
                      @open="handleOpen"
                      @close="handleClose">
                    <div class="el-leftmenugzzd-item-top" index="1">
                      <span slot="title">课程思政</span>
                    </div>
                  </el-menu>
                </el-col>
              </el-row>
            </div>

          </div>
        </div>
        <div class="xw-box-right-wrapper">

          <div class="xw-box-right">
            <!--              这里是一个各种物理新闻的卡片式展示, 包括一个顶端导航栏, 下半部分是列表-->
            <el-breadcrumb separator-class="el-icon-arrow-right" >
              <el-breadcrumb-item :to="{ path: '/front/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item class="situation">课程思政</el-breadcrumb-item>
            </el-breadcrumb>
            <el-row :gutter="250">
            <el-col :width=" 100 ">
              <el-card shadow="hover">
                <el-link :underline="false" class="wz-smalltitlegreen-nav" href="http://dwxcb.xjtu.edu.cn/index.htm" target="_blank">
                  西安交通大学党委宣传部
                </el-link>
                <el-link :underline="false" class="wz-contextgray-nav" href="http://dwxcb.xjtu.edu.cn/index.htm" target="_blank">
                  为贯彻落实习近平总书记关于教育的重要论述和全国教育大会会议精神，落实教育部《高等学校课程思政建设指导纲要》、西安市教育委员会《全面推进西安高等学校课程思政建设方案》等文件要求，进一步加强课程思政相关研究，推进具有西交特色的课程思政建设，2020年7月，西安交通大学成...
                </el-link>
              </el-card>
            </el-col>
            </el-row>

          </div>

        </div>
      </div>
    </div>



    </div>

</template>


<script>

export default {
  name: "Kcsz",

  data () {
    return {
      top: '',
      notice: [],
      user: JSON.parse(localStorage.getItem("xm-user") || '{}'),


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

    updateUser() {
      this.user = JSON.parse(localStorage.getItem('xm-user') || '{}')   // 重新获取下用户的最新信息
    },
    // 退出登录
    logout() {
      localStorage.removeItem("xm-user");
      this.$router.push("/login");
    },


  }

}
</script>

<style scoped>
@import "@/assets/css/inside.css";

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
/*body字体样式*/
.wz-title-nav {
  margin-top: 20px;
  font-family: "黑体", "Microsoft YaHei","Arial", sans-serif; /* 设置字体样式，可以根据需要更改 */
  font-size: 40px; /* 设置字体大小，可以根据需要更改 */
  line-height: 1.5; /* 设置行高，可以根据需要更改 */
  color: #333; /* 设置字体颜色，可以根据需要更改 */
  font-weight: bolder;
  display: block; /* 使元素以块级显示，占据整行 */
  text-align: center; /* 文本居中 */
}
.wz-smalltitlegreen-nav {
  font-family: "黑体",  "Microsoft YaHei","Arial", sans-serif; /* 设置字体样式，可以根据需要更改 */
  font-size: 20px; /* 设置字体大小，可以根据需要更改 */
  line-height: 2; /* 设置行高，可以根据需要更改 */
  color: #00352CCC; /* 设置字体颜色，可以根据需要更改 */
  font-weight: bold;
}
.wz-contextgray-nav {
  font-family: "黑体",  "Microsoft YaHei","Arial", sans-serif; /* 设置字体样式，可以根据需要更改 */
  font-size: 13px; /* 设置字体大小，可以根据需要更改 */
  line-height: 2; /* 设置行高，可以根据需要更改 */
  color: #929293; /* 设置字体颜色，可以根据需要更改 */
}
.wz-smalltitlegreen-nav:hover {
  color: #00352CCC !important; /* 初始文本颜色，!important 用于覆盖其它样式 */
}
.wz-contextgray-nav:hover {
  color: #929293 !important; /* 初始文本颜色，!important 用于覆盖其它样式 */
}
/*第一个nav菜单的item*/

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


</style>

<style >


  /* 修改悬停颜色和字体颜色 */
  .top-nav-leftmenu{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  /*左侧导航栏样式*/
  .el-leftmenugzzd-item-top {
    background-color: #003b35 !important; /* 设置 el-menu-item 的默认底色 */
    color: white !important; /* 设置 el-menu-item 的默认字体颜色 */
    font-family: "华文行楷", Arial, sans-serif; /* 设置字体为黑体，如果黑体不可用，则使用 Arial 或 sans-serif */
    font-size: 23px; /* 设置字体大小为16像素 */
    width: 320px;
    height: 500px; /* 设置 div 的高度 */
    display: flex; /* 使用 flex 布局 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    text-align: center; /* 文字居中 */
    line-height: 2.5; /* 设置行高，垂直居中 */
  }
  .el-menu-item-top:hover {
    background-color: #d9d7d7 !important; /* 修改悬停时的背景颜色 */
  }

  .el-menu-item-top:hover span {
    color: #ffffff !important; /* 修改悬停时的字体颜色 */
  }
  .el-menu-item-top:active {
    background-color: #13705f !important;/* 修改点击后的背景颜色 */
  }

  .el-menu-item:active span {
    color: #ffffff !important; /* 修改点击后的字体颜色 */
  }
  .block {
    text-align: center; /* 设置文本水平居中 */
  }
  .el-menu-item.is-active {
    background-color: #e5e5e5 !important; /* 设置选中时的背景色 */
    color: white!important; /* 设置选中时的字体颜色 */
  }
  .el-leftmenugzzd-item {
    width: 320px;
    background-color: #e5e5e5 !important; /* 设置 el-menu-item 的默认底色 */
    color: #797575 !important; /* 设置 el-menu-item 的默认字体颜色 */
  }

.el-menu-item:hover {
  background-color: #e5e5e5 !important; /* 修改悬停时的背景颜色 */
}

.el-menu-item:hover span {
  color: #797575 !important; /* 修改悬停时的字体颜色 */
}
  .el-menu-item:active {
    background-color: #e5e5e5 !important;/* 修改点击后的背景颜色 */
  }

  .el-menu-item:active span {
    color: #797575 !important; /* 修改点击后的字体颜色 */
  }
.block {
  text-align: center; /* 设置文本水平居中 */
}
  .el-menu-item.is-active {
    background-color: #e5e5e5 !important; /* 设置选中时的背景色 */
    color: #254642 !important; /* 设置选中时的字体颜色 */
  }

.block img {
  display: block; /* 让图片成为块级元素 */
  margin: 0 auto; /* 设置左右外边距为auto，实现水平居中 */
}
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
<style>
/*左侧导航栏宽度*/
.custom-menu-width {
  width: 180px; /* 设置宽度为180px，根据实际需要调整 */
}
/*调整图片大小*/
.block11 img {
  max-width: 80%; /* 设置图片最大宽度为其容器的100% */
  height: auto; /* 让浏览器根据宽度自动计算高度，保持原始宽高比例 */
}
.block11 {
  display: flex;
  justify-content: center; /* 在主轴上居中 */
  align-items: center; /* 在交叉轴上居中 */
}
.situation{
  margin-bottom: 30px;
}
</style>