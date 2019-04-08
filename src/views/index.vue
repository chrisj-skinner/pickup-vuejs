<template>
  <div class="has-text-centered section">
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

<style scoped>
.section {
  padding-left: 0.8rem;
  padding-right: 0.8rem;
}
</style>
