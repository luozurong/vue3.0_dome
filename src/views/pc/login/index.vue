<template>
  <div @click="loginSubmit">登录</div>
</template>
<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { logins } from '@/api/login.js'
export default {
  name: 'login',
  setup () {
    const store = useStore()
    const router = useRouter()

    // 登录请求
    let loginSubmit = () => {
      let params = {
        username: 'admin',
        password: '123456'
      }
      logins(params).then(res => {
        console.log(res)
        if (res.code === 200) {
          store.commit('username',res.data.username)
          ElMessage.success({
            message: '登录成功',
            type: 'success'
          })
          router.push('/')
        }
      })
    }
    return {
      loginSubmit
    }
  }
}
</script>