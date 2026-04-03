<script setup>
import { ref } from 'vue'

const jaar = ref(new Date().getFullYear())
</script>

<template>
  <section class="footer1 cid-v8hhn5O7xW" once="footers" id="footer01-1j">
    <div class="container">
      <div class="row mbr-white g-4 row-cols-1 row-cols-md-3">
        <div class="col">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-6">
            <strong>Navigatie</strong>
          </h5>
          <ul class="list mbr-fonts-style display-7">
            <li class="mbr-text item-wrap">
              <router-link class="footer-btn-pill fs-5" to="/">Home</router-link>
            </li>
            <li class="mbr-text item-wrap">
              <router-link class="footer-btn-pill fs-5" to="/bloemen">Bloemen</router-link>
            </li>
            <li class="mbr-text item-wrap">
              <router-link class="footer-btn-pill fs-5" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-6">
            <strong>Links</strong>
          </h5>
          <ul class="list mbr-fonts-style display-7">
            <li class="mbr-text item-wrap">
              <router-link class="footer-btn-pill fs-5" to="/">Facebook</router-link>
            </li>
            <li class="mbr-text item-wrap">
              <router-link class="footer-btn-pill fs-5" to="/">Instagram</router-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-6">
            <strong>Contact</strong>
          </h5>
          <ul class="list mbr-fonts-style display-7">
            <li class="mbr-text item-wrap">
              <a href="mailto:i-love-working@hotmail.com" class="footer-btn-pill fs-5">
                i-love-working@hotmail.com
              </a>
            </li>
            <li class="mbr-text item-wrap">
              <a href="tel:+32472297205" class="footer-btn-pill fs-5">+32 0472 29 72 05</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center mt-4 mb-2 text-secondary">
        <p class="card-title mbr-fonts-style mb-0 display-7">&copy; {{ jaar }} Glenn Claes</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.footer1 {
  padding-bottom: 20px;
}

.footer1 .list li {
  margin-bottom: 1rem;
}

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
  white-space: normal;
  word-break: break-word;
  max-width: 100%;
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

.list .item-wrap {
  width: 100%;
}
</style>