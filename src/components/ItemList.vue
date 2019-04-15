<template>
  <router-link :to="{ name: 'id', params: { id: '1' } }">
    <article class="box">
      <figure class="image is-square">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
      <h4 class="has-text-left">Title for item 1 (make dynamic)</h4>
      <p class="has-text-left is-size-7">date @time</p>
    </article>
  </router-link>
</template>

<script>
export default {}
</script>

<style scoped></style>
