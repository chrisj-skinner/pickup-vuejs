<template>
  <div class="has-text-centered">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="title is-size-1 has-text-weight-normal is-spaced">..pickup..</h1>
    <h2 class="subtitle is-size-3 has-text-weight-normal">Pickup app built with vuejs</h2>
    <div class="content">
      <div class="links">
        <router-link :to="{ name: 'create'}" class="button is-link is-outlined">List an item</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
