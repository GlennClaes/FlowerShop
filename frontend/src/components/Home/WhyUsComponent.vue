<script setup>
</script>

<template>
  <section class="header1 cid-tJS9vXDdRK" id="header01-7">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg col-md-12">
          <div class="text-wrapper align-left">
            <h1 class="mbr-section-title mbr-fonts-style mb-4 display-2" data-aos="fade-up" data-aos-delay="0">
              <strong>Over ons</strong>
            </h1>
            <p class="mbr-text mbr-fonts-style mb-4 display-7" data-aos="fade-up" data-aos-delay="100">
              Ik ben een hobbykweker, met een grote passie voor de Germaanse baardirissen en daglelies (hemerocallis). In de loop van de jaren, heb ik een kleine verzameling opgebouwd. Al de planten worden zelf gekweekt en zonder bestrijdings middelen. Alvast veel kijkplezier gewenst.&nbsp;
            </p>
            <div class="mbr-section-btn mt-3" data-aos="fade-up" data-aos-delay="200">
              <router-link class="btn-pill btn-secondary display-7" to="/bloemen"
                >Bekijk Aanbod</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-pill {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-pill:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.btn-pill:active {
  transform: translateY(0);
  box-shadow: none;
}
.header1 {
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  align-items: center; /* verticale centrering */
}

.image-wrapper {
  height: 100%;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* afbeelding vult container zonder vervormen */
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center; /* verticaal centreren */
  height: 100%;
}

/* Mobiel en tablet optimalisatie */
@media (max-width: 768px) {
  .header1 {
    align-items: flex-start; /* start van scherm, zodat content niet wordt afgesneden */
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .text-wrapper {
    justify-content: flex-start; /* knop blijft zichtbaar */
    text-align: center;
    padding: 0 1rem;
  }
  .image-wrapper {
    height: auto; /* afbeelding schaalt proportioneel */
    margin-bottom: 1rem;
  }
  .image-wrapper img {
    height: auto; /* afbeelding schaalt met breedte */
  }
}

</style>
