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
          <div class="tile is-child box notification is-primary has-text-centered"></div>
        </div>
      </div>
      <figure class="image is-square">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
      <header>
        <h1 class="has-text-left title is-2">{{ item.title }}</h1>
        <p class="has-text-left subtitle is-4">Listed: {{ item.date }}</p>
      </header>
      <hr>
      <p class="has-text-left is-size-6">{{ item.description }}</p>
    </article>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ItemService from '@/services/ItemService.js'

export default {
  props: {
    id: {
      type: String | Number
    }
  },
  data() {
    return {
      item: {}
    }
  },
  created() {
    ItemService.getItem(this.id)
      .then(response => {
        this.item = response.data
      })
      .catch(error => {
        console.log('There was an error getting item #: ' + this.id)
      })
  },
  computed: {
    ...mapGetters(['getItemById']),
    ...mapState(['items'])
  }
}
</script>

<style scoped></style>
