<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const vehicleNames = {
  elektriratas: 'Elektriratas',
  linnaratas: 'Linnaratas',
  elektritouks: 'Elektritõuks'
}

const prices = {
  elektriratas: 8,
  linnaratas: 4,
  elektritouks: 7
}

const vehicle = computed(() => String(route.query.vehicle || 'elektriratas'))
const vehicleName = computed(() => vehicleNames[vehicle.value] || 'Elektriratas')
const pricePerHour = computed(() => prices[vehicle.value] || 8)

const duration = computed(() => {
  const value = Number(route.query.duration || 3)
  return [1, 3, 24].includes(value) ? value : 3
})

const totalPrice = computed(() => pricePerHour.value * duration.value)

const today = new Intl.DateTimeFormat('et-EE', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
}).format(new Date())

const paymentMethod = ref('card')
const fullName = ref('')
const email = ref('')
const cardNumber = ref('')
const cardholder = ref('')
const expiry = ref('')
const cvv = ref('')
const message = ref('')

function confirmPayment() {
  router.push({
    path: '/kinnitus',
    query: {
      vehicle: vehicle.value
    }
  })
}
</script>

<template>
  <main class="booking-page">
    <div class="booking-layout">
      <!-- Vasak: broneeringu kokkuvõte -->
      <section class="summary-card">
        <p class="eyebrow">SINU BRONEERING</p>

        <h1>{{ vehicleName }}</h1>

        <div class="booking-date">
          <span class="summary-icon">◷</span>
          <div>
            <strong>Täna</strong>
            <p>{{ today }}</p>
          </div>
        </div>

        <div class="booking-duration">
          <span>Kestus</span>
          <strong>{{ duration }} {{ duration === 1 ? 'tund' : 'tundi' }}</strong>
        </div>

        <div class="price-breakdown">
          <span>{{ pricePerHour }} € × {{ duration }} h</span>
          <span>{{ totalPrice }} €</span>
        </div>

        <div class="total">
          <span>Kokku</span>
          <strong>{{ totalPrice }} €</strong>
        </div>
      </section>

      <!-- Parem: maksevorm -->
      <section class="payment-card">
        <p class="eyebrow">VIIMANE SAMM</p>
        <h2>Makseandmed</h2>
        <p class="payment-description">
          Täida andmed ja kinnita oma broneering.
        </p>

        <form @submit.prevent="confirmPayment">
          <fieldset class="payment-methods">
            <legend>Makseviis</legend>

            <label class="method-option" :class="{ active: paymentMethod === 'card' }">
              <input v-model="paymentMethod" type="radio" value="card" />
              <span>💳</span>
              <span>Kaardimakse</span>
            </label>

            <label class="method-option" :class="{ active: paymentMethod === 'bank' }">
              <input v-model="paymentMethod" type="radio" value="bank" />
              <span>🏦</span>
              <span>Pangalink</span>
            </label>
          </fieldset>

          <div class="form-field">
            <label for="fullName">Nimi</label>
            <input
              id="fullName"
              v-model="fullName"
              type="text"
              placeholder="Sinu täisnimi"
              autocomplete="name"
              required
            />
          </div>

          <div class="form-field">
            <label for="email">E-posti aadress</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="nimi@näide.ee"
              autocomplete="email"
              required
            />
          </div>

          <template v-if="paymentMethod === 'card'">
            <div class="form-field">
              <label for="cardholder">Kaardiomanik</label>
              <input
                id="cardholder"
                v-model="cardholder"
                type="text"
                placeholder="Nimi kaardil"
                autocomplete="cc-name"
                required
              />
            </div>

            <div class="form-field">
              <label for="cardNumber">Kaardinumber</label>
              <input
                id="cardNumber"
                v-model="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                autocomplete="cc-number"
                inputmode="numeric"
                maxlength="19"
                pattern="[0-9 ]{13,19}"
                required
              />
            </div>

            <div class="card-row">
              <div class="form-field">
                <label for="expiry">Kehtiv kuni</label>
                <input
                  id="expiry"
                  v-model="expiry"
                  type="text"
                  placeholder="KK/AA"
                  autocomplete="cc-exp"
                  maxlength="5"
                  pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                  required
                />
              </div>

              <div class="form-field">
                <label for="cvv">CVC/CVV</label>
                <input
                  id="cvv"
                  v-model="cvv"
                  type="password"
                  placeholder="•••"
                  autocomplete="cc-csc"
                  inputmode="numeric"
                  maxlength="4"
                  pattern="[0-9]{3,4}"
                  required
                />
              </div>
            </div>
          </template>

          <div v-else class="bank-notice">
            Pangalink on kujunduslik näidis. Päris pangamakse pole ühendatud.
          </div>

          <button class="pay-button" type="submit">
            KINNITA JA MAKSA · {{ totalPrice }} €
          </button>

          <p v-if="message" class="payment-message" role="status">
            {{ message }}
          </p>
        </form>
      </section>
    </div>
  </main>
</template>

<style scoped>
.booking-page {
  min-height: 75vh;
  padding: 56px 5%;
  background: #fbf8ef;
  color: #1b1f1c;
}

.booking-layout {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  align-items: stretch;
  gap: 28px;
}

.summary-card,
.payment-card {
  border-radius: 28px;
  padding: 36px;
}

.summary-card {
  background: #fff;
  border: 1px solid #e2ddcd;
  border-radius: 28px;
  width: 320px;
  min-height: 320px;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-wrap: break-word;
}

.payment-card {
  background: #22613f;
  color: #fff;
}

.eyebrow {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0 0 24px;
  color: #6a6f68;
}

.payment-card .eyebrow {
  color: #d3e9d2;
}

.summary-card h1 {
  font-size: clamp(30px, 3vw, 42px);
  line-height: 1.1;
  margin: 0 0 38px;
}

.payment-card h2 {
  font-size: 30px;
  margin: 0 0 10px;
}

.payment-description {
  color: #e0ebdf;
  font-size: 14px;
  margin: 0 0 28px;
}

.booking-date {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 28px;
  border-bottom: 1px solid #e2ddcd;
}

.summary-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: #e7f2e3;
  border-radius: 14px;
  font-size: 25px;
  color: #22613f;
}

.booking-date strong {
  text-transform: capitalize;
}

.booking-date p {
  margin: 5px 0 0;
  color: #6a6f68;
  font-size: 13px;
}

.booking-duration,
.price-breakdown,
.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.booking-duration {
  margin-top: 28px;
  font-size: 14px;
}

.price-breakdown {
  margin-top: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2ddcd;
  color: #6a6f68;
  font-size: 14px;
}

.total {
  margin-top: 24px;
  font-size: 18px;
  font-weight: 700;
}

.total strong {
  font-size: 38px;
  color: #22613f;
}

.summary-note {
  margin-top: auto;
  padding-top: 40px;
  color: #6a6f68;
  font-size: 12px;
  line-height: 1.6;
}

.payment-methods {
  border: 0;
  padding: 0;
  margin: 0 0 24px;
  min-width: 0;
}

.payment-methods legend {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 12px;
}

.method-option {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  margin: 0 8px 8px 0;
  border: 1px solid #669176;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
}

.method-option.active {
  background: #fff;
  color: #22613f;
  border-color: #fff;
}

.method-option input {
  accent-color: #22613f;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
  min-width: 0;
}

.form-field label {
  font-size: 12px;
  font-weight: 700;
}

.form-field input {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 14px 15px;
  border: 1px solid #7ca18a;
  border-radius: 11px;
  background: #fff;
  color: #1b1f1c;
  font: inherit;
  font-size: 14px;
  outline: none;
}

.form-field input:focus {
  border-color: #d3e9d2;
  box-shadow: 0 0 0 3px rgb(211 233 210 / 25%);
}

.form-field input::placeholder {
  color: #a1a7a0;
}

.card-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.bank-notice {
  padding: 16px;
  margin-bottom: 20px;
  border: 1px solid #7ca18a;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.5;
}

.pay-button {
  width: 100%;
  padding: 18px 16px;
  border: 0;
  border-radius: 999px;
  background: #d3e9d2;
  color: #1b1f1c;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s;
}

.pay-button:hover {
  background: #fff;
}

.secure-note {
  text-align: center;
  color: #e0ebdf;
  font-size: 11px;
  margin: 18px 0 0;
}

.payment-message {
  padding: 12px;
  background: #fff;
  color: #22613f;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 760px) {
  .booking-page {
    padding: 28px 16px;
  }

  .booking-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .summary-card,
  .payment-card {
    padding: 26px 22px;
    border-radius: 22px;
  }

  .summary-note {
    margin-top: 30px;
    padding-top: 0;
  }
}
</style>