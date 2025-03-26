<template>
  <!--主体-->
<!--  大学物理实验-->

  <div class="main-body">
    <div class="info-boxx-wrapper">
      <div class="info-boxx">
          <img src="@/assets/imgs/scenery2.jpg">
          </img>
      </div>
    </div>
    <div class="info-box-wrapper">
      <div class="info-box">

        <div class="info-box-left-wrapper">
          <div class="info-box-left">
                  <el-menu
                      router
                      :default-active="$route.path"
                      class="left-menu"
                      @open="handleOpen"
                      @close="handleClose">
                    <div class="left-menu-title">实验教学

                    </div>
                    <el-menu-item class="left-menu-item" index="/front/sysgk">
                      <span slot="title">实验室概况</span>
                    </el-menu-item>
                    <el-menu-item  class="left-menu-item" index="/front/dxwlsy" >
                      <span slot="title">大学物理实验</span>
                    </el-menu-item>
                    <el-menu-item  class="left-menu-item" index="/front/zywlsy">
                      <span slot="title">专业物理实验</span>
                    </el-menu-item>
                    <el-menu-item  class="left-menu-item" index="/front/jdwlsy">
                      <span slot="title">近代物理实验</span>
                    </el-menu-item>
                    <el-menu-item  class="left-menu-item" index="/front/zhwlsy">
                      <span slot="title">综合物理实验</span>
                    </el-menu-item>
                        

                  </el-menu>

          </div>
        </div>
        <div class="info-box-right-wrapper">

          <div class="info-box-right">
            <!--              这里是一个各种物理新闻的卡片式展示, 包括一个顶端导航栏, 下半部分是列表-->
            <el-breadcrumb class="breadcrumb-02" >
              <el-breadcrumb-item :to="{ path: '/front/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/front/sysgk' }">实验教学</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/front/jdwlsy' }">近代物理实验</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/front/jdwlsy-info-01' }">正文</el-breadcrumb-item>

            </el-breadcrumb>

              <div class="wz-title"> 近代物理实验 </div>

              <div class="wz-list">
              <ul class="wz-list-ul">

                <li class="wz-list-li">
                  <a   class="wz-list-a">凝聚态专题物理实验讲义</a><p class="wz-list-p">2022-04-12</p>
                </li>
                <li class="wz-list-li">
                  <a  class="wz-list-a">专业物理实验讲义</a><p class="wz-list-p">2019-09-12</p>
                </li>

              </ul>
                
                <div class="v_news_content">
                  <p style="line-height: 38px;"><span ><strong>第一部分：原子系列实验</strong><br></span></p>
                  <p style="line-height: 38px;"><span >实验1.1：α粒子散射（卢瑟福散射）实验&nbsp;<span id="575AE" retain="true"><img src="@/assets/imgs/icon_pdf.gif" ><a >实验1.1 &nbsp;α粒子散射.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验1.2：<span  >弗兰克-赫兹实验&nbsp;<span id="5DF34" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348045">实验1.2 &nbsp;弗兰克—赫兹实验.pdf</a></span></span></span></p>
                  <p style="line-height: 38px;"><span  >实验1.3：塞曼效应实验&nbsp;<span id="714FE" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348046">实验1.3 &nbsp;塞曼效应.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验1.4：<span  >电子衍射实验&nbsp;<span id="8E37E" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348047">实验1.4 &nbsp;电子衍射.pdf</a></span></span></span></p>
                  <p style="line-height: 38px;"><span  >实验1.5：能量的相对论关系实验&nbsp;<span id="637A6" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348048">实验1.5 &nbsp;用快速电子验正相对论效应.pdf</a></span></span></p>
                  <hr>
                  <p style="line-height: 38px;"><strong><span  >第二部分：光学系列实验</span></strong></p>
                  <p style="line-height: 38px;"><span  >实验2.1：空间频率滤波&nbsp;<span id="57133" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348049">实验2.1 &nbsp;空间频率滤波.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.2：光学传递函数&nbsp;<span id="50F7C" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348051">实验2.2 &nbsp;光学传递函数.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.3：测定光源辐射能谱&nbsp;<span id="564B2" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348050">实验2.3 &nbsp;测定光源辐射能谱.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.4：电子俘获材料荧光光谱实验&nbsp;<span id="51022" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348052">实验2.4 &nbsp;电子俘获材料荧光光谱实验.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.5：全息光栅&nbsp;<span id="78722" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348053">实验2.5 &nbsp;全息光栅.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.6：像面全息图&nbsp;<span id="6ADB1" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348054">实验2.6 &nbsp;像面全息图.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.7：数字全息&nbsp;<span id="AA0D3" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348055">实验2.7 &nbsp;数字全息.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.8：光学双稳态&nbsp;<span id="3DA05" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348057">实验2.8 &nbsp;光学双稳态.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.9：液晶的电光效应&nbsp;<span id="3E492" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348056">实验2.9 &nbsp;液晶的电光效应.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.10：单光子计数&nbsp;<span id="A218F" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348058">实验2.10 单光子计数.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.11：利用透射光谱测定滤光片透过率&nbsp;<span id="7A9E3" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348060">实验2.11 利用透射光谱测定滤光片透过率.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验2.12：利用白光干涉测定薄膜厚度&nbsp;<span id="917BE" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348059">实验2.12 利用白光干涉测定薄膜厚度.pdf</a></span></span></p>
                  <hr>
                  <p style="line-height: 38px;"><strong><span  >第三部分：微波系列实验</span></strong></p>
                  <p style="line-height: 38px;"><span  >实验3.1：微波工作波长和波导波长测量&nbsp;<span id="4A674" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348063">实验3.1 &nbsp;微波工作波长和波导波长测量.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验3.2：微波介质特性的测量&nbsp;<span id="35283" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348061">实验3.2 &nbsp;微波介质特性的测量.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验3.3：微波分光仪&nbsp;<span id="3FD52" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348062">实验3.3 &nbsp;微波分光仪.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验3.4：微波布拉衍射&nbsp;<span id="4DC6B" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348064">实验3.4 &nbsp;微波布拉衍射.pdf</a></span></span></p>
                  <hr>
                  <p style="line-height: 38px;"><strong><span  >第四部分：核磁共振系列实验</span></strong></p>
                  <p style="line-height: 38px;"><span  >实验4.1：核磁共振&nbsp;<span id="62DCA" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348066">实验4.1 &nbsp;核磁共振.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验4.2：脉冲核磁共振与核磁共振成像&nbsp;<span id="854BE" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348067">实验4.2 &nbsp;脉冲核磁共振与核磁共振成像.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验4.3：射频段电子自旋共振&nbsp;<span id="4CC36" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348065">实验4.3 &nbsp;射频段电子自旋共振.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验4.4：微波段电子自旋共振&nbsp;<span id="3FE94" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348068">实验4.4 &nbsp;微波段电子自旋共振.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验4.5：光泵磁共振&nbsp;<span id="74E31" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348069">实验4.5 &nbsp;光泵磁共振.pdf</a></span></span></p>
                  <hr>
                  <p style="line-height: 38px;"><strong><span  >第五部分：超声系列实验</span></strong></p>
                  <p style="line-height: 38px;"><span  >实验5.1：超声光栅&nbsp;<span id="79F7A" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348071">实验5.1 &nbsp;超声光栅.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验5.2：超声波测量及探伤&nbsp;<span id="6DAF4" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348070">实验5.2 &nbsp;超声波测量及探伤.pdf</a></span></span></p>
                  <hr>
                  <p style="line-height: 38px;"><strong><span  >第六部分：X射线系列</span></strong><span  ><br></span></p>
                  <p style="line-height: 38px;"><span  >实验6.1：X射线在单晶上的衍射&nbsp;<span id="C163F" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348076">实验6.1 &nbsp;X射线在单晶上的衍射.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验6.2：X射线能谱与管电流和发射电压的关系&nbsp;<span id="8346C" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348072">实验6.2 &nbsp;X射线能谱与管电流和发射电压的关系.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验6.3：钼阳极X射线特征谱线的精细结构&nbsp;<span id="88A54" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348073">实验6.3 &nbsp;钼阳极X射线特征谱线的精细结构.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验6.4：用杜恩-亨特关系测定普朗克常数&nbsp;<span id="70B3F" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348074">实验6.4 &nbsp;用杜恩-亨特关系测定普朗克常数.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验6.5：边缘吸收：X射线滤波&nbsp;<span id="87EC1" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348075">实验6.5 &nbsp;边缘吸收：X射线滤波.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验6.6：用莫斯利定理测定里德堡常数&nbsp;<span id="8E376" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348077">实验6.6 &nbsp;用莫斯利定理测定里德堡常数.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验6.7：康普顿效应实验&nbsp;<span id="80B44" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348078">实验6.7 &nbsp;康普顿效应：研究散射X光量子的能量损失.pdf</a></span></span></p>
                  <hr>
                  <p style="line-height: 38px;"><strong><span  >第七部分：半导体系列</span></strong><span  ><br></span></p>
                  <p style="line-height: 38px;"><span  >实验7.1：半导体激光器的电学和光学性能测试&nbsp;<span id="9502C" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348080">实验7.1 &nbsp;半导体激光器的电学和光学性能测试.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验7.2：锗的带隙宽度测量&nbsp;<span id="5AC15" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348079">实验7.2 &nbsp;锗的带隙宽度测量.pdf</a></span></span></p>
                  <hr>
                  <p style="line-height: 38px;"><strong><span  >第八部分：材料制备</span></strong><span  ><br></span></p>
                  <p style="line-height: 38px;"><span  >实验8.1：射频溅射镀膜&nbsp;<span id="5E8C2" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348082">实验8.1 &nbsp;射频溅射镀膜.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验8.2：用气氛程控高温炉制备功能材料&nbsp;<span id="32B65" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348081">实验8.2 &nbsp;用气氛程控高温炉制备功能材料.pdf</a></span></span></p>
                  <hr>
                  <p style="line-height: 38px;"><strong><span  >第九部分：其他综合实验</span></strong></p>
                  <p style="line-height: 38px;"><span  >实验9.1：非线性电路与混沌实验&nbsp;<span id="515A2" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348083">实验9.1 &nbsp;非线性电路振荡周期的分岔与混沌实验.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验9.2<span  >：</span>制冷系数的测量&nbsp;<span id="392FA" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348086">实验9.2 &nbsp;制冷系数的测量.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验9.3<span  >：</span>铁电体的电滞回线&nbsp;<span id="5CAC8" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348084">实验9.3 &nbsp;铁电体的电滞回线.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验9.4<span  >：</span>表面等离子共振&nbsp;<span id="46913" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348085">实验9.4 &nbsp;表面等离子共振.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验9.5<span  >：</span>用磁阻效应测量地磁场&nbsp;<span id="59DEE" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348087">实验9.5 &nbsp;用磁阻效应测量地磁场.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验9.6<span  >：</span>自旋玻璃态特性实验&nbsp;<span id="61FD8" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348089">实验9.6 &nbsp;用交直流磁化率法测量稀磁合金的自旋玻璃态特性.pdf</a></span></span></p>
                  <p style="line-height: 38px;"><span  >实验9.7<span  >：</span>用双光栅测量微弱振动&nbsp;<span id="806A0" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348088">实验9.7 &nbsp;用双光栅测量微弱振动.pdf</a></span></span></p>
                  <hr>
                  <p style="line-height: 38px;"><strong><span  >第十部分：新型实验</span></strong></p>
                  <p style="line-height: 38px;"><span  ><span  >实验10.1：激光多普勒测速实验&nbsp;<span id="F3E00" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348090">实验10.1 激光多普勒测速实验.pdf</a></span></span></span></p>
                  <p style="line-height: 38px;"><span  ><span  >实验10.2：光电倍增管及弱信号探测仪&nbsp;<span id="1C0E58" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348091">实验10.2 光电倍增管及弱信号探测仪.pdf</a></span></span></span></p>
                  <p style="line-height: 38px;"><span  ><span  >实验10.3：光电探测器特性测量实验&nbsp;<span id="66C6DE" retain="true"><img src="@/assets/imgs/icon_pdf.gif"   ><a href="/system/_content/download.jsp?urltype=news.DownloadAttachUrl&amp;owner=1577422019&amp;wbfileid=4348092">实验10.3 光电探测器特性测量实验.pdf</a></span></span></span></p>
                  <p style="line-height: 38px;"><span  ><span  ><br></span></span></p>
                </div>

              <el-pagination
                  background="true"
                  layout="prev, pager, next"
                  :total="3">
              </el-pagination>

            </div>



            <div style=" height: auto;  flex-direction: column">
                <p style="width: 780px; height: 35px">
                <a href="https://epc.xjtu.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1577422019&wbfileid=4348044"
                style="float: left !important; height: 35px; padding-top: 30px">

                    附件: 实验1.1 α粒子散射.pdf</a></p>

                <p style="width: 780px ; height: 35px; margin-top: 5px">
                  <a href="https://epc.xjtu.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1577422019&wbfileid=5294231"
                     style="float: left !important; height: 35px; padding-top: 30px">
                    附件: 实验1.2 弗兰克-赫兹实验</a></p>
                <p style="width: 780px ; height: 35px; margin-top: 5px">
                  <a href="https://epc.xjtu.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1577422019&wbfileid=5294231"
                     style="float: left !important; height: 35px; padding-top: 30px">
                    附件: 实验1.3 塞曼效应</a></p>
                <p style="width: 780px ; height: 35px; margin-top: 5px">
                  <a href="https://epc.xjtu.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1577422019&wbfileid=5294231"
                     style="float: left !important; height: 35px; padding-top: 30px">
                    附件: 实验1.4 电子衍射</a></p><p style="width: 780px ; height: 35px; margin-top: 5px">
                <a href="https://epc.xjtu.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1577422019&wbfileid=5294231"
                   style="float: left !important; height: 35px; padding-top: 30px">
                  附件: 实验1.5 用快速电子验证相对论效应</a></p><p style="width: 780px ; height: 35px; margin-top: 5px">
                <a href="https://epc.xjtu.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1577422019&wbfileid=5294231"
                   style="float: left !important; height: 35px; padding-top: 30px">
                  附件: 实验2.1 空间频率滤波 </a></p><p style="width: 780px ; height: 35px; margin-top: 5px">
                <a href="https://epc.xjtu.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1577422019&wbfileid=5294231"
                   style="float: left !important; height: 35px; padding-top: 30px">
                  附件: 实验2.3 测定光源辐射能谱</a></p>



              </div>
          </div>

        </div>
      </div>
    </div>



    </div>

</template>


<script>

// import card01 from '../views/front/info-right-card/card01.vue';
export default {
  name: "Jdwlsy-info-01",

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
    updateUser() {
      this.user = JSON.parse(localStorage.getItem('xm-user') || '{}')   // 重新获取下用户的最新信息
    },
    // 退出登录
    logout() {
      localStorage.removeItem("xm-user");
      this.$router.push("/login");
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
@import "@/assets/css/sysgk.css";

/*body字体样式*/


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
