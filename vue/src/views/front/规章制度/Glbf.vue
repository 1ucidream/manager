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
              <el-breadcrumb-item>西安交通大学实验室安全管理办法</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="wz-title-nav">西安交通大学实验室安全管理办法</div>
            <el-divider content-position="center">发布日期：2023-01-12</el-divider>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第一章 总 则<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第一条 为加强西安交通大学实验室安全管理，防止安全事故发生，保证学校教学、科研工作的正常进行，根据《高等学校实验室工作规程》(原国家教委第20号令)等相关规定，特制定本办法。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二条各院（系、所、中心）的实验室须认真贯彻“安全第一、预防为主”的方针，根据各实验室的具体情况，制定并张贴相应的安全管理办法、操作规程和应急预案。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第二章 实验室安全管理机构和职责<br>
            </div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第三条实验室安全工作实行校、院（系、所、中心）、实验室分级管理。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第四条 学校设立西安交通大学实验室安全暨辐射防护领导小组，组长由校级主管领导担任，成员由各相关职能部门部长、主管副部长和各院（系）主管副院长（副主任）组成，主要负责监督、指导全校实验室技术安全管理和辐射防护工作。西安交通大学实验室安全暨辐射防护领导小组下设西安交通大学实验室安全暨辐射防护专业小组，成员由相关职能部门工作人员和各相关学科实验技术人员组成，主要负责全校实验室技术安全和辐射防护工作的技术支持和咨询。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第五条校实验室与设备管理部是我校实验室技术安全的归口管理机构，主要负责实验室技术安全管理的日常工作；校辐射防护室（挂靠实验室与设备管理部）是学校辐射防护工作的归口管理机构，主要负责校内利用放射性同位素与射线装置进行教学、科研和生产活动的技术安全管理。实验室与设备管理部应采取定期和不定期相结合的方式，会同相关部门，对全校各类实验室进行安全检查。一旦发现安全隐患，实验室与设备管理部应及时通知所属单位限期整改，对整改不力的实验室，应责成所属单位将其暂时关停，直至整改合格。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第六条各院（系、所、中心）行政正职领导是所在单位实验室安全第一责任人；各院（系、所、中心）主管实验室工作的副院长（副主任）是所在单位实验室安全工作的直接责任人，具体负责所在单位的实验室安全管理工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第七条各院（系、所、中心）行政正职领导负责组织建立一支由主管副院长（副主任）牵头的实验室安全管理队伍，设专职或兼职实验室安全管理员，协助主管副院长（副主任）做好所在单位实验室安全管理的日常工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第八条实验室主任或课题责任教授（PI）为所在实验室安全负责人，对所在实验室安全管理工作全面负责。各实验室应设专职或兼职的实验室安全管理员，负责所在实验室的日常安全管理工作。实验室安全管理员须经过培训，具备一定的安全知识和技能。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第九条院（系、所、中心）主管副院长（副主任）应代表所在单位与学校签订《实验室安全责任书》；实验室主任或课题责任教授（PI）应代表实验室与院（系、所、中心）签订《实验室安全责任书》，责任逐级落实到位。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十条院（系、所、中心）的各级实验室安全责任人应对所在单位的安全负有检查、监督和管理的责任。实验室发生安全事故时，按照“谁主管、谁负责”的原则，判定应承担的责任。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第三章 实验室安全管理工作<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第十一条 实验室人员。实验室所有人员必须经过必要的安全教育和培训，在掌握各项实验室安全管理办法和基本知识、熟悉各项操作规程后，方可开始实验操作。实验室人员必须严格按操作规程进行实验，并履行工作场所和工作岗位规定的安全职责，对自己所在岗位的安全负直接责任。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十二条安全知识宣传。在实验室工作的教师、实验技术人员都有开展安全教育、进行安全管理的责任。各实验室应积极宣传、普及实验室安全知识和一般急救知识（如烧伤、创伤、中毒、触电等急救处理方法）。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十三条 实验室应急预案及安全检查。各实验室人员必须熟悉本实验室各类安全事故应急预案；各实验室须定期进行安全检查，做好记录，对发现的安全隐患应及时消除或限期整改。不能马上解决的，要明确整改措施、整改期限和整改负责人。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十四条仪器设备布局。实验室内的仪器设备、材料、工具等物品应分类摆放整齐，布局合理。各实验室应及时清理废旧物品，不堆放与实验室工作无关的物品，保证安全通道畅通。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十五条 实验室消防。实验室消防工作应以防为主，杜绝火灾隐患。实验室人员须了解本实验室中各类易燃易爆物品的特性及相关消防知识。实验室防火工作的具体细则详见《西安交通大学防火安全管理规定》。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十六条 实验室用电安全。实验室要加强安全用电管理，不得擅自改装、拆修电气设施；不得乱接、乱拉电线，实验室内不应有裸露的电线头，应配有必要的避雷设施；配电箱内不得堆放物品，以免造成触电或燃烧；对高压装置应有相应的安全措施。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十七条有毒物品管理。实验室在使用易制毒和剧毒化学品时，要严格按相关管理规定使用和保管，同时要有可靠的安全防范措施，并做好详细记录。实验室剧毒物品管理工作的具体细则详见《西安交通大学关于剧毒物品的管理规定》。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十八条 放射性物品管理。放射性物品应指定专人管理。实验室在使用放射性物质时应严格避免放射性物质进入人体内和沾染身体；应严格避免放射性物质扩散，放射性废物应储存在专用容器中并定期处理。实验室放射防护工作的具体细则详见《西安交通大学放射防护管理细则》。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十九条 生物安全。实验室在生物安全方面的管理工作应严格遵守《实验室生物安全通用要求》（GB19489-2004）。实验动物管理工作的具体细则详见《西安交通大学实验动物管理暂行办法》和《西安交通大学实验动物废弃物处理实施细则》。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十条 特殊工种的劳动保护。实验室在从事涉及压力容器、电工、焊接、振动、噪声、高温、高压、辐射、强光闪烁、细菌疫苗及放射性物质的操作和实验时，要严格制定相关操作规程，采取相应的劳动保护措施。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十一条 环境保护。实验室应加强环境保护管理工作，应尽可能避免对实验室周边环境造成污染。对废气、废物、废液的处理须严格按照有关规定执行，不得随意排放。新建和改扩建实验室时，须将有害物质、有毒气体的处理列入工程施工预案。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十二条 安全事故处理。实验室发生安全事故时，应采取积极有效的应急措施，防止危害扩大蔓延，同时须及时上报，不得隐瞒事实真相。对事故瞒报、不报的单位和个人，学校将追究相关人员责任，情况严重者将给予相应的行政处分。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十三条 对外安全责任。实验室在承担校外教学、科研实验任务时，应明确安全责任。<br>

             </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第四章 仪器设备安全管理工作<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第二十四条 仪器设备安全责任。各院（系、所、中心）主管实验室工作的副院长（副主任）对所在单位的仪器设备安全负有领导责任；大型仪器设备的责任教授是该仪器设备的安全负责人；一般仪器设备的仪器负责人是该仪器设备的安全负责人。仪器设备的安全负责人应经常对仪器设备进行安全检查，发现问题应及时向领导和主管部门报告并妥善解决。因责任事故造成仪器设备损坏或丢失的单位或个人应按照《西安交通大学仪器设备损坏丢失赔偿办法》进行赔偿。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十五条 仪器设备环境条件。各院（系、所、中心）应根据仪器设备的性能要求，提供安装使用仪器设备的场所，并根据仪器设备的不同情况，采取防火、防潮、防热、防冻、防尘、防震、防磁、防腐蚀、防辐射等必要的技术防护措施。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十六条 安全操作规程。各院（系、所、中心）须制定仪器设备安全操作规程，使用仪器设备尤其是大型仪器设备的人员必须经过培训，考核合格后方可操作。实验室应定期对仪器设备进行维护、校验和标定。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十七条 故障维修。仪器设备发生故障时，要及时组织修复，并做好维修记录。一般仪器设备的维修、拆卸应经实验室主任同意，由具备维修专业知识的人员具体操作；大型仪器设备的重大维修或拆卸应上报校实验室与设备管理部。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十八条 停水停电保护。要注意仪器设备，特别是大型仪器设备的停水停电保护，防止因电压波动或突然停电、停水造成仪器设备损坏。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十九条 实验室施工改造。实验室在施工改造前，实验室负责人应将施工计划上报院（系、所、中心）主管副院长（副主任），经主管副院长（副主任）批准后，实验室负责人还应在督促施工方办理有关手续并确保本实验室及周边实验室安全后，方可实施。施工期间，实验室负责人应安排人员值守，监督施工安全，防止意外事故发生。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十条 器具配备。除常规消防设施外，各院（系、所、中心）应根据仪器设备的性质配备相应的防护设备与器材，实验室工作人员应熟练掌握使用方法，提高事故防范能力。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十一条 领用仪器安全管理。个人领用或借用的仪器设备（如笔记本电脑等），领用人或借用人应进行妥善保管，避免损坏或丢失。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第五章 附则<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第三十二条 医学部和各临床医院参照本办法的基本原则另行制定实施细则。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十三条 本办法由西安交通大学实验室与设备管理部、保卫部负责解释。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十四条 本办法经2011年5月17日第770次校长办公会讨论通过，自发布之日起施行，原办法自动废止。<br>
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