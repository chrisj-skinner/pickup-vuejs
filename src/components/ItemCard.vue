<template>
  <div>
    <router-link :to="{ name: 'id', params: { id: item.id } }">
      <article>
        <figure class="image is-square">
          <img src="https://bulma.io/images/placeholders/128x128.png">
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
  }
}
</script>

<style scoped></style>
