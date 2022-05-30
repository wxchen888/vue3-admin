<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="asideWidth">
        <el-scrollbar>
          <el-menu :default-openeds="['0']" :collapse="collapse" :default-active="defaultTabIndex">
            <el-menu-item index="0" @click="clickHomeSide"
              ><el-icon><HomeFilled /></el-icon>主页</el-menu-item
            >

            <el-sub-menu index="1">
              <template #title>
                <el-icon><Avatar /></el-icon> 权限管理
              </template>
              <el-menu-item
                v-for="(item, index) in authData"
                :key="index"
                :index="'1-' + index"
                @click="clickAuthSide(index)"
              >
                <img
                  :src="item.iconUrl"
                  alt=""
                  style="width: 14px; height: 14px; margin-right: 10px"
                />
                {{ item.itemName }}
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><ShoppingBag /></el-icon> 商品管理
              </template>
              <el-menu-item
                v-for="(item, index) in shopData"
                :key="index"
                :index="'2-' + index"
                @click="clickShopSide(index)"
              >
                <img
                  :src="item.iconUrl"
                  alt=""
                  style="width: 14px; height: 14px; margin-right: 10px"
                />
                {{ item.itemName }}
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><ShoppingCart /></el-icon> 订单管理
              </template>
              <el-menu-item
                v-for="(item, index) in orderData"
                :key="index"
                :index="'3-' + index"
                @click="clickOrderSide(index)"
              >
                <img
                  :src="item.iconUrl"
                  alt=""
                  style="width: 14px; height: 14px; margin-right: 10px"
                />
                {{ item.itemName }}
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header style="display: flex; background-color: #fff">
          <div class="controller" @click="changeCollapse">
            <el-icon><Grid /></el-icon>
          </div>
          <div class="breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/mainIndex' }">{{
                breadcrumbData.firstTitle
              }}</el-breadcrumb-item>
              <el-breadcrumb-item>{{ breadcrumbData.secondTitle }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="toolbar">
            <span class="welcome">欢迎登录: 管理员 </span>
            <el-dropdown>
              <div class="user">
                <div class="avater"></div>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>不凡官网</el-dropdown-item>
                  <el-dropdown-item>gitee</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import useSvgs from '@/hooks/layout'
import { useRouter } from 'vue-router'
import { setLocalStorage } from '@/utils/Cache'

const router = useRouter()
const { authData, shopData, orderData } = useSvgs()
const collapse = ref(false)
const defaultTabIndex = ref('0')
const asideWidth = ref('200px')
const breadcrumbData = reactive({
  firstTitle: '主页',
  secondTitle: ''
})

onMounted(() => {
  nextTick(() => {
    const localTabIndex = localStorage.getItem('tab-index')
    if (localTabIndex) defaultTabIndex.value = JSON.parse(localTabIndex)
  })
})

const changeCollapse = () => {
  collapse.value = !collapse.value
  collapse.value ? (asideWidth.value = '50px') : (asideWidth.value = '200px')
}
const clickHomeSide = () => {
  breadcrumbData.firstTitle = '主页'
  breadcrumbData.secondTitle = ''
  router.push({ name: 'Dashboard' })
  defaultTabIndex.value = '0'
  setLocalStorage('tab-index', defaultTabIndex.value)
}
const clickAuthSide = (index: number) => {
  breadcrumbData.firstTitle = '权限管理'
  breadcrumbData.secondTitle = authData[index].itemName
  switch (index) {
    case 0:
      router.push({ name: 'User' })
      defaultTabIndex.value = '1-0'
      setLocalStorage('tab-index', defaultTabIndex.value)
      break
    case 1:
      router.push({ name: 'Role' })
      defaultTabIndex.value = '1-1'
      setLocalStorage('tab-index', defaultTabIndex.value)
      break
    case 2:
      router.push({ name: 'Permission' })
      defaultTabIndex.value = '1-2'
      setLocalStorage('tab-index', defaultTabIndex.value)
      break
    default:
      break
  }
}
const clickShopSide = (index: number) => {
  breadcrumbData.firstTitle = '商品管理'
  breadcrumbData.secondTitle = shopData[index].itemName
  console.log(index)
}
const clickOrderSide = (index: number) => {
  breadcrumbData.firstTitle = '订单管理'
  breadcrumbData.secondTitle = orderData[index].itemName
  console.log(index)
}

watch(
  () => collapse.value,
  (val) => {
    console.log(val)
    val ? (asideWidth.value = '50px') : (asideWidth.value = '200px')
  },
  {
    immediate: true
  }
)
</script>
<style scoped lang="scss">
.common-layout {
  :deep(.el-aside) {
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #eee;
    .el-menu-item {
      background-color: #eee;
    }
    .el-sub-menu__title,
    .el-menu.el-menu--inline {
      background-color: #eee;
    }
    .el-menu-item.is-active {
      color: #4d71f4 !important;
      background-color: #fff;
    }
    .el-icon {
      margin-right: 20px !important;
    }
  }
  .controller {
    width: 60px;
    line-height: 30px;
    font-size: 20px;
    padding: 15px 10px;
    background-color: #fff;
    cursor: pointer;
  }
  .breadcrumb {
    width: fit-content;
    font-size: 14px;
    margin-top: 20px;
  }
  .toolbar {
    font-size: 14px;
    margin-top: 10px;
    margin-left: auto;
    .welcome {
      display: inline-block;
      line-height: 30px;
    }
    .user {
      display: flex;
      cursor: pointer;
      .avater {
        width: 30px;
        height: 30px;
        border-radius: 6px;
        background-image: url('../assets/xiaoxin.webp');
        background-size: 100% 100%;
        margin-left: 10px;
      }
    }
  }
}
</style>
