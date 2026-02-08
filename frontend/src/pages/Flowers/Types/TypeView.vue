<script setup>
import TypeComponent from '@/components/Flowers/Types/TypeComponent.vue'

// Props uit de router
defineProps({
  category: String,
})
</script>

<template>
  <!-- Category prop doorgeven aan de component -->
  <TypeComponent :category="category" />
</template>

<style scoped></style>
