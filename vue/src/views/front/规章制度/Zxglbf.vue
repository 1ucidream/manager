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
                    <el-menu-item :to="{ path: '/front/gzyl' }" class="el-leftmenugzzd-item" index="/front/Gztl" >
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
              <el-breadcrumb-item>国家级实验教学示范中心管理办法</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="wz-title-nav">国家级实验教学示范中心管理办法</div>
            <el-divider content-position="center">发布日期：2023-01-12</el-divider>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第一章 总 则<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第一条 为加快实施国家创新驱动发展战略，提升大学创新人才培养能力，加强实践育人工作，进一步推进实验教学改革，促进优质教学资源整合与共享，规范和加强国家级实验教学示范中心（以下简称示范中心）建设与运行管理，特制定本办法。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二条 示范中心是高等学校组织高水平实验教学、培养学生实践能力和创新精神的重要教学基地，是教育部依托相关高等学校建设的国家级实验教学示范平台。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三条 示范中心主要任务是坚持立德树人，聚焦国家人才战略和社会发展需求，紧扣高等学校人才培养目标，开展实验教学研究，创新实验室管理机制，探索引领实验教学改革方向，共享优质实验教学资源，以高水平实验教学支撑高质量人才培养工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第四条 示范中心实行“教学为主、开放共享、定期评估、动态调整”的运行机制，坚持育人为本，创新引领，科教一体，产教融合。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第二章 管理职责<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第五条 教育部是示范中心宏观管理部门，主要职责是：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（一）制定示范中心发展的方针和政策，编制发展规划，发布立项指南。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（二）制定示范中心管理办法，指导示范中心的建设和运行。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（三）组织或委托相关机构开展示范中心遴选、立项建设，根据省级教育行政部门评估检查结果，提出调整或撤销名单。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（四）组织或委托相关机构组建示范中心协作组织，推动示范中心开展国内外交流。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第六条 省级教育行政部门的主要职责是：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（一）制定本区域省级高等学校实验教学示范中心发展政策和规划。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（二）做好本区域省级高等学校实验教学示范中心的立项建设、评估和检查工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（三）指导本区域示范中心的运行和管理，组织、监管区域内示范中心的对外交流合作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第七条 高等学校是示范中心建设和运行管理的主体，其主要职责是：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（一）将示范中心建设和基本运行经费纳入学校年度预算；在重点改革推进，人才引进和队伍建设、自主选题研究等年度计划中对示范中心给予重点支持；提供人力资源、实验场所和仪器设备等条件保障。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（二）组织示范中心的申报、论证，定期做好自评自查工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（三）审议并确定示范中心名称、发展规划和目标、组织结构等重大事项的调整，经主管部门审核后报教育部备案。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（四）制定示范中心运行管理的实施细则，负责日常监督管理，组织示范中心年度考核。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（五）聘任示范中心主任，组建教学队伍和管理团队。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第三章 立项与遴选<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第八条 教育部根据高等教育改革与发展规划、人才培养和学科发展的需要，结合示范中心建设整体布局，会同高等学校主管部门，不定期发布立项指南，组织开展示范中心的立项建设。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第九条 示范中心立项申请的基本条件：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（一）人才培养目标明确，实验教学体系完备，实验教学方式方法特色鲜明，学生实践能力和创新精神培养成效显著，具有典型示范意义；有承担国家和地方教学改革的能力；具备开放共享的条件，能够广泛开展国内外交流与合作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（二）拥有一支由高水平教授负责，实验教学与理论教学队伍互通，校内外师资顺畅流动，教学、科研、技术兼容，核心骨干相对稳定，年龄、职称、知识、能力结构合理的实验教学团队。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（三）具有充足实验教学条件，人员与场所相对集中；具备优良的实验教学和实验室管理信息化、网络化、智能化条件；近4年未发生安全责任事故。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（四）具有较为完善的管理制度、教学质量评价和保障体系，实行中心主任负责制。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（五）示范中心申请立项时，应已经使用申报名称运行4年以上，同时获得省级示范中心称号2年以上，符合教育部立项指南发布的建设要求和申请条件等。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十条 根据教育部发布的示范中心立项指南，符合立项申请基本条件的高等学校按规定格式填写《国家级实验教学示范中心建设申请书》。高等学校应确保申请书内容的真实性，并签署配套经费及条件保障等意见，经省级教育行政部门审核同意后报教育部。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十一条 教育部组织或委托相关机构，根据《国家级实验教学示范中心建设申请书》等材料对申报单位进行遴选，择优立项，向高等学校批复遴选结果，并抄送其主管部门。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第四章 运行与管理<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第十二条 高等学校应当重视示范中心的建设与发展，成立由校级领导牵头，教务、人事、财务、学科、实验室等管理部门参加的示范中心建设和运行管理委员会，负责落实条件保障、日常监督管理和年度考核工作，协调解决示范中心发展中的重大问题。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十三条 示范中心实行高等学校领导下的主任负责制。示范中心主任负责示范中心的全面工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;示范中心主任由高等学校公开招聘和聘任，报主管部门、省级教育行政部门和教育部备案。示范中心主任是高等学校聘任的全职教学科研人员，应为本领域高水平教授，具有正高级专业技术职务，具有较强的组织管理能力。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十四条 示范中心应成立教学指导委员会，其职责是审议示范中心的人才培养目标、实验教学体系、重大教学改革项目、重大对外开放交流活动、年度报告等。教学指导委员会每年至少召开1次会议。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;教学指导委员会主任和委员由高等学校聘任。教学指导委员会主任一般应由非示范中心所在高等学校人员担任。教学指导委员会委员由5-7位校内外优秀专家组成，其中示范中心所在高等学校人员不超过1/3。鼓励聘请行业企业专家和外籍专家。1位专家至多同时担任3个示范中心教学指导委员会委员。委员每届任期5年，一般连任不超过2届，原则上连续2次不出席教学指导委员会会议的应予以更换。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十五条 示范中心人员由固定人员和流动人员组成。固定人员应是高等学校聘用的聘期2年以上的全职人员，包括教学、技术和管理人员。流动人员包括校内兼职人员、行业企业人员、海内外合作教学人员等。示范中心要保持适当的规模，积极吸引国内外高等学校、相关行业企业等人才。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十六条 示范中心应围绕人才培养目标，保质保量完成年度教学计划；注重利用先进教学理念、前沿技术等推动教学体系和教学方式方法改革；不断有计划更新实验项目和内容，注重将科学前沿成果和行业产业先进技术及时转化为实验教学项目；充分发挥高等学校多学科优势，确保综合性实验项目和创新创业类实验项目的适当比例；合理调节基础实验和专业实验的比例。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十七条 示范中心应注重教学研究，组织团队系统开展教学体系、教学内容、教学方法、教学组织、教学评估等研究；独立或联合国内外高等学校开展教学研究，积极承担国家、区域和高等学校教学改革项目；开展跨学科实验教学项目研究；开展仪器设备的自主研发和更新改造，开展实验技术方法的创新研究。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十八条 示范中心应落实以人为本的理念，建立健全规章制度，不断完善管理体制和运行机制；保障仪器设备的功能完好、使用充分、及时更新；强化实验室安全责任意识，确保实验教学人员和国家财产的安全；加强知识产权的规范管理，在示范中心期间完成的教材、著作、论文、软件、数据库等学术性成果均应标注示范中心名称。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十九条 示范中心应充分开放运行，在满足本单位教学需求的前提下，所有的教学资源均应面向社会开放运行；应设立公众开放日，面向社会开展科学知识传播和服务。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十条 示范中心应积极推进信息化与教学的深度融合，建设各类信息化教学资源，建立统一的实验教学中心信息管理平台，持续提高人员信息技术的应用能力；积极探索校企、校所、校校合作开发网络化、虚拟化教学资源。示范中心信息化建设应纳入学校信息化工作统筹管理，保证安全运行。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十一条 示范中心应充分发挥示范引领作用，建立校际访问学者和对外培训制度，设立开放课题，积极承担国内高等学校（特别是西部地区高等学校）实验室人才培训和培养任务；积极与国内外科研机构和行业企业联合培养创新人才，开展实践教学基地和资源建设；积极组织和参加国内外学术交流、竞赛、成果展示与培训活动，与国内外各类实验室机构和团队开展稳定的实质性合作。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第五章 考核与调整<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第二十二条 示范中心必须编制年度报告，内容应包括示范中心基本数据、示范辐射和改革建设的主要工作与成效等，并在示范中心网站公布。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十三条 高等学校以年度报告为基础，每年组织对示范中心的年度考核，并将考核结果与年度报告一并报省级教育行政部门和教育部备案。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十四条 省级教育行政部门对示范中心进行定期评估，定期评估周期为5年。定期评估结果分为合格、整改、不合格三类，对评估结果为整改的示范中心要求限期整改。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十五条 教育部根据省级教育行政部门定期评估结果，对示范中心进行动态调整。对评估结果为不合格或整改后仍不合格的示范中心不再列入示范中心序列。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第六章 附 则<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第二十六条 示范中心统一命名为“××国家级实验教学示范中心（××大学），英文名称为National Demonstration Center for Experimental （XXX） Education （×× University）。如：化学国家级实验教学示范中心（西安交通大学），National Demonstration Center for Experimental Chemistry Education （Xi'an Jiaotong University）.<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十七条 在示范中心运行管理中，凡是属于国家涉密范围的相关情形和内容，均应按照相关保密法规执行。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十八条 本办法自公布之日起施行。<br>
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