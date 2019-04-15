<template>
  <div class="has-text-centered section">
    <div class="columns">
      <ItemCard v-for="item in items" :key="item.id" :item="item" class="column is-half"/>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import ItemService from '@/services/ItemService.js'

export default {
  components: {
    ItemCard,
    ItemService
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    ItemService.getItems()
      .then(response => {
        console.log(response.data)
        this.items = response.data
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      })
  }
}
</script>

<style scoped>
.section {
  padding-left: 0.8rem;
  padding-right: 0.8rem;
}
</style>
