<template>
  <section>
    <article>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-3">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <div class="tile is-child box notification is-info"></div>
              <div class="tile is-child box notification is-warning"></div>
              <div class="tile is-child box notification is-danger"></div>
              <div class="tile is-child box notification is-info"></div>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child">
            <figure class="image is-square">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
          </div>
        </div>
      </div>
      <header>
        <h1 class="has-text-left title is-3">{{ item.title }}</h1>
        <p class="has-text-left subtitle is-5">Listed: {{ item.date }}</p>
      </header>
      <hr>
      <p class="has-text-left is-size-5">Description:</p>
      <p class="has-text-left is-size-6">{{ item.description }}</p>
    </article>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    id: {
      type: String | Number
    }
  },
  created() {
    this.$store.dispatch('item/fetchItem', this.id)
  },
  computed: mapState({
    item: state => state.item.item
  })
}
</script>

<style scoped></style>
