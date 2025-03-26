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
                      <span slot="title">规章制度</span>
                    </div>
                    <el-menu-item :to="{ path: '/front/zxglbf' }" class="el-leftmenugzzd-item" index="/front/Zxglbf">
                      <i class="el-icon-office-building"></i>
                      <span slot="title">国家级实验教学示范中心管理办法</span>
                    </el-menu-item>
                    <el-menu-item :to="{ path: '/front/gztl' }" class="el-leftmenugzzd-item" index="/front/Gztl" >
                      <i class="el-icon-tickets"></i>
                      <span slot="title">西安交通大学实验室工作条例</span>
                    </el-menu-item>
                    <el-menu-item :to="{ path: '/front/glbf' }" class="el-leftmenugzzd-item" index="/front/Glbf">
                      <i class="el-icon-finished"></i>
                      <span slot="title">西安交通大学实验室安全管理办法</span>
                    </el-menu-item>
                    <el-menu-item :to="{ path: '/front/sbglbf' }" class="el-leftmenugzzd-item" index="/front/Sbglbf">
                      <i class="el-icon-guide"></i>
                      <span slot="title">西安交通大学仪器设备管理办法</span>
                    </el-menu-item>
                    <el-menu-item :to="{ path: '/front/glzd' }" class="el-leftmenugzzd-item" index="/front/Glzd">
                      <i class="el-icon-postcard"></i>
                      <span slot="title">实验室管理制度</span>
                    </el-menu-item>
                    <el-menu-item :to="{ path: '/front/jtgd' }" class="el-leftmenugzzd-item" index="/front/Jtgd">
                      <i class="el-icon-reading"></i>
                      <span slot="title">关于实验室安全的具体规定</span>
                    </el-menu-item>
                    <el-menu-item :to="{ path: '/front/pczd' }" class="el-leftmenugzzd-item" index="/front/Pczd">
                      <i class="el-icon-wallet"></i>
                      <span slot="title">赔偿制度</span>
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
              <el-breadcrumb-item>规章制度</el-breadcrumb-item>
              <el-breadcrumb-item>关于实验室安全的具体规定</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="wz-title-nav">关于实验室安全的具体规定</div>
            <el-divider content-position="center">发布日期：2023-01-12</el-divider>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;一、学生（包括研究生、进修生）及有关工作人员进入实验室前，由实验室主任负责进行一次安全教育，内容包括：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;1.保证人身及仪器设备安全的重要意义。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;2.安全保护的内容：防触电、防跑水、防漏气、防火、防毒、防爆、防盗、防止违章操作及其他安全事故。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;3.宣读学校及教研室有关安全的具体规定，其中包括：《西安交通大学仪器设备管理安全条例》和《西安交通大学仪器设备及器材遗失损坏赔偿试行办法》。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;4.树立严谨的科学态度，认真负责的工作作风和勤俭节约的优良传统，自觉地遵守有关安全的各项规定。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;二、进入实验室时，实验室负责人或主管教师必须向学生及有关人员讲清如下事项：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;1.室内供电线路，上下水及水冷管路，煤气及其他气体管路。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;2.有毒、有害及危险操作的安全防护措施，一旦发生意外的应急办法。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;3.室内仪器设备的操作规程及注意事项。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;4.离开实验室时需注意检查的安全事项：如熄火、关水、关电、关气、关好门窗等。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;5.不得随意带与工作无关的人员在实验室逗留。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;三、实验室内动力电、配电线路不得自行更动，不得超负荷用电， 昼夜不间断用电，无人值班时必须报大楼保卫人员备案。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;四、非工作需要不得使用电炉。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;五、实验室管理人员，指导教师要经常注意安全教育及安全检查，发现隐患要及时处理，要带头严格遵守各项安全规定。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;六、大型精密仪器设备的使用操作维修必须按各自的有关规定进行。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;七、合理配备并经常检查消防灭火器材。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;八、一旦发生人身及仪器设备安全事故，要及时上报，有关责任者要写出检查，所造成的损失按有关规定赔偿，并处以扣发3-6个月奖金，同时通报全系以教育群众，情节严重者要给予校纪处分。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;九、不得私自更换门锁，私配钥匙，必要时更换门锁由系保卫人员负责。增配钥匙由实验室主任办理，并按期收回，实验室主任要掌握全教研室总钥匙。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;十、遵守门卫有关进出大楼及节假日安全保卫的具体规定。<br>
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
.wz-smalltitle-nav {
  font-family: "黑体",  "Microsoft YaHei","Arial", sans-serif; /* 设置字体样式，可以根据需要更改 */
  font-size: 23px; /* 设置字体大小，可以根据需要更改 */
  line-height: 2; /* 设置行高，可以根据需要更改 */
  color: #333; /* 设置字体颜色，可以根据需要更改 */
  font-weight: bold;
}
.wz-context-nav {
  font-family: "黑体",  "Microsoft YaHei","Arial", sans-serif; /* 设置字体样式，可以根据需要更改 */
  font-size: 23px; /* 设置字体大小，可以根据需要更改 */
  line-height: 2; /* 设置行高，可以根据需要更改 */
  color: #333; /* 设置字体颜色，可以根据需要更改 */
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
</style>