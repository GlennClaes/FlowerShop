<script setup>
import { computed } from 'vue'
import { useFlowersStore } from '@/stores/flowersStore'

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
})

const flowersStore = useFlowersStore()

const filteredFlowers = computed(() => flowersStore.getByCategory(props.category))
</script>

<template>
  <section class="pricing02 cid-v8hEGHMdeN" :id="`pricing02-${category}`">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 content-head">
          <div class="mbr-section-head mb-5">
            <h1 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2" data-aos="fade-right" data-aos-delay="0">
              <strong>{{ category }}</strong>
            </h1>
          </div>
        </div>
      </div>

      <div class="row g-3">
        <div
          v-for="(flower, index) in filteredFlowers"
          :key="index"
          class="item features-image col-12 col-md-6 col-lg-3"
          data-aos="fade-up"
          :data-aos-delay="index < 4 ? 0 : 200"
        >
          <div class="item-wrapper">
            <div class="item-img">
              <img
                :src="flower.image"
                :alt="flower.name"
                decoding="async"
                :loading="index < 4 ? 'eager' : 'lazy'"
                :fetchpriority="index < 2 ? 'high' : 'auto'"
                :style="index < 2 ? 'animation: none; opacity: 1;' : ''"
                width="400"
                height="400"
                :data-slide-to="index"
                :data-bs-slide-to="index"
              />
            </div>
            <div class="item-content">
              <h3 class="item-title mbr-fonts-style display-5">
                <strong>{{ flower.name }}</strong>
              </h3>
              <p class="item-subtitle mbr-fonts-style display-7">{{ flower.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styling blijft exact hetzelfde */
</style>
