<template>
  <div id="app">
    <div class="columns is-centered">
      <div class="column is-half">
        <header class="level has-border-primary no-border-bottom is-marginless">
          <div class="level-left">
            <BaseIcon name="logo.82b9c7a5" alt="Vue logo" class="level-item"/>
            <h1
              class="is-size-4 level-item is-family-code has-text-weight-semibold is-uppercase"
            >pickup</h1>
          </div>
        </header>
        <!-- eslint-disable-next-line -->
        <router-view class="has-border-primary no-border-top no-border-bottom"/>
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
