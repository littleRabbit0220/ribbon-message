<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Navbar/>
  </header>
  <RouterView />
</template>
<script>
  import Navbar from './components/Navbar.vue';
  export default {
    components: {
      Navbar,
    },
    name: "Question 1",
  }
</script>

