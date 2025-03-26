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
                      <i class="
                      el-icon-document"></i>
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
              <el-breadcrumb-item>历史沿革</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="wz-right-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;实验教学中心的前身普通物理实验教研室和近代物理实验教研室过去在全国实验物理教学界有很大影响。
              全国第一本《普通物理实验》教材（林抒，龚镇雄主编 获教育部教材二等奖）和全国第一本《近代物理实验》
              教材（吴思诚，王祖铨主编 获教育部优秀教材奖）都分别出自这两个教研室。原普通物理实验教研室和近代物理实验教研室所研制的实验仪器和首先开出的实验也被其它高校广泛采用。
              1989年，由普通物理实验教研室的谢慧瑗、陈怀琳和龚镇雄三位教授主持的 “把握基础、充实更新、全面提高普通物理实验课程的建设和改革”项目获国家教委颁发的教学改革成果特等奖。
              1993年，由近代物理实验教研室的吴思诚、王祖铨、吕斯骅、赵汝光和黄飞虎教授主持的 “全面革新 建设具有世界先进水平的近代物理实验课程”获国家教委颁发的第二届普通高等学校优秀
              教学成果国家级一等奖。<br>
              &nbsp;&nbsp;&nbsp;&nbsp;实验教学中心成立后，得到了教育部世行贷款项目、国家理科基地建设项目和学校985项目的
              大力投入。在实验教学条件逐步改善的情况下，首任中心主任吕斯骅教授和现任中心主任段家忯教授提出了要在现代物理学和现代科学技术发展的水平上全面构建物理实验课程体系的目标。
              中心按照“加强基础，循序渐进，因材施教，全面提高”的教改思路，将本科四年的物理实验教学统一规划，把普通物理实验和近代物理实验作为整体来考虑，打破了原普通物理实验中的
              力、热、声、光、电之间，普通物理实验与近代物理实验之间，以及近代物理实验与专门化实验之间的界限，对这些物理实验课程进行了重组、融合，初步建立了新的课程体系。新
              的课程体系在“基础物理实验”课中加入了近代物理实验的内容，结束了过去非物理类学生接触不到近现代物理内容的历史；除了在“普通物理实验”中增加了设计性实验的内容外，
              在三年级上学期还增设了一门研究型的选修课“综合物理实验”，在“近代物理实验”课中也加入了研究型实验模块，大大加强了对学生创新能力的培养。2000年和2001年实验中
              心的教学改革成果—— “全面改革物理实验教学的体系和内容，培养有坚实基础的创新人才”分别获北京市教学成果一等奖和教育部教学成果二等奖。2005年实验中心分别被评为
              首批陕西省和国家级实验教学示范中心。2005年和2006年普通物理实验课分别被评为陕西省和国家级精品课。2007年近代物理实验课分别被评为陕西省精品课和国家级精品课。

            </div>
            <el-divider><i class="el-icon-picture"></i></el-divider>
            <div class="block">
              <img src="@/assets/imgs/xjtulab.jpg">
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

<style>


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

</style>