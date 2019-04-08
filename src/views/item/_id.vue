<template>
  <div>
    <h1>Showing item #{{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    }
  }
}
</script>

<style scoped>
</style>
