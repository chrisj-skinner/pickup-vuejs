<template>
  <div id="app">
    <div class="columns is-centered">
      <div class="column is-half">
        <!-- eslint-disable-next-line -->
        <router-view class="has-border-primary"/>
        <!-- eslint-disable-next-line -->
        <NavBar/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
.has-border-primary {
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #dbdbdb;
}
</style>
