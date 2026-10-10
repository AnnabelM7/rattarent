<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const form = reactive({
  vehicle: route.query.vehicle || '',
  duration: '',
  name: '',
  email: '',
  phone: ''
})

const errors = reactive({})

function validate() {
  const e = {}

  if (!form.vehicle) e.vehicle = 'Vali sõiduk'
  if (!form.duration) e.duration = 'Vali rendi kestus'

  if (form.name.trim().length < 2) {
    e.name = 'Sisesta oma nimi (vähemalt 2 tähemärki)'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    e.email = 'Sisesta korrektne e-posti aadress'
  }

  const phone = form.phone.replace(/\s/g, '')
  if (!/^(\+372)?\d{7,8}$/.test(phone)) {
    e.phone = 'Sisesta korrektne telefoninumber, nt 5555 5555'
  }

  Object.keys(errors).forEach((k) => delete errors[k])
  Object.assign(errors, e)

  return Object.keys(e).length === 0
}

function clearError(field) {
  delete errors[field]
}

function confirmBooking() {
  if (!validate()) return
  alert('Broneering kinnitatud! Head sõitu!')
}
</script>

<template>
  <main class="page">

    <h1>Broneeri</h1>
    <p class="intro">Vali sobiv sõiduk ja rendiaeg ning täida broneerimiseks vajalikud andmed.</p>

    <form class="booking-form" novalidate @submit.prevent="confirmBooking">

      <h2>1. Vali sõiduk</h2>
      <label for="vehicle">Sõiduki tüüp</label>
      <select
          id="vehicle"
          v-model="form.vehicle"
          :class="{ invalid: errors.vehicle }"
          @change="clearError('vehicle')"
      >
        <option value="">Vali sõiduk</option>
        <option value="elektriratas">Elektriratas – 8 €/h</option>
        <option value="linnaratas">Linnaratas – 4 €/h</option>
        <option value="elektritouks">Elektritõuks – 7 €/h</option>
      </select>
      <p v-if="errors.vehicle" class="error">{{ errors.vehicle }}</p>

      <h2>2. Vali rendiaeg</h2>
      <label for="duration">Rendi kestus</label>
      <select
          id="duration"
          v-model="form.duration"
          :class="{ invalid: errors.duration }"
          @change="clearError('duration')"
      >
        <option value="">Vali kestus</option>
        <option value="1">1 tund</option>
        <option value="2">2 tundi</option>
        <option value="3">3 tundi</option>
        <option value="4">4 tundi</option>
      </select>
      <p v-if="errors.duration" class="error">{{ errors.duration }}</p>

      <h2>3. Sinu andmed</h2>

      <label for="name">Nimi</label>
      <input
          type="text"
          id="name"
          v-model="form.name"
          :class="{ invalid: errors.name }"
          placeholder="Sisesta oma nimi"
          @input="clearError('name')"
      >
      <p v-if="errors.name" class="error">{{ errors.name }}</p>

      <label for="email">E-post</label>
      <input
          type="email"
          id="email"
          v-model="form.email"
          :class="{ invalid: errors.email }"
          placeholder="Sisesta oma e-post"
          @input="clearError('email')"
      >
      <p v-if="errors.email" class="error">{{ errors.email }}</p>

      <label for="phone">Telefon</label>
      <input
          type="tel"
          id="phone"
          v-model="form.phone"
          :class="{ invalid: errors.phone }"
          placeholder="Sisesta telefoninumber"
          @input="clearError('phone')"
      >
      <p v-if="errors.phone" class="error">{{ errors.phone }}</p>

      <button type="submit" class="booking-button">KINNITA BRONEERING</button>
    </form>

  </main>
</template>

<style scoped>
.page {
  flex: 1;
  padding: 48px;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
}

.intro {
  color: var(--text-muted);
  margin-bottom: 40px;
}

.booking-form {
  background-color: white;
  border: 1px solid #ddd8c8;
  border-radius: 20px;
  padding: 30px;
  margin-top: 40px;
  max-width: 600px;
}

.booking-form h2 {
  color: #205c3d;
  margin-bottom: 24px;
}

.booking-form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.booking-form select {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd8c8;
  border-radius: 10px;
  background-color: white;
  font-size: 16px;
}

.booking-form h2:not(:first-child) {
  margin-top: 32px;
}

.booking-form input {
  display: block;
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd8c8;
  border-radius: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.booking-button {
  background-color: #205c3d;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 16px 28px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
}

.booking-button:hover {
  background-color: #17452d;
}

.invalid {
  border-color: #c0392b !important;
}

.error {
  color: #c0392b;
  font-size: 13px;
  margin-bottom: 16px;
}

</style>
