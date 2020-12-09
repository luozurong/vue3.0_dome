<template>
  <div @click="goBack">点击返回上一页</div>
  <div>ref: {{name}} {{num}}</div>
</template>
<script>
import {ref, reactive, toRefs} from 'vue'
import { useRouter } from 'vue-router'

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    console.log(props.name)
    console.log(context)
    let num = ref('hellow word')
    const state = reactive({
      name: '测试rective响应式数据'
    })

    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }
    return {
      ...toRefs(state),
      goBack,
      num
    }
  }
}
</script>