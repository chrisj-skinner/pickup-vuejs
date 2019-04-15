<template>
  <div>
    <router-link :to="{ name: 'id', params: { id: item.id } }">
      <article>
        <figure class="image is-square">
          <img :src="image.src" :width="image.width" :height="image.height">
        </figure>
        <div class="box notification is-info"></div>
        <header>
          <h1 class="has-text-left title is-5">{{ item.title}}</h1>
          <p class="has-text-left subtitle is-7">Listed: {{ item.date }} @{{item.time}}</p>
        </header>
      </article>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      image: this.item.images[0]
    }
  }
}
</script>

<style scoped></style>
