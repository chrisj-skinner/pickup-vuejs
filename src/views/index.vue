<template>
  <div class="has-text-centered">
    <div class="columns item-card-wrap">
      <ItemCard v-for="item in items" :key="item.id" :item="item" class="column is-half item-card"/>
    </div>
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
    this.$store.dispatch('fetchItems')
  },
  computed: mapState(['items'])
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
