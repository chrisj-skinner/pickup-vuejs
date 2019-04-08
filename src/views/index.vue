<template>
  <div class="has-text-centered">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="title is-size-1 has-text-weight-normal is-spaced">..pickup..</h1>
    <h2 class="subtitle is-size-3 has-text-weight-normal">Pickup app built with vuejs</h2>
    <div class="columns">
      <ItemList class="column is-half"/>
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue'

export default {
  components: {
    ItemList
  }
}
</script>

<style></style>
