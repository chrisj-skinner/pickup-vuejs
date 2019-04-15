<template>
  <div>
    <router-link :to="{ name: 'id', params: { id: item.id } }">
      <article class="box">
        <figure class="image is-square">
          <!-- eslint-disable-next-line -->
          <img :src="image.src" :width="image.width" :height="image.height">
        </figure>
        <h4 class="has-text-left">{{ item.title}}</h4>
        <p class="has-text-left is-size-7">Listed: {{ item.date }} @{{item.time}}</p>
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
