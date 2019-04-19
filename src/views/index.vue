<template>
  <div class="has-text-centered">
    <div class="columns item-card-wrap">
      <ItemCard v-for="item in items" :key="item.id" :item="item" class="column is-half item-card"/>
    </div>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <router-link
        :to="{ name: 'index', query: { page: page - 1 }}"
        rel="prev"
        class="pagination-previous"
        :disabled="prevDisabled"
      >Previous</router-link>
      <router-link
        :to="{ name: 'index', query: { page: page + 1 }}"
        rel="prev"
        class="pagination-next"
        :disabled="nextDisabled"
      >Next Page</router-link>
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
    this.$store.dispatch('fetchItems', { perpage: 2, page: this.page })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    prevDisabled() {
      return this.page === 1
    },
    nextDisabled() {
      return this.total <= this.page * 2
    },
    ...mapState(['items', 'total'])
  }
}
</script>

<style lang="scss" scoped>
.item-card {
  padding-top: 0;
  padding-bottom: 1rem;
  // &-wrap {
  //   max-height: 400px;
  //   overflow: scroll;
  //   overflow-x: hidden;
  //   &::-webkit-scrollbar {
  //     width: 1em;
  //   }

  //   &::-webkit-scrollbar-thumb {
  //     background-color: #00d1b2;
  //     outline: none;
  //   }
  // }
}
</style>
