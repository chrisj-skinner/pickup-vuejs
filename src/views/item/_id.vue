<template>
  <section class="section">
    <article>
      <figure class="image is-square">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
      <h4 class="has-text-left">Title for item #{{ id }}</h4>
      <p class="has-text-left is-size-7">date @time</p>
      <p
        class="has-text-left"
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quis, cumque quae, velit aspernatur provident ex est temporibus tempore at doloremque adipisci vel voluptatem quisquam?</p>
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
