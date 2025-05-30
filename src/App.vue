<script setup>
import Menu from './components/MenuComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Menu></Menu>

    <!-- <div class="container mx-auto px-4 py-6"> -->
      <router-view />
    <!-- </div> -->

    <Footer></Footer>
  </div>
</template>

<style scoped></style>
