<template>
  <div @click="loginSubmit">登录</div>
</template>
<script>
import {onMounted} from 'vue'
import {logins} from '@/api/login.js'
export default {
  name: 'login',
  setup () {
    
    onMounted(async () => {
      console.log(1111)
    })
    let loginSubmit = () => {
      let params = {
        username: 'admin',
        password: '123456'
      }
      logins(params).then(res => {
        console.log(res)
      })
    }
    return {
      loginSubmit
    }
  }
}
</script>