<template>
  <div class="login">
    <div class="form">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-row>
          <el-col :span="24">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="输入密码" prop="pass">
              <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-button type="primary" @click="submitForm">确认登录</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { login } from '@/api/login'
import { ElMessage } from 'element-plus'
import { getValidator } from '@/hooks/login'
import { setLocalStorage } from '@/utils/Cache'
import { useRouter } from 'vue-router'
import { getInitMenus } from '@/api/auth'
import { useStore } from '@/store/index'

const { ruleFormRef, ruleForm, validatePass, checkName } = getValidator()
const router = useRouter()
const store = useStore()
const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  name: [{ validator: checkName, trigger: 'blur' }]
})

const submitForm = async () => {
  if (!ruleForm.name || !ruleForm.pass) {
    ElMessage.warning('请输入用户名和密码')
    return false
  }
  const res = await login({ username: ruleForm.name, password: ruleForm.pass })
  console.log(res)

  if (res.data.code !== 20000) {
    ElMessage.error('登录错误')
    return
  } else {
    // ElMessage.success('用户登录成功!')
    // setLocalStorage('USER_TOKEN', res.data.data.token)
    // //在此处发送权限请求生成路由
    // getInitMenus().then((res: any) => {
    //   console.log('路由菜单', res)
    // })
    // router.push({ name: 'MainIndex', params: res.data.data.userInfo })
    store.dispatch('login/accountLoginAction', { name: ruleForm.name, password: ruleForm.pass })
  }
}
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: #a79f9c;
  .form {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 600px;
    height: 360px;
    background-color: #fff;
    :deep(.el-form-item) {
      justify-content: space-around;
      margin: 40px 0;
      margin-right: 120px;
    }
    :deep(.el-button.el-button--primary) {
      margin-left: 50%;
      margin-top: 20px;
      transform: translateX(-50%);
      padding: 20px 20px !important;
    }
  }
}
</style>
