import httpRequest from '@/request'

//获取当前token对应的路由表
export function getInitMenus() {
  return httpRequest({
    url: '/admin/sysAuth/index/getInitMenus',
    method: 'get'
  })
}

//获取全部的路由表
export function findAllPermissions() {
  return httpRequest({
    url: '/admin/sysAuth/permission/findAllPermissions',
    method: 'get'
  })
}
