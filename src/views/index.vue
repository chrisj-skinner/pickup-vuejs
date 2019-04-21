<template>
  <div class="has-text-centered">
    <div class="columns item-card-wrap">
      <ItemCard v-for="item in items" :key="item.id" :item="item" class="column is-half item-card"/>
    </div>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <button @click="fetchItems(true)" :disabled="moreDisabled">Show more</button>
    </nav>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ItemCard
  },
  created() {
    this.fetchItems(false)
  },
  computed: {
    moreDisabled() {
      console.log(this.total)
      console.log(this.items.length)

      return this.total == this.items.length
    },
    ...mapState({ items: 'items', total: 'total' })
  },
  methods: {
    fetchItems(more) {
      // prevent fetchItems from firing when using the back / home buttons
      if (
        (more === false && this.$store.state.inView == 0) ||
        (more === true && this.$store.state.inView !== 0)
      ) {
        this.$store.dispatch('fetchItems', { percall: 2 })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card {
  padding-top: 0;
  padding-bottom: 1rem;
  &-wrap {
    flex-wrap: wrap;
    max-height: 400px;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #00d1b2;
      outline: none;
    }
  }
}
</style>
