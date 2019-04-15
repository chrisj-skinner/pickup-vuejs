<template>
  <nav class="tabs is-toggle is-fullwidth">
    <ul>
      <li>
        <router-link :to="{ name: 'index' }" class="is-radiusless">
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'create' }" class="is-radiusless">
          <span>List an item</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
