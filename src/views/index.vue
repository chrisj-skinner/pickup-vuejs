<template>
  <div class="has-text-centered">
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
    ItemCard
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    ItemService.getItems()
      .then(response => {
        this.items = response.data
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      })
  }
}
</script>

<style lang="scss" scoped>
.columns {
  overflow: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00d1b2;
    outline: none;
  }
}
</style>
