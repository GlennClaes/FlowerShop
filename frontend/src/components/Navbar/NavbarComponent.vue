
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isActive = ref(false)
const isHidden = ref(false)
const lastScrollTop = ref(0)

const toggleMenu = () => {
  isActive.value = !isActive.value
}

const closeMenu = () => {
  isActive.value = false
}

const handleScroll = () => {
  const st = window.pageYOffset || document.documentElement.scrollTop
  if (st > lastScrollTop.value && st > 100) {
    // Scroll omlaag: verberg navbar
    isHidden.value = true
    isActive.value = false // sluit mobiel menu ook bij scroll
  } else {
    // Scroll omhoog of helemaal bovenaan: toon navbar
    isHidden.value = false
  }
  lastScrollTop.value = st <= 0 ? 0 : st
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section 
    class="menu menu1 cid-v8hmAqgQnC" 
    id="menu01-1l"
    :class="{ 'nav-hidden': isHidden }"
  >
    <nav
      class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg"
    >
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-logo">
            <router-link to="/">
              <img
                src="/favicon.ico"
                alt="Logo"
                width="64"
                height="64"
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
          <ul class="navbar-nav nav-dropdown">
            <li class="nav-item">
              <router-link
                class="menu-button display-4 fs-5"
                to="/"
                @click="closeMenu"
              >
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="menu-button display-4 fs-5"
                to="/bloemen"
                @click="closeMenu"
              >
                Bloemen
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="menu-button display-4 fs-5"
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
/* --- JE ORIGINELE STYLING (BEHOUDEN) --- */
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
  z-index: 1001;
}

.hamburger .line {
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  background-color: var(--bs-secondary);
}

.hamburger.is-active .line:nth-child(1) { transform: translateY(9.5px) rotate(45deg); }
.hamburger.is-active .line:nth-child(2) { opacity: 0; }
.hamburger.is-active .line:nth-child(3) { transform: translateY(-9.5px) rotate(-45deg); }

.menu-button {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #f8f9fa;
  color: #6c757d;
  margin: 0.25rem 0;
}

.menu-button:hover {
  background-color: #e2e6ea;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  color: #343a40;
}

/* --- DE EXTREEM GERICTE FIX --- */

/* Zorg dat de container relatief is voor de absolute centrering op desktop */
.navbar-container {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* Desktop centrering zonder de flow te breken */
@media (min-width: 992px) {
  .navbar-collapse {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex !important;
    justify-content: center;
    width: auto;
    z-index: 1000;
  }

  .navbar-nav {
    display: flex !important;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

/* Mobiel: centreren zoals het was */
@media (max-width: 991px) {
  .navbar-collapse {
    display: none;
    width: 100%;
    background-color: white;
    padding: 1rem 0;
  }
  .navbar-collapse.show {
    display: block !important;
  }
  .navbar-nav {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
  }
}
#menu01-1l {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.nav-hidden {
  transform: translateY(-100%);
}

.navbar {
  background-color: white !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
</style>

