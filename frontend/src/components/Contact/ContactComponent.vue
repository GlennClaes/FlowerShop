<script setup>
import { ref } from 'vue'

const name = ref('')
const message = ref('')
const phone = '+320471743677' // het nummer waar het bericht heen gaat

const whatsappLink = ref('')

function sendMessage() {
  const text = encodeURIComponent(`Hallo, mijn naam is ${name.value}. ${message.value}`)
  whatsappLink.value = `https://wa.me/${phone.replace(/\D/g, '')}?text=${text}`
  window.open(whatsappLink.value, '_blank') // opent WhatsApp
}
</script>

<template>
  <!-- Bestaande contactsectie blijft hetzelfde -->
  <section data-bs-version="5.1" class="contacts02 map1 cid-v8hXVTYBwK" id="contacts02-2i">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 content-head">
          <div class="mbr-section-head mb-5">
            <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Contact</strong>
            </h3>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="card col-12 col-md-12 col-lg-6">
          <div class="card-wrapper">
            <div class="text-wrapper">
              <h5 class="cardTitle mbr-fonts-style mb-2 display-5">
                <strong>Contact Us</strong>
              </h5>
              <ul class="list mbr-fonts-style display-7">
                <li class="mbr-text item-wrap">
                  Telefoon:
                  <a href="tel:+320476038971" class="text-secondary">+32 0476 03 89 71</a>
                </li>
                <li class="mbr-text item-wrap">
                  WhatsApp:
                  <a href="https://wa.me/320476038971" class="text-secondary">+32 0476 03 89 71</a>
                </li>
                <li class="mbr-text item-wrap">
                  Email:
                  <a href="mailto:naam@email.com" class="text-secondary">naam@email.com</a>
                </li>
                <li class="mbr-text item-wrap">
                  Adres: 350 5th Ave, New York, NY 10118
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="map-wrapper col-md-12 col-lg-6">
          <div class="google-map">
            <iframe
              frameborder="0"
              style="border:0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66641.23545938493!2d5.129862966725924!3d50.72829951019849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c10e3ae5f28eb3%3A0x6c8aeb49a2374525!2sMontenaken%2C%203890%20Gingelom!5e1!3m2!1sen!2sbe!4v1768402293835!5m2!1sen!2sbe"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <input name="animation" type="hidden">
  </section>

  <!-- WhatsApp formulier onder toevoegen -->
  <section class="contact-form mt-5">
    <div class="container">
      <h3>Stuur ons een bericht via WhatsApp</h3>
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="name" placeholder="Naam" required>
        <textarea v-model="message" placeholder="Bericht" required></textarea>
        <button type="submit">Verstuur via WhatsApp</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}
button {
  background-color: #25D366; /* WhatsApp groen */
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}
.contact-form {
  margin-top: 2rem;
}
</style>
