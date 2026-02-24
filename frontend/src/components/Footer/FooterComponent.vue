<script setup>
import { ref } from 'vue'

// reactive variable voor het jaar
const jaar = ref(new Date().getFullYear())
</script>

<template>
  <section class="footer1 cid-v8hhn5O7xW" once="footers" id="footer01-1j">
    <div class="container">
      <div class="row mbr-white">
        <div class="col-12 col-md-6 col-lg-3">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-6">
            <strong>Bloemenhoeve</strong>
          </h5>
          <ul class="list mbr-fonts-style display-7">
            <li class="mbr-text item-wrap fs-5">Dit is een website.</li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-6">
            <strong>Navigatie</strong>
          </h5>
          <ul class="list mbr-fonts-style display-7">
            <li class="mbr-text item-wrap fs-5">
              <router-link class="footer-btn-pill display-4 fs-5" to="/">Home</router-link>
            </li>
            <li class="mbr-text item-wrap fs-5">
              <router-link class="footer-btn-pill display-4 fs-5" to="/bloemen">Bloemen</router-link>
            </li>
            <li class="mbr-text item-wrap fs-5">
              <router-link class="footer-btn-pill display-4 fs-5" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-6">
            <strong>Links</strong>
          </h5>
          <ul class="list mbr-fonts-style display-7">
            <li class="mbr-text item-wrap fs-5">
              <router-link class="footer-btn-pill display-4 fs-5" to="/">Facebook</router-link>
            </li>
            <li class="mbr-text item-wrap fs-5">
              <router-link class="footer-btn-pill display-4 fs-5" to="/">Instagram</router-link>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-6">
            <strong>Contact</strong>
          </h5>
          <ul class="list mbr-fonts-style display-7 fs-5">
            <p>
              <a href="mailto:naam@email.com" class="footer-btn-pill ">naam@email.com</a>
            </p>
            <p>
              <a href="tel:+320476038971" class="footer-btn-pill fs-5">+32 0476 03 89 71</a>
            </p>
          </ul>
        </div>
      </div>

      <!-- COPYRIGHT ONDERAAN -->
      <div class="text-center mt-4 mb-2 text-secondary">
        <p class="card-title mbr-fonts-style mb-0 display-7">&copy; {{ jaar }} Glenn Claes</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Footer basis padding */
.footer1 {
  padding-bottom: 20px;

}
.footer1 .list li {
  margin-bottom: 1rem; /* past de verticale ruimte aan tussen de items */
}

/* Footer pill buttons */
.footer-btn-pill {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #f0f0f0;
  color: #6c757d;

}

.footer-btn-pill:hover {
  background-color: #e0e0e0;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  color: #343a40;
}

.footer-btn-pill:active {
  transform: translateY(0);
  box-shadow: none;
  color: #343a40;
}
</style>
