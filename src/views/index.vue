<template>
  <div class="has-text-centered">
    <div class="columns item-card-wrap">
      <ItemCard v-for="item in item.items" :key="item.id" :item="item" class="column is-half"/>
    </div>
    <button
      @click="fetchItems(true)"
      class="button is-rounded"
      :class="{ 'is-loading': isLoading}"
      :disabled="moreDisabled"
    >Show more</button>
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
      return this.item.total == this.item.items.length
      // return false
    },
    isLoading() {
      return this.item.loadingStatus === 'loading'
    },
    ...mapState(['item'])
  },
  methods: {
    fetchItems(more) {
      // only call on intital load or when show more is clicked
      // prevents call when navigating back to the root page /
      if (
        (more === false && this.$store.state.item.inView == 0) ||
        (more === true && this.$store.state.item.inView !== 0)
      ) {
        this.$store.dispatch('fetchItems', { percall: 2 })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card-wrap {
  flex-wrap: wrap;
  height: 350px;
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
</style>
