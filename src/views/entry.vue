<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="product">product</router-link>
    <router-link to="cart">cart</router-link>
    <router-link to="mine">mine</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'entry',
  setup () {
    const state = reactive({
      name: 11
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>