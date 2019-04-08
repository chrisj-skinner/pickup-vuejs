<template>
  <div id="app">
    <div class="columns is-centered">
      <div class="column is-half">
        <Header/>
        <!-- eslint-disable-next-line -->
        <router-view class="has-border-primary no-border-top no-border-bottom"/>
        <!-- eslint-disable-next-line -->
        <NavBar/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    Header,
    NavBar
  }
}
</script>

<style lang="scss">
.has-border-primary {
  border: 1px solid #dbdbdb;
}
// Lets go and save 4 lines of code with this mixin -- Woooooooo!
@mixin noBorder() {
  // use .no-border-top to remove border
  @each $item in 'top', 'right', 'left', 'bottom' {
    .no-border-#{$item} {
      border-#{$item}: 0;
    }
  }
}
@include noBorder();
</style>
<style scoped>
header {
  padding: 0.8rem;
}
</style>
