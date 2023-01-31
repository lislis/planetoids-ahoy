<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="l-header">
      <nav class="l-nav" >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ahoy">Ahoy</RouterLink>
      </nav>
  </header>

  <RouterView />

  <footer class="l-footer">

      Planetoids, Ahoy!
  </footer>
</template>

<style scoped>

</style>
