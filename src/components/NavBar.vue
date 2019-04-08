<template>
  <nav class="tabs is-toggle is-fullwidth">
    <ul>
      <li class="is-active">
        <router-link :to="{ name: 'index' }">
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'create' }">
          <span>List an item</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
