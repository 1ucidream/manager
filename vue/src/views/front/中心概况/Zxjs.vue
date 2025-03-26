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
                    <div class="el-leftmenu-item-top" index="1">
                      <span slot="title">中心概况</span>
                    </div>
                    <el-menu-item :to="{ path: '/front/zxjs' }" class="el-leftmenu-item" index="/front/zxjs">
                      <i class="el-icon-menu"></i>
                      <span slot="title">中心介绍</span>
                    </el-menu-item>
                    <el-menu-item :to="{ path: '/front/lsyg' }" class="el-leftmenu-item" index="/front/lsyg" >
                      <i class="el-icon-document"></i>
                      <span slot="title">历史沿革</span>
                    </el-menu-item>
                    <el-menu-item :to="{ path: '/front/zxjg' }" class="el-leftmenu-item" index="/front/zxjg">
                      <i class="el-icon-setting"></i>
                      <span slot="title">中心机构</span>
                    </el-menu-item>
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
              <el-breadcrumb-item>中心概况</el-breadcrumb-item>
              <el-breadcrumb-item>中心介绍</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="wz-right-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;西安交通大学物理教学实验中心前身可追溯到始建于1906年的交通大学物理实验室，
              是我国高校最早创建的物理实验室，也是最早将物理实验课从西方引入中国高等学校的大学之一。
              1928年交通大学创建物理系，物理实验室成为物理系有力的支撑。1984年西迁后的交大在西安重建应用物理系，并设立工科、理科及近代物理实验室。1996年将物理实验室统一管理，设立物理教学实验中心。2005年物理实验中心获批为国家工科物理课程教学基地，2006年全国首批获批建设国家级实验教学示范中心。近年来依托物理实验中心的建设与发展，还建设了陕西省物理专业实验教学示范中心和物理虚拟仿真实验教学中心。<br>
              &nbsp;&nbsp;&nbsp;&nbsp;物理实验教学中心目前分布于兴庆校区基础学科大楼（仲英楼）、中心二楼和雁塔校区生化楼，包含大学物理实验室、综合物理实验室、物理演示实验室、近代物理和专业研究性实验室、学生自主创新实验室等共计 45个各类实验室。开设有：大学物理实验Ⅰ、Ⅱ、Ⅲ，基础物理实验，普通物理实验，综合 物理实验，近代物理实验，研究性开放实验，高级物理实验，高等物理实验，开放物理实验，研究生创新物理实验等 12 门实验课程。共同包含了 150 多个操作实验项目、50余个虚拟仿真实验项目、115 个演示实验项目。承担全校理工科类、医药类 37 个专业方向及物理试验班、 钱学森实验班、少年班及研究生的系列物理实验课程的教学任务，开课对象涵盖了所有年级的本科生和部分研究生。每年面向全校共计 4000余名本科生开课，完成实验教学人时数共计超过200000。 近几年来我中心围绕人才培养持续完成了多项建设工作，在课程建设、信息化课堂、学生竞赛等方面继续开展了多项行之有效的措施并取得了优异成绩，尤其在以人才培养为核心的学生获奖、教师获奖、教材及教学 研究项目上均取得较大突破。<br>
              &nbsp;&nbsp;&nbsp;&nbsp;通过“211工程”项目、国家工科物理教学基地项目、世界银行贷款“高等教育发展”——“物理实验中心”项目和“985工程”项目的建设， 物理实验中心在实验内容和实验项目的先进性、实验室环境的改善、实验课教学管理、实验室管理以及示范辐射作用等方面取得进步，并形成自我特色。<br>
            </div>
            <el-divider><i class="el-icon-picture"></i></el-divider>
            <div class="block11">
              <img src="@/assets/imgs/lab2.jpg">
            </div>
          </div>

        </div>
      </div>
    </div>



    </div>

</template>


<script>

export default {
  name: "Centerinstruction",

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
.wz-right-nav {
  margin-top: 20px;
  font-family: "楷体", KaiTi, "Microsoft YaHei","Arial", sans-serif; /* 设置字体样式，可以根据需要更改 */
  font-size: 23px; /* 设置字体大小，可以根据需要更改 */
  line-height: 1.5; /* 设置行高，可以根据需要更改 */
  color: #333; /* 设置字体颜色，可以根据需要更改 */
  font-weight: bold;
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
  .el-leftmenu-item-top {
    background-color: #003b35 !important; /* 设置 el-menu-item 的默认底色 */
    color: white !important; /* 设置 el-menu-item 的默认字体颜色 */
    font-family: "华文行楷", Arial, sans-serif; /* 设置字体为黑体，如果黑体不可用，则使用 Arial 或 sans-serif */
    font-size: 23px; /* 设置字体大小为16像素 */
    width: 250px;
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
  .el-leftmenu-item {
    width: 250px;
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
</style>