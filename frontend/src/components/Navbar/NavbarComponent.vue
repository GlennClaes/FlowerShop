<script setup>
import { ref } from 'vue'

const isActive = ref(false)

const toggleMenu = () => {
  isActive.value = !isActive.value
}

const closeMenu = () => {
  isActive.value = false
}
</script>

<template>
  <section class="menu menu1 cid-v8hmAqgQnC" id="menu01-1l">
    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-logo">
            <router-link to="/">
              <img
                src="/assets/images/wf-logo-web-symbol-colour201201-128x128.webp"
                alt="Logo"
                style="height: 4rem"
              />
            </router-link>
          </span>
        </div>

        <button
          class="hamburger d-lg-none text-secondary"
          type="button"
          :class="{ 'is-active': isActive }"
          @click="toggleMenu"
          aria-label="Menu openen"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>

        <div class="collapse navbar-collapse" :class="{ show: isActive }">
          <ul class="navbar-nav nav-dropdown nav-right">
            <li class="nav-item">
              <router-link
                class="nav-link link text-secondary display-4 fs-5"
                to="/home"
                @click="closeMenu"
              >
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link link text-secondary display-4 fs-5"
                to="/bloemen"
                @click="closeMenu"
              >
                Bloemen
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link link text-secondary display-4 fs-5"
                to="/boeketten"
                @click="closeMenu"
              >
                Boeketten
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link link text-secondary display-4 fs-5"
                to="/contact"
                @click="closeMenu"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped>
/* Hamburger styling */
.hamburger {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  z-index: 1001; /* Zorg dat hij boven het menu blijft */
}

.hamburger .line {
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  background-color: var(--bs-secondary);
}

/* Animatie naar Kruisje */
.hamburger.is-active .line:nth-child(1) {
  transform: translateY(9.5px) rotate(45deg);
}
.hamburger.is-active .line:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active .line:nth-child(3) {
  transform: translateY(-9.5px) rotate(-45deg);
}

/* Mobiele weergave van de lijst */
@media (max-width: 991px) {
  .navbar-collapse {
    display: none; /* Standaard verbergen */
    width: 100%;
    background-color: white; /* Of je gewenste kleur */
    padding: 1rem 0;
  }

  /* De 'show' class dwingt het menu te tonen */
  .navbar-collapse.show {
    display: block !important;
  }
}

/* Desktop weergave */
@media (min-width: 992px) {
  .hamburger {
    display: none !important;
  }
  .navbar-collapse {
    display: flex !important;
  }
}
</style>
