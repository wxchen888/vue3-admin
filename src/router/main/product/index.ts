const productList = () => import('@/views/product/index.vue')
export default {
  name: 'productList',
  path: '/product/list',
  component: productList,
  meta: {},
  children: []
}
