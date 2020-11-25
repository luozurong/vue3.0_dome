<template>
  <div>
  {{name}}
    <router-link to="/">home</router-link>
    <router-link to="product">product</router-link>
    <router-link to="cart">cart</router-link>
    <router-link to="mine">mine</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { reactive, toRef } from 'vue'
export default {
  setup () {
    const state = reactive({
      name: 11
    })
    return {
      ...toRef(state)
    }
  }
}
</script>