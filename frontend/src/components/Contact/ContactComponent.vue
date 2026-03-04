<script setup>
import { ref } from 'vue'

const name = ref('')
const message = ref('')
const email = 'naam@email.com' // ontvanger

function sendEmail() {
  const subject = encodeURIComponent(`Nieuw bericht van ${name.value}`)
  const body = encodeURIComponent(`Naam: ${name.value}\n\nBericht:\n${message.value}`)
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <!-- Bestaande contactsectie blijft hetzelfde -->
  <section class="contacts02 map1 cid-v8hXVTYBwK" id="contacts02-2i">
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

        <!-- Contact info kaart -->
        <div class="card border-0 col-12 col-md-12 col-lg-6 mb-4">
          <div class="card-wrapper">
            <div class="text-wrapper">
              <h5 class="cardTitle mbr-fonts-style mb-2 display-5">
                <strong>Contact Us</strong>
              </h5>
              <ul class="list mbr-fonts-style display-7">
                <li class="mbr-text item-wrap">
                  Telefoon:
                  <a href="tel:+320476038971" class="text-secondary">
                    +32 0476 03 89 71
                  </a>
                </li>
                <li class="mbr-text item-wrap">
                  WhatsApp:
                  <a href="https://wa.me/320476038971" class="text-secondary">
                    +32 0476 03 89 71
                  </a>
                </li>
                <li class="mbr-text item-wrap">
                  Email:
                  <a href="mailto:naam@email.com" class="text-secondary">
                    naam@email.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Formulier kaart -->
        <div class="card border-0 col-12 col-md-12 col-lg-6 mb-4">
          <div class="card-wrapper">
            <div class="text-wrapper">
              <h5 class="cardTitle mbr-fonts-style mb-2 display-5">
                <strong>Stuur ons een bericht</strong>
              </h5>

              <form @submit.prevent="sendEmail" class="mbr-fonts-style display-7">

                <div class="mbr-text item-wrap mb-3">
                  <input
                    type="text"
                    v-model="name"
                    placeholder="Naam"
                    required
                    class="contact-input"
                  />
                </div>

                <div class="mbr-text item-wrap mb-3">
            <textarea
              v-model="message"
              placeholder="Bericht"
              rows="4"
              required
              class="contact-input"
            ></textarea>
                </div>

                <div class="mbr-text item-wrap">
                  <button type="submit" class="email-button">
                    Verstuur via e-mail
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>

      </div>


    </div>
    <input name="animation" type="hidden" />
  </section>

</template>

<style scoped>

.contact-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  font-size: inherit;
  background-color: #fafafa;
  transition: all 0.2s ease;
  outline: none;
}

.contact-input:focus {
  border-color: #e74c3c;
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.15);
}

textarea.contact-input {
  resize: vertical;
  min-height: 120px;
}

.email-button {
  width: 100%;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.email-button:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.email-button:active {
  transform: translateY(0);
  box-shadow: none;
}
</style>
