<script setup>
import NavbarComponent from '@/components/Navbar/NavbarComponent.vue'
import HeaderHeroComponent from '@/components/HeaderHeroComponent.vue'
import FooterComponent from '@/components/Footer/FooterComponent.vue'
</script>

<template>
  <!-- HeaderHeroComponent met data-test -->
  <HeaderHeroComponent data-test="header-hero" />

  <!-- NavbarComponent -->
  <NavbarComponent data-test="navbar" />

  <!-- RouterView -->
  <RouterView data-test="router-view" />

  <!-- FooterComponent -->
  <FooterComponent data-test="footer" />
</template>

<style scoped></style>
