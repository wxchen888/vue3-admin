import { RouteRecordRaw } from 'vue-router'

export let firstMenu: any = []
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //1.读取本地所有路由
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = import.meta.globEager('../router/main/*/**/index.ts')
  for (const val of Object.values(routeFiles)) {
    allRoutes.push(val.default)
  }
  // console.log('allRoutes', allRoutes)

  //2.菜单的映射
  //对userMenus进行递归处理 当该层级component !== null && name===allRoutes[x].name
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // console.log('menu', menu)
      if (menu.component !== null) {
        const route = allRoutes.find((route) => {
          return route.name === menu.name
        })
        if (route) {
          if (!firstMenu) {
            firstMenu = route
          }
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapToMenu(userMenus: any[], currentPathName: string): any {
  console.log('currentPathName', currentPathName)

  for (const menu of userMenus) {
    if (menu.component !== null && menu.title === currentPathName) {
      return menu
    } else {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPathName)
      if (findMenu) {
        return findMenu
      }
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []
  // 递归实现深度遍历
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      // if(menu.component===null && menu.children.length!==0){
      //   _recurseGetPermission(menu.children)
      // }else if(menu.component!==null && menu.children.length!==0){
      //   menu.children.forEach(item=>{
      //     permissions.push(item.permissionValue)
      //   })
      // }

      if (menu.type === 2) {
        permissions.push(menu.permissionValue)
      } else if (menu.type === 1) {
        _recurseGetPermission(menu.children ?? [])
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}
