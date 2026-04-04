<script setup>
import { useFlowersStore } from '@/stores/flowersStore'
import FlowerTextComponent from './FlowerTextComponent.vue'

const flowersStore = useFlowersStore()

// Haal alle categorieën uit de JSON
const categories = [...new Set(flowersStore.flowers.map((f) => f.category))]

const categoryDescriptions = {
  Daglelies: {
    title: 'Verzorging',
    text: 'Standplaats volle zon of halfshaduw. <br> Na de bloei de uitgebloeide stengels verwijderen. <br> <br> Bemesting: 1x voorjaar, 1x najaar. <br> Met bloed of beendermeel. <br> <br> Als de plant te groot word, kan deze in het najaar gescheurd worden.',
  },
  Irissen: {
    title: 'Verzorging en plantwijze',
    text: 'De knollen van de irissen moeten bovenop de aarde liggen en liefst met de knol naar het zuiden. <br> Na het bloeien de stengels verwijderen en eventueel de lelijke bladeren een beetje afknippen. <br> <br> Standplaats: Volle zon <br> Bemesting: 1x voorjaar, 1x najaar. <br> Met bloed of beendermeel.',
  },
  default: {
    title: 'Lorem Ipsum',
    text: 'Text here...',
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
            <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>{{ category }}</strong>
            </h2>
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
                width="400"
                height="300"
                loading="lazy"
                :data-slide-to="index"
                :data-bs-slide-to="index"
              />
            </div>
            <div class="item-content">
              <h3 class="item-title mbr-fonts-style display-5 fs-4">
                <strong>{{ flower.name }}</strong>
              </h3>
              <p class="item-subtitle mbr-fonts-style display-7 fs-5">{{ flower.price }}</p>
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
