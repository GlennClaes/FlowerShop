<script setup>
import { useFlowersStore } from '@/stores/flowersStore'
import FlowerTextComponent from './FlowerTextComponent.vue'

const flowersStore = useFlowersStore()

// Haal alle categorieën uit de JSON
const categories = [...new Set(flowersStore.flowers.map((f) => f.category))]

const categoryDescriptions = {
  Daglelies: {
    title: 'Prachtige Daglelies uit eigen tuin',
    text: 'Onze daglelies worden met zorg gekweekt en elke ochtend vers geplukt. <br> Ze zijn perfect voor wie van kleur en versheid houdt.',
  },
  Rozen: {
    title: 'Romantische Rozen, rechtstreeks geplukt',
    text: 'Niets overtreft de geur en schoonheid van verse rozen uit eigen kweek. <br> Ontdek onze selectie van de mooiste soorten.',
  },
  default: {
    title: 'Bloemen die écht vers zijn!',
    text: 'De meeste bloemen in de winkel hebben al een hele reis achter de rug, maar die van ons niet. <br> Wij kweken onze bloemen gewoon zelf in onze eigen tuin. Elke ochtend lopen we de tuin in om de mooiste bloemen met de hand te plukken. <br /><br />Hierdoor zijn ze vers en blijven ze veel langer mee. Het is een eerlijk product van eigen bodem, met liefde voor de natuur grootgebracht. Zo haal je altijd iets bijzonders en gezonds in huis.',
  },
}

const getCategoryData = (category) => {
  return categoryDescriptions[category] || categoryDescriptions['default']
}
</script>

<template>
  <!-- Loop over alle categorieën -->
  <section
    v-for="(category, catIndex) in categories"
    :key="catIndex"
    class="pricing02 cid-v8hqljKCPM"
    :id="`pricing02-${catIndex}`"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 content-head">
          <div class="mbr-section-head mb-4">
            <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>{{ category }}</strong>
            </h4>
          </div>
        </div>
      </div>

      <FlowerTextComponent
        :title="getCategoryData(category).title"
        :text="getCategoryData(category).text"
      />

      <div class="row">
        <div
          v-for="(flower, index) in flowersStore.getByCategory(category)"
          :key="index"
          class="item features-image col-12 col-md-6 col-lg-3"
        >
          <div class="item-wrapper">
            <div class="item-img">
              <img
                :src="flower.image"
                :alt="flower.name"
                :data-slide-to="index"
                :data-bs-slide-to="index"
              />
            </div>
            <div class="item-content">
              <h5 class="item-title mbr-fonts-style display-5 fs-4">
                <strong>{{ flower.name }}</strong>
              </h5>
              <h6 class="item-subtitle mbr-fonts-style display-7 fs-5">{{ flower.price }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <input name="animation" type="hidden" />
</template>


<style scoped>
/* styling blijft exact hetzelfde */
</style>
