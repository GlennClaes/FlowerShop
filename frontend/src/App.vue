<script setup>
import HomeComponent from "@/components/Home/HomeComponent.vue";
import NavbarComponent from "@/components/Navbar/NavbarComponent.vue";
import HeaderHeroComponent from "@/components/HeaderHeroComponent.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
import HomeView from "@/pages/Home/HomeView.vue";
</script>

<template>
  <HeaderHeroComponent />
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
