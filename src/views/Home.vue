<template>
  <div>{{msg}}11
    <HelloWorld/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: '首页'
    }
  }
}
</script>