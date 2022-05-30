const userList = () => import('@/views/user/index.vue')
export default {
  name: 'userList',
  path: '/user/list',
  component: userList,
  meta: {},
  children: []
}
