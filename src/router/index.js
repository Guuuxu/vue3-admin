import { createRouter, createWebHashHistory } from 'vue-router'
/**
 * Note: 子菜单仅当路由的children.length >= 1时才出现
 *
 * hidden: true                   设置为true时路由将显示在sidebar中(默认false)
 * alwaysShow: true               如果设置为true则总是显示在菜单根目录
 *                                如果不设置alwaysShow, 当路由有超过一个子路由时,
 *                                将会变为嵌套模式, 否则不会显示根菜单
 * redirect: noRedirect           如果设置noRedirect时，breadcrumb中点击将不会跳转
 * name:'router-name'             name用于<keep-alive> (必须设置!!!)
 * meta : {
    roles: ['admin','editor']    页面可访问角色设置 
    title: 'title'               sidebar和breadcrumb显示的标题 
    icon: 'svg-name'/'el-icon-x' sidebar中显示的图标
    breadcrumb: false            设置为false，将不会出现在面包屑中
    activeMenu: '/example/list'  如果设置一个path, sidebar将会在高亮匹配项
  }
 */
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'el-icon-s-home', affix: true }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        redirect: '/setting/user',
        meta: { title: '设置', icon: 'el-icon-s-tools', roles: ['admin'] },
        children: [
          {
            path: '/setting/user',
            component: () => import('@/views/setting/user.vue'),
            name: 'Setting.user',
            meta: { title: '用户管理', icon: 'el-icon-user' }
          },
          {
            path: '/setting/dept',
            component: () => import('@/views/setting/dept.vue'),
            name: 'Setting.dept',
            meta: { title: '部门管理', icon: 'el-icon-dept' }
          }
        ]
      }
    ]
  }
]

export const asyncRoutes = []

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
