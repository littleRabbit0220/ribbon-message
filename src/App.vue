<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen  flex flex-col">
    <header>
      <Navbar />
    </header>
    <RouterView />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  name: 'Question 1'
}
</script>
