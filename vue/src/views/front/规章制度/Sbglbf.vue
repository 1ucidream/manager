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
              <el-breadcrumb-item>西安交通大学仪器设备管理办法</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="wz-title-nav">西安交通大学仪器设备管理办法</div>
            <el-divider content-position="center">发布日期：2023-01-12</el-divider>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第一章 总 则<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第一条 为了加强对西安交通大学仪器设备的管理，提高仪器设备的使用效益，根据财政部《中央行政事业单位固定资产管理办法》和教育部《高等学校仪器设备管理办法》的有关规定，结合学校的实际情况制定本办法。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二条 学校的仪器设备是国有资产。仪器设备管理的主要任务是对仪器设备的论证、购置（包括40万元以上大型仪器设备的申请、论证和审批）、使用、调拨直至报废的全过程实施管理。仪器设备管理的目的是优化资源配置，提高仪器设备的完好率、使用率，更好地为教学、科研服务。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三条 仪器设备管理是学校教学、科研工作的可靠保证。各单位须配备具有相关专业知识、责任心强的人员担任管理工作，并重视对他们的培养和提高。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第四条 各单位在仪器设备的使用过程中要保证所用仪器设备的安全、完好和使用效益。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第二章 管理体制<br>
            </div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第五条 西安交通大学仪器设备实行校、院（系）、实验室三级管理体制。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;在主管校长领导下，实验室与设备管理部负责全校仪器设备的归口管理。院（系）应在主管院长（系主任）领导下，合理配备院（系）及实验室的专职或兼职仪器设备管理人员。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第三章 仪器设备的管理范围<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第六条 单价在800元（含）以上、使用年限在一年以上的仪器设备，为学校管理的仪器设备（价格起点与财政部规定的固定资产价格起点一致）。其中，单价在800元（含）以上20万元以下的为一般仪器设备；单价在人民币20万元以上（含）的为大型仪器设备。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;单价在200元以上（含）800元以下，使用年限在一年以上的仪器设备的为低值仪器设备。低值仪器设备实行院（系、所、中心、部）、实验室二级管理。其中，500元（含）以上800元以下的由院（系、所、中心、部）管理，500元以下由实验室管理。<br>

             </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第四章 仪器设备的购置、管理和使用<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第七条 仪器设备的购置应按《西安交通大学大型仪器设备管理办法》，《西安交通大学国内仪器设备采购管理办法》，《西安交通大学科教用品进口管理办法》的有关规定执行。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第八条 凡属学校仪器设备，不论其经费来源（教学、科研、各项专款或基金、贷款或自筹资金）及进入渠道（购置、调拨、自制、赠送等）都要建档入帐，不得滞留帐外。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第九条 新购置的800元（含）以上的仪器设备建立固定资产档案的程序为：院（系）级管理人员配合领用人填写“西安交通大学固定资产信息卡”，并确保填写内容完整、准确；上网录入建档；实验室与设备管理部审核确认；办理财务报销手续。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十条 新购置的500元（含）以上800元以下的低值仪器设备建立档案的程序为：领用人填写“西安交通大学低值仪器卡片”；由院系级仪器设备管理人员录入“西安交通大学低值仪器卡片”信息并进行管理。不能独立使用的零、附件不属于低值仪器设备，应在原仪器（帐）上增值。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十一条 各单位要认真制定并执行仪器设备的操作规程，对仪器设备管理使用人员进行培训考核，仪器设备管理使用人员要做好使用和维护、维修记录，在仪器设备发生故障时及时组织修复，保证仪器设备的完好。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十二条 各单位在保证安全的前提下，要努力提高仪器设备的使用率，增加开机时间，充分发挥仪器设备在教学科研、人才培养和社会服务工作中的作用。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十三条 院（系）及实验室仪器设备管理人员，应及时办理仪器设备的购置、获赠、调拨、报损、报废等手续，定期进行帐、物核对，做到帐、物相符。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十四条 实验室与设备管理部对院（系）各单位的仪器设备管理工作进行不定期的检查。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十五条 在仪器设备管理中，禁止任何形式的闲置浪费、公物私化、私自转让、丢弃等行为。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第五章 仪器设备的借用<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第十六条 校内院、系、实验室之间仪器设备的借用，经仪器设备所在实验室主任同意，借方填写《西安交通大学仪器设备借用单》，办理借用手续。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十七条 在不影响学校教学科研工作的前提下，仪器设备可以借出校外。借方凭单位公函，经仪器设备所在实验室主任同意、院（系）主管负责人批准，填写《西安交通大学仪器设备借用单》，与仪器设备所在院（系）仪器管理人员办理借用手续。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十八条 免税进口的仪器设备的借用，需由实验室与设备管理部向海关办理相关手续。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第十九条 大型仪器设备的借用，需向实验室与设备管理部申报，未经批准，不得外借。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十条 因工作需要，需长期使用笔记本电脑、数码相机等便携式仪器设备的个人，需经有关负责人同意，并在院（系）仪器设备管理人员处办理领用手续。如系临时借用，须办理借用手续。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十一条 借出的仪器设备如出现损坏、遗失等问题，按《西安交通大学仪器设备损坏丢失赔偿办法》处理。收取的费用用于补偿仪器设备损坏、遗失的损失。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第六章 仪器设备的调拨和上交<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第二十二条 院（系）内实验室之间的仪器设备调拨工作，需经院（系）主管负责人批准后，由院系级仪器设备管理人员负责调拨。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十三条 校内各单位之间的仪器设备调拨，由调拨双方院（系）主管负责人批准后，填写《西安交通大学仪器设备调拨单》，到实验室与设备管理部办理过户手续。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十四条 向校外调拨仪器设备应由双方仪器设备主管部门批准，方可办理调拨手续。批量及大型仪器设备的对外调拨，必要时报主管校长审批。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十五条 免税进口仪器设备的对外调拨，须经实验室与设备管理部批准，并向海关申请监管变更或办理补交税款等手续。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十六条 校内、外仪器设备有价调拨的财务手续，一律在实验室与设备管理部办理。有价调拨的收入将视原设备的经费来源，按比例返回原单位作为设备费，具体实施细则详见《西安交通大学仪器设备调拨、报废收入管理办法》。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十七条 各院（系）多余或积压的仪器设备，应由院（系）主管负责人批准后，填写《西安交通大学仪器设备上交表》并上交至实验室与设备管理部，由实验室与设备管理部组织校内外调剂。<br>

            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第七章 仪器设备的移交<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第二十八条 离（退）休、调出、博士后出站以及长期（一年以上）出国人员，应在离岗前一个月，经院（系）级仪器设备管理人员办理仪器设备移交手续后，方可办理离退休、调离及出站、出国手续，不得以任何理由拒绝移交或私自处理（带走、转送或卖出等）仪器设备。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第二十九条离（退）休及已调离的人员，原则上不能再被聘为本单位实验室及仪器设备的管理人员。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十条主要移交内容如下：<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（一）使用和管理的所有仪器设备（帐、物相符，借进、借出凭证核对等）；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（二）大型仪器设备的技术档案资料（含随机技术资料、验收报告、日常使用记录、维修记录等）以及零部件实物情况（数量、质量、存放地点等）；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（三）工具；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（四）实验室及实验室内箱、柜等的钥匙；<br>

              &nbsp;&nbsp;&nbsp;&nbsp;（五）其他应该交接的事宜。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十一条对出国逾期不归而除名人员以及拒不办理移交手续人员，在院（系）主管院长领导下，由院（系）级仪器设备管理人员会同所在实验室负责人，依法通过相关途径予以收回，重新调配。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十二条教学、科研人员离退休时，所承担的科研项目尚未完成，仍需继续使用仪器设备的，可向所在单位提出申请。各单位应在保证在岗人员教学、科研工作的前提下，尽可能提供方便，为这部分人员使用实验室和仪器设备做妥善安排，使他们能继续为学校做出贡献。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十三条继续参加科研工作的离退休人员，使用课题经费所购置的仪器设备，也应按本办法进行管理。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第八章 仪器设备的报损、报废<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第三十四条 凡申请报损、报废的800元（含）以上的仪器设备，须由实验室主任，实验技术人员填写《仪器设备报损、报废技术鉴定表》，经院（系）主管负责人审批后，报实验室与设备管理部审核、批准。大型仪器设备或较大批量仪器设备的报损、报废，由实验室与设备管理部或主管校长酌情审批。低值仪器设备的报损、报废手续由院系主管负责人审批。报废的仪器设备如系带有放射性同位素的含源装置或射线装置，须先到西安交通大学环境保护办公室及辐射防护办公室办理相关手续。免税进口仪器设备在报废前必须办理撤除海关监管手续。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十五条 报损、报废的仪器设备要保持完整，帐、物相符，及时上交实验室与设备管理部统一处理。任何单位或个人无权自行处理。所得残值按《西安交通大学仪器设备调拨、报废收入管理办法》的相关规定返回仪器设备所在单位。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十六条 为保证帐、物管理的正常秩序，原则上不办理报废留用手续。对确实需要的零部件，应在《仪器设备报损报废技术鉴定表》中注明。在未经实验室与设备管理部批准之前，一律不得自行拆卸。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第三十七条 实验室与设备管理部的仪器设备回收库对校内开放，对于确有实用价值的整机、零部件、附件等，经登记后可进库选用，并按使用价值适当收取费用。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第九章 仪器设备损坏丢失的处理<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第三十八条 具体实施细则详见《西安交通大学仪器设备损坏丢失赔偿办法》。<br>
            </div>
            <div class="wz-smalltitle-nav">&nbsp;&nbsp;&nbsp;&nbsp;第三章 仪器设备的管理范围<br></div>
            <div class="wz-context-nav">
              &nbsp;&nbsp;&nbsp;&nbsp;第三十九条 本办法由实验室与设备管理部负责解释。<br>

              &nbsp;&nbsp;&nbsp;&nbsp;第四十条 本办法经2006年11月28日第631次校长办公会讨论通过，自发布之日起施行。<br>
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