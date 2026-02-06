<script setup>
</script>

<template>
  <section data-bs-version="5.1" class="menu menu1 cid-v8hmAqgQnC" once="menu" id="menu01-1l">
    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-logo">
            <router-link to="/">
              <img src="../../assets/images/wf-logo-web-symbol-colour201201-128x128.webp"
                   alt="Logo" style="height: 4rem;">
            </router-link>
          </span>
        </div>

        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <div class="hamburger">
            <span></span><span></span><span></span><span></span>
          </div>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav nav-dropdown nav-right">
            <li class="nav-item">
              <router-link class="nav-link link text-secondary display-4" to="/home">
                Home
              </router-link>
            </li>

            <li class="nav-item dropdown" data-bs-auto-close="outside">
              <a class="nav-link link dropdown-toggle text-secondary display-4"
                 href="#"
                 role="button"
                 data-bs-toggle="dropdown"
                 aria-expanded="false">
                Bloemen
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item text-secondary display-4" to="/bloemen" @click.stop>
                    Alle bloemen
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item text-secondary display-4" :to="{ path: '/bloemen/Tulpen' }" @click.stop>
                    Tulpen
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item text-secondary display-4" :to="{ path: '/bloemen/Rozen' }" @click.stop>
                    Rozen
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link link text-secondary display-4" to="/boeketten">
                Boeketten
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link link text-secondary display-4" to="/contact">
                Contact
              </router-link>
            </li>
          </ul>

          <div class="icons-menu">
            <a class="iconfont-wrapper" href="tel:0476038971">
              <span class="p-2 mbr-iconfont mobi-mbri-phone mobi-mbri"></span>
            </a>
            <a class="iconfont-wrapper" href="mailto:naam@email.com">
              <span class="p-2 mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped>
/* Behoud de Mobirise styling, maar zorg dat dropdowns zichtbaar zijn */
.dropdown-menu {
  margin-top: 0;
}
/* Optioneel: Dropdown openen bij hover (voor desktop) */
@media (min-width: 992px) {
  .nav-item.dropdown:hover .dropdown-menu {
    display: block;
  }
}
</style>
