/*
 * @Author: your name
 * @Date: 2020-07-01 14:38:54
 * @LastEditTime: 2020-07-21 09:54:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-template\src\router\modules\customRouter.js
 */
import Layout from '@/layout'

const customRouter = {
  path: '/custom',
  component: Layout,
  redirect: '/custom/form-mix',
  name: 'Custom',
  meta: {
    title: 'Custom',
    icon: 'el-icon-menu'
  },
  children: [
    {
      path: 'form-mix',
      component: () => import('@/views/custom/form-mix'),
      name: 'FormMix',
      meta: { title: '表单混合',icon:'el-icon-grape' }
    },
    {
      path: 'data-table',
      component: () => import('@/views/custom/data-table'),
      name: 'DataTable',
      meta: { title: '表格通用',icon:'el-icon-s-data' }
    },
  ]
}
export default customRouter
