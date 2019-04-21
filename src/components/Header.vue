<template>
  <header class="level has-border-primary is-marginless">
    <router-link :to="{ name: 'index' }" class="level-left has-text-dark">
      <BaseIcon name="logo.82b9c7a5" alt="Vue logo" class="level-item"/>
      <h1 class="is-size-4 level-item is-family-code has-text-weight-semibold is-uppercase">pickup</h1>
    </router-link>
    <div class="level-right box">
      <h2 class="is-size-6 level-item">Welcome: {{ user.name }}</h2>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user.user
    }
  }
}
</script>

<style scoped></style>
