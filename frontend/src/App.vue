<script setup>
import NavbarComponent from '@/components/Navbar/NavbarComponent.vue'
import HeaderHeroComponent from '@/components/HeaderHeroComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
</script>

<template>
  <!-- HeaderHeroComponent met data-test -->
  <HeaderHeroComponent data-test="header-hero" />

  <!-- NavbarComponent -->
  <NavbarComponent data-test="navbar" />

  <!-- RouterView -->
  <main>
    <RouterView data-test="router-view" />
  </main>

  <!-- FooterComponent -->
  <FooterComponent data-test="footer" />

  <!-- ScrollToTop -->
  <ScrollToTop />
</template>

<style scoped></style>
