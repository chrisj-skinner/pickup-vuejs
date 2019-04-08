<template>
  <section class="section">
    <article>
      <figure class="image is-square">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
      <h4 class="has-text-left">Title for item #{{ id }}</h4>
      <p class="has-text-left is-size-7">date @time</p>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    }
  }
}
</script>

<style scoped>
</style>
