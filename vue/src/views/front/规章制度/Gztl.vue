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
              <el-breadcrumb-item>西安交通大学实验室工作条例</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="wz-title-nav">西安交通大学实验室工作条例</div>
            <el-divider content-position="center">发布日期：2023-01-12</el-divider>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第一章 总 则<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第一条 为了加强西安交通大学实验室的建设和管理，贯彻《高等学校实验室工作规程》(原国家教委第20号令)，结合本校的实际情况，特制定本条例。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二条 实验室是实验教学、科学研究、人才培养和技术服务的重要基地，是办好学校的基本条件之一，也是反映学校教学、科研及管理水平的重要标志。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三条 实验室必须努力贯彻国家的教育方针，保证完成所承担的教学、科研、技术开发和社会服务任务。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第四条 实验室的建设，要从实际出发，明确目标，统筹规划，合理设置。实验室建筑设施、仪器设备、技术队伍和管理要协调发展，提高投资效益。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第二章 实验室基本任务<br>
            </div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第五条 根据学校教学计划，承担实验教学任务。不断完善实验教材等教学资料，准备好实验仪器设备及材料，合理安排人员，保证实验教学顺利进行。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第六条 努力提高实验教学质量。不断吸收科学研究和教学改革的新成果，更新实验内容，改革教学方法，逐步增加设计性、综合性、研究性实验比例，培养学生理论联系实际的学风，严谨的科学态度和发现问题、分析问题、解决问题的能力，培养具有创新意识，创造能力的人才。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第七条 根据承担的科研任务，积极开展科学实验工作。努力提高实验技术，完善技术条件和工作环境，保证高效率、高水平地完成科学研究任务。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第八条 在保证完成教学和科研任务的前提下，充分发挥学术、技术优势，积极创造条件，向校内和社会开放。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第九条 做好仪器设备的配备、管理、维修、维护、改造、计量及标定工作，使仪器设备处于完好状态。鼓励教师、实验技术人员积极使用设备开展实验装置的研究和自制工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十条 建立健全各项规章制度，使各项工作规范化、制度化。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第三章 实验室管理体制<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第十一条 全校各实验室实行统一领导，归口与分级管理的体制。学校设立实验室工作委员会，由一名副校长主管全校实验室工作，实验室与设备管理部是全校实验室工作的归口管理部门。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十二条 实验室工作委员会由主管校长，有关部门行政负责人和学术、技术、管理等方面的专家组成，对学校实验室的发展与规划、建设与管理、大型仪器设备的布局和科学管理、开放共用、实验技术队伍建设、人员培训等重大问题进行研究、咨询和决策。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十三条 实验室与设备管理部的主要职责是：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（一）贯彻执行国家有关的方针、政策和法令、法规，并结合本校实际情况制定并组织实施相应的规章制度；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（二）实验室的规划、建设与管理；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（三）实验技术队伍的建设与管理；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（四）“211工程”、“985工程”等专项经费的执行与管理；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（五）仪器设备固定资产的管理；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（六）大型仪器设备的规划、论证与管理；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（七）国内外仪器设备的招标、采购与管理；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（八）境外赠送及临时性科教用品进出口工作；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（九）外资贷款的执行与管理。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十四条 各院(系)应设一名主管实验室工作的院长（系主任），根据本单位实验室的规模和数量，设立相应的实验室与仪器设备管理工作岗位或机构，协助主管院长（系主任）做好实验室工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十五条 实验室实行主任负责制，实验室主任负责实验室的全面工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十六条 院(系)级（含）以下实验室主任由院(系)任命，报实验室与设备管理部审核备案；校级实验室主任由学校任命；国家或市、部委的重点实验室主任，由上级主管部门聘任或任命。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十七条 不断推进实验室体制改革，有计划、有重点地进行整合、优化，逐步实行以校、院(系)为主的二级管理体制。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第四章 实验室分类和建立原则<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第十八条 实验室按照管理级别分为以下几类：国家实验室、国家重点实验室（工程中心）等国家级实验室、省部级实验室、校级实验室，院（系）级实验室，系（所）级实验室。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十九条 实验室按类别分为基础实验室、专业实验室、科研实验室和综合实验室。基础实验室是指以基础课实验教学为主的实验室；专业实验室是指专业课实验教学和专业科学研究并重的实验室；科研实验室指上级主管部门或学校正式承认的以科学研究为主的专职科研实验室；综合实验室是指多方兼顾，以服务为主的实验室。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十条 实验室的建制应根据学校学科建设的总体规划，按照学校教学、科研和服务的任务以及实际需要确定，统筹规划，合理布局，避免小而全、分散重复设置。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十一条 实验室的设立应具备以下基本条件：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（一）有明确的学科发展方向和稳定的实验教学或科研、技术开发等任务；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（二）有符合实验技术工作要求的房舍、设施及环境。实验室用房面积原则上不得低于100平方米；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（三）有足够数量、配套的仪器设备；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（四）有相对稳定、结构合理的实验室工作人员，包括合格的实验室主任和原则上两名（含）以上的专职实验技术人员；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（五）有科学的工作规范和完善的管理制度。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第五章 建立、调整、撤消的申报和审批<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第二十二条 国家实验室、国家重点实验室（工程中心）等国家级实验室、省部级实验室的建立、调整和撤消由上级行政主管部门负责审批。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十三条 校级及校级以下实验室的建立、调整和撤消由实验室与设备管理部负责审批。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十四条 实验室的建立必须进行必要性、可行性论证。凡申请新建的实验室，须由院（系）向实验室与设备管理部提出书面申请，说明实验室建立的必要性和可行性，并按本条例第四章第二十一条的要求详细说明是否具备条件，填写《西安交通大学实验室登记表》。实验室与设备管理部对申请建立的实验室进行初审后，会同学校相关管理部门共同审定，由实验室与设备部批准后建立。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十五条 实验室的调整指对实验室进行不涉及实验室新建和原有实验室撤消的调整，如：实验室的更名、实验室的部分合并、实验室方向及任务的变化等。实验室的调整需要由院（系）详细说明调整理由和方案，书面报送实验室与设备管理部，经批准后方可进行。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十六条 实验室的撤消，需要由院（系）详细说明实验室撤消的理由和方案以及实验室工作人员的安排、实验室用房的处理办法、实验室仪器设备及相关经费的处理意见等，书面报送实验室与设备管理部，经批准后方可执行。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第六章 实验室的建设与管理<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第二十七条 实验室的建设与发展，要纳入学校的总体发展规划，统筹安排，有步骤、有措施、有重点地进行。实验室应根据本学科教学和科研发展的需要提出具体的发展建设规划。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十八条 实验室建设经费，要采取多渠道筹集资金的办法。学校保证实验教学运行经费的足额投入和专款专用。实验室要有稳定合理的教学设备费、仪器设备运行维护费、大型仪器设备开放测试基金、实验室改、扩建费。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十九条 凡利用实验室进行有偿服务的，都应将收入的一部分用于实验室建设。具体实施细则详见《西安交通大学仪器设备使用收费管理办法》。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十条 实验室仪器设备和材料、低值易耗品等物资的管理，分别遵照《西安交通大学仪器设备管理办法》、《西安交通大学大型仪器设备管理办法》、《西安交通大学低值仪器管理办法》等执行。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十一条 实验动物管理应遵照国家有关部门发布的相关实验动物管理条例，以及北京市实验动物管理委员会的具体规定执行。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十二条 逐步采用现代化管理手段，实现实验室的信息化管理。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十三条 提高实验技术队伍的素质与水平，加强培训与管理，建立、健全岗位责任制，定期对实验室工作人员的工作量和水平进行考核。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十四条 学校定期开展实验室工作的检查评比和研究活动，不断提高工作水平；对成绩显著的集体和个人要进行表彰和鼓励，对违章失职或因工作不负责任造成损失者，视情节轻重分别进行批评教育或处分。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第七章 实验室工作人员和责任<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第三十五条 实验室工作人员包括：从事实验室工作的教师、研究人员、实验技术人员、管理人员和工人等。工作人员岗位职责可根据实验室的性质和需要具体确定。各类工作人员要有明确的职责分工，各司其职，团结协作，完成各项任务。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十六条 实验室主任的主要职责：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（一）组织编制实验室建设规划和工作计划，并组织实施和检查执行情况；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（二）领导并组织完成本条例第二章规定的实验室基本任务；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（三）对实验室进行科学管理，贯彻实施有关规章制度；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（四）分配本实验室各类人员的工作，制定岗位责任制，负责本实验室工作人员的培训及考核；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（五）提高本实验室信息化管理水平并加强对外宣传工作；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（六）负责本实验室的精神文明建设；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（七）完成上级领导部门布置的其他工作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十七条 实验技术人员主要职责：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（一）热爱实验室工作，刻苦钻研业务，遵守和执行有关规章制度，努力完成本职工作；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（二）努力掌握相关的实验原理和实验技术，不断提高业务能力和实验水平；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（三）熟练掌握有关仪器设备的工作原理，做好仪器设备的管理、运行、维修、维护、改进工作，积极研制和开发新仪器；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（四）认真做好实验的准备及辅助工作，保证实验顺利完成，并积极配合教师做好实验的更新改进工作；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（五）积极参加科学研究工作，配合研究人员完成科研任务；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（六）服从实验室主任的领导，分工负责、团结协作。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（七）做好实验室的管理、安全和卫生工作。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第八章 安全、计量、环保及劳动保护<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第三十八条 实验室的安全、计量、环保与劳动保护分别由学校相应的管理部门归口管理。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十九条 实验室应严格遵守国务院颁发的《危险化学品安全管理条例》、《放射性同位素与射线装置放射防护条例》及学校有关安全的规定等，定期检查防火、防爆、防辐射、防盗、防事故等方面安全措施的落实情况。要经常对师生开展安全教育，切实保障人身和财产安全。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第四十条 实验室应严格遵守国家及学校环境保护工作的有关规定，不随意排放废气、废水、废物、不得污染环境。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第四十一条 对于在实验室中从事有害健康工种的工作人员，可参照国家有关规定，享受保健待遇。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第九章 附则<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第四十二条 本条例由实验室与设备管理部负责解释。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第四十三条 本条例经2006年11月28日第631次校长办公会讨论通过，自发布之日起施行。<br>
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