<template>
  <div>
    {{msg}}
    <button @click="goProductDetail('1')">跳转到productDetail</button>
  </div>
</template>
<script>
import {reactive, toRefs} from 'vue'
import {useRouter} from 'vue-router'
export default {
  name: 'home',
  setup () {
    const router = useRouter()
    const state = reactive({
      msg: '11'
    })
    const goProductDetail = (id) => {
      router.push({
        path: `/productDetail`,
        query: {
          id
        }
      })
    }

    return {
      ...toRefs(state),
      goProductDetail
    }
  }
}
</script>