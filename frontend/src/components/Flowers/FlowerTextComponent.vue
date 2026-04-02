<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section data-bs-version="5.1" class="article13 cid-v8hrUD8eFY" id="article13-1v">
    <div class="container">
      <div class="row justify-content-center">
        <div class="card border-0 col-md-12 col-lg-10">
          <div class="card-wrapper">
            <div class="card-box align-left">
              <h1 class="mbr-section-title mbr-fonts-style mb-4 display-2">
                <strong>{{ title }}</strong>
              </h1>
              <p class="mbr-text mbr-fonts-style mb-4 display-7" v-html="text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cid-v8hrUD8eFY {
  padding-top: 2rem !important;
  padding-bottom: 1.5rem !important;
}

:deep(.mbr-section-title) {
  margin-bottom: 1rem !important;
}

:deep(.mbr-text) {
  margin-bottom: 0rem !important;
}
</style>
