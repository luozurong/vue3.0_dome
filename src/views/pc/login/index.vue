<template>
  <el-form ref="form" class="login" :model="form" label-width="80px">
    <el-form-item label="用户名" >
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginSubmit">立即登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  <div @click="loginSubmit">登录</div>
</template>
<script>
import { reactive, toRefs} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { logins } from '@/api/login.js'

export default {
  name: 'login',
  setup () {
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      form: {
        username: '',
        password: ''
      }
    })

    // 登录请求
    let loginSubmit = () => {
      let params = {
        username: state.form.username,
        password: state.form.password
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
      ...toRefs(state),
      loginSubmit
    }
  }
}
</script>
<style lang="less" scoped>
  .login{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 500px;
    height: 400px;
    margin: auto;
    padding: 150px 80px 0;
    box-shadow: 0px 0px 10px #eee;
  }
</style>