import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决导航栏或者底部导航tabBar中的vue-router在3.0版本以上频繁点击菜单报错的问题。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Manager',
    component: () => import('../views/Manager.vue'),
    redirect: '/home',  // 重定向到主页
    children: [
        // 这些都是manager的子块
      { path: '403', name: 'NoAuth', meta: { name: '无权限' }, component: () => import('../views/manager/403') },
      { path: 'home', name: 'Home', meta: { name: '系统首页' }, component: () => import('../views/manager/Home') },
      { path: 'admin', name: 'Admin', meta: { name: '管理员信息' }, component: () => import('../views/manager/Admin') },
      { path: 'adminPerson', name: 'AdminPerson', meta: { name: '个人信息' }, component: () => import('../views/manager/AdminPerson') },
      { path: 'labadminPerson', name: 'LabadminPerson', meta: { name: '个人信息' }, component: () => import('../views/manager/LabadminPerson') },
      { path: 'studentPerson', name: 'StudentPerson', meta: { name: '个人信息' }, component: () => import('../views/manager/StudentPerson') },
      { path: 'password', name: 'Password', meta: { name: '修改密码' }, component: () => import('../views/manager/Password') },
      { path: 'notice', name: 'Notice', meta: { name: '公告信息' }, component: () => import('../views/manager/Notice') },
      { path: 'labadmin', name: 'Labadmin', meta: { name: '实验室管理员' }, component: () => import('../views/manager/Labadmin') },
      { path: 'student', name: 'Student', meta: { name: '学生信息' }, component: () => import('../views/manager/Student') },
      { path: 'teacher', name: 'Teacher', meta: { name: '教师信息' }, component: () => import('../views/manager/Teacher') },
      { path: 'type', name: 'Type', meta: { name: '实验室分类' }, component: () => import('../views/manager/Type') },
      { path: 'lab', name: 'Lab', meta: { name: '实验室信息' }, component: () => import('../views/manager/Lab') },
      { path: 'labStudent', name: 'LabStudent', meta: { name: '实验室信息' }, component: () => import('../views/manager/LabStudent') },
      { path: 'reserve', name: 'Reserve', meta: { name: '预约记录' }, component: () => import('../views/manager/Reserve') },
      { path: 'fix', name: 'Fix', meta: { name: '报修记录' }, component: () => import('../views/manager/Fix') },
      { path: 'checks', name: 'Check', meta: { name: '检修记录' }, component: () => import('../views/manager/Check') },



    ]
  },
  {
    path: '/front',
    name: 'Front',
    component: () => import('../views/Front.vue'),
    redirect: '/front/home',  // 重定向到主页
    children: [
      { path: 'home', name: 'Home', meta: { name: '系统首页' }, component: () => import('../views/front/Home') },
      { path: 'person', name: 'Person', meta: { name: '个人信息' }, component: () => import('../views/front/Person') },
      { path: 'sysgk', name: 'sysgk', meta: { name: '实验室概况' }, component: () => import('../views/front/实验教学/Sysgk.vue') },

      { path: 'dxwlsy', name: 'dxwlsy', meta: { name: '大学物理实验' }, component: () => import('../views/front/实验教学/Dxwlsy.vue') },
      { path: 'dxwlsy-info-01', name: 'dxwlsy-info-01', meta: { name: '大学物理实验资源视频' }, component: () => import('../views/front/实验教学/Dxwlsy-info-01.vue') },

      { path: 'zywlsy', name: 'zywlsy', meta: { name: '专业物理实验' }, component: () => import('../views/front/实验教学/Zywlsy.vue') },
      { path: 'zywlsy-info-01', name: 'zywlsy-info-01', meta: { name: '专业物理实验资源' }, component: () => import('../views/front/实验教学/Zywlsy-info-01.vue') },

      { path: 'jdwlsy', name: 'jdwlsy', meta: { name: '近代物理实验' }, component: () => import('../views/front/实验教学/Jdwlsy.vue') },
      { path: 'jdwlsy-info-01', name: 'zjdwlsy-info-01', meta: { name: '近代物理实验资源' }, component: () => import('../views/front/实验教学/Jdwlsy-info-01.vue') },

      { path: 'zhwlsy', name: 'zhwlsy', meta: { name: '综合物理实验' }, component: () => import('../views/front/实验教学/Zhwlsy.vue') },


      { path: 'zxjs', name: 'Zxjs', meta: { name: '中心介绍' }, component: () => import('../views/front/中心概况/Zxjs.vue') },
      { path: 'lsyg', name: 'Lsyg', meta: { name: '历史沿革' }, component: () => import('../views/front/中心概况/Lsyg.vue') },
      { path: 'zxjg', name: 'Zxjg', meta: { name: '中心机构' }, component: () => import('../views/front/中心概况/Zxjg.vue') },
      { path: 'zrjs', name: 'Zrjs', meta: { name: '专任教师' }, component: () => import('../views/front/师资力量/Zrjs.vue') },
      { path: 'syjsry', name: 'Syjsry', meta: { name: '实验技术人员' }, component: () => import('../views/front/师资力量/Syjsry.vue') },
      { path: 'jrjs', name: 'Jrjs', meta: { name: '兼任教师' }, component: () => import('../views/front/师资力量/Jrjs.vue') },

      { path: 'zxglbf', name: 'Zxglbf', meta: { name: '中心管理办法' }, component: () => import('../views/front/规章制度/Zxglbf.vue') },
      { path: 'gztl', name: 'Gztl', meta: { name: '工作条例' }, component: () => import('../views/front/规章制度/Gztl.vue') },
      { path: 'glbf', name: 'Glbf', meta: { name: '管理办法' }, component: () => import('../views/front/规章制度/Glbf.vue') },
      { path: 'sbglbf', name: 'Sbglbf', meta: { name: '设备管理办法' }, component: () => import('../views/front/规章制度/Sbglbf.vue') },
      { path: 'glzd', name: 'Glzd', meta: { name: '管理制度' }, component: () => import('../views/front/规章制度/Glzd.vue') },
      { path: 'jtgd', name: 'Jtgd', meta: { name: '具体规定' }, component: () => import('../views/front/规章制度/Jtgd.vue') },
      { path: 'pczd', name: 'Pczd', meta: { name: '赔偿制度' }, component: () => import('../views/front/规章制度/Pczd.vue') },
      { path: 'kcsz', name: 'Kcsz', meta: { name: '课程思政' }, component: () => import('../views/front/Kcsz.vue') },

    ]
  },
  { path: '/login', name: 'Login', meta: { name: '登录' }, component: () => import('../views/Login.vue') },
  { path: '/register', name: 'Register', meta: { name: '注册' }, component: () => import('../views/Register.vue') },
  { path: '*', name: 'NotFound', meta: { name: '无法访问' }, component: () => import('../views/404.vue') },
  { path: '/homepage', name: 'Homepage', meta: { name: '主页' }, component: () => import('../views/homepage.vue') },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 注：不需要前台的项目，可以注释掉该路由守卫
// 路由守卫
// router.beforeEach((to ,from, next) => {
//   let user = JSON.parse(localStorage.getItem("xm-user") || '{}');
//   if (to.path === '/') {
//     if (user.role) {
//       if (user.role === 'USER') {
//         next('/front/home')
//       } else {
//         next('/home')
//       }
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

//
export default router
