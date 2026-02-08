<script setup>
import { ref } from 'vue'

// reactive variable voor het jaar
const jaar = ref(new Date().getFullYear())
</script>

<template>
  <section data-bs-version="5.1" class="footer1 cid-v8hhn5O7xW" once="footers" id="footer01-1j">
    <div class="container">
      <div class="row mbr-white">
        <div class="col-12 col-md-6 col-lg-3">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-5"><strong>Christine Schevenels</strong></h5>
          <ul class="list mbr-fonts-style display-7">
            <li class="mbr-text item-wrap fs-5">Dit is een website.</li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-5"><strong>Navigatie</strong></h5>
          <ul class="list mbr-fonts-style display-7">
            <li class="mbr-text item-wrap fs-5"><router-link class="nav-link link text-secondary display-4 fs-5" to="/home">Home</router-link></li>
            <li class="mbr-text item-wrap fs-5"><router-link class="nav-link link text-secondary display-4 fs-5" to="/bloemen">Bloemen</router-link></li>
            <li class="mbr-text item-wrap fs-5"><router-link class="nav-link link text-secondary display-4 fs-5" to="/boeketten">Boeketten</router-link></li>
            <li class="mbr-text item-wrap fs-5"><router-link class="nav-link link text-secondary display-4 fs-5" to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-5"><strong>Links</strong></h5>
          <ul class="list mbr-fonts-style display-7">
            <li class="mbr-text item-wrap fs-5"><router-link class="nav-link link text-secondary display-4 fs-5" to="/">Facebook</router-link></li>
            <li class="mbr-text item-wrap fs-5"><router-link class="nav-link link text-secondary display-4 fs-5" to="/">Instagram</router-link></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-5"><strong>Contact</strong></h5>
          <ul class="list mbr-fonts-style display-7 fs-5">
            <p><a href="mailto:naam@email.com" class="text-secondary">naam@email.com</a></p>
            <p><a href="tel:+320476038971" class="text-secondary text-primary fs-5">+32 0476 03 89 71</a></p>
          </ul>
        </div>
      </div>

      <!-- COPYRIGHT ONDERAAN -->
      <div class="text-center mt-4 mb-2 text-secondary">
      <p class="card-title mbr-fonts-style mb-0 display-7">
        &copy; {{ jaar }} Glenn Claes
      </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Optioneel: zorg dat copyright altijd onderaan zichtbaar blijft */
.footer1 {
  padding-bottom: 20px;
}
</style>
