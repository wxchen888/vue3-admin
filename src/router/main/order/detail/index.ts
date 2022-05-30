const orderDetail = () => import('@/views/order/detail/index.vue')
export default {
  name: 'orderDetail',
  // path: '/order/detail/:id',
  path: '/order/detail',
  component: orderDetail,
  meta: {},
  children: []
}
