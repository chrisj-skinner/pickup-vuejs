<template>
  <img alt="Vue logo" src="../../assets/logo.png" :width="width" :height="height">
</template>

<script>
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>

<style scoped>
</style>
