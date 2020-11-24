<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <Button>222</Button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>