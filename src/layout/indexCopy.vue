<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="asideWidth">
        <el-scrollbar>
          <el-menu :default-openeds="['0']" :collapse="collapse" :default-active="currentItemIdx">
            <el-menu-item index="-1" @click="toDashboard">
              <el-icon><WindPower /></el-icon>
              <span>主页大屏</span>
            </el-menu-item>
            <template v-for="(item, idx1) in menus" :key="item.id">
              <!-- 判断二级菜单 -->
              <template v-if="item.children && item.children.length">
                <el-sub-menu :index="idx1 + ''">
                  <template #title>
                    <el-icon><Compass /></el-icon>
                    <span>{{ item.title }}</span>
                  </template>
                  <template v-for="(subitem, idx2) in item.children" :key="subitem.id">
                    <el-menu-item
                      :index="idx1 + '-' + idx2"
                      @click="handleItemClick(subitem, idx1, idx2)"
                    >
                      <el-icon><Flag /></el-icon>
                      <span>{{ subitem.title }}</span>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
              <template v-else>
                <el-menu-item :index="idx1 + ''" @click="handleItemClick(item, idx1)">
                  <el-icon><InfoFilled /></el-icon>
                  <span>{{ item.title }}</span>
                </el-menu-item>
              </template>
            </template>
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
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { setLocalStorage, getCache } from '@/utils/Cache'

const router = useRouter()
const store = useStore()
const menus = store.state.login.userMenus
//记录选中的index
const currentItemIdx = ref<string>('-1')
const handleItemClick = (item: any, idx1: number, idx2?: number) => {
  if (idx2 === 0) {
    currentItemIdx.value = idx1 + '-' + idx2
    setLocalStorage('currentItemIdx', currentItemIdx.value)
  } else {
    idx2 ? (currentItemIdx.value = idx1 + '-' + idx2) : (currentItemIdx.value = idx1 + '')
    setLocalStorage('currentItemIdx', currentItemIdx.value)
  }

  router.push({
    name: item.name ?? 'notFound'
  })
}
const toDashboard = () => {
  currentItemIdx.value = '-1'
  setLocalStorage('currentItemIdx', currentItemIdx.value)
  router.push({
    name: 'Dashboard' ?? 'notFound'
  })
}
onMounted(() => {
  const localItemIdx = getCache('currentItemIdx')
  if (localItemIdx) currentItemIdx.value = localItemIdx
})

const collapse = ref(false)
const asideWidth = ref('200px')
const breadcrumbData = reactive({
  firstTitle: '主页',
  secondTitle: ''
})

const changeCollapse = () => {
  collapse.value = !collapse.value
  collapse.value ? (asideWidth.value = '50px') : (asideWidth.value = '200px')
}

watch(
  () => collapse.value,
  (val) => {
    // console.log(val)
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
