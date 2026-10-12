<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const vehicleNames = {
  elektriratas: 'elektriratas',
  linnaratas: 'linnaratas',
  elektritouks: 'elektritõuks'
}

const vehicleName = vehicleNames[route.query.vehicle] || 'jalgratas'

function goHome() {
  router.push('/')
}
</script>

<template>
  <main class="confirmation-page">
    <div class="booking-number">
      BRONEERING
      <strong>#TR2048</strong>
    </div>

    <section class="confirmation-content">
      <div class="confirmation-text">
        <h1>Broneering kinnitatud!</h1>

        <p>
          Broneeringu kinnitus on saadetud sinu emailile.
        </p>

        <p>
          Sinu {{ vehicleName }} ootab sind valitud asukohas!
        </p>

        <button class="home-button" @click="goHome">
          TAGASI AVALEHELE
        </button>
      </div>

      <div class="bike-illustration" aria-label="Jalgratas">
        🚲
      </div>
    </section>
  </main>
</template>

<style scoped>
.confirmation-page {
  min-height: 80vh;
  background: #176b48;
  color: white;
  padding: 40px 7%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.booking-number {
  background: white;
  color: #176b48;
  border-radius: 12px;
  padding: 14px 28px;
  text-align: center;
  font-size: 13px;
  letter-spacing: 1px;
  margin-bottom: 55px;
}

.booking-number strong {
  display: block;
  font-size: 23px;
  margin-top: 4px;
}

.confirmation-content {
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.confirmation-text {
  max-width: 620px;
  text-align: left;
}

h1 {
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.1;
  margin: 0 0 28px;
}

.confirmation-text p {
  font-size: 20px;
  line-height: 1.6;
  margin: 0 0 24px;
}

.bike-illustration {
  font-size: clamp(100px, 17vw, 210px);
}

.home-button {
  margin-top: 18px;
  background: white;
  color: #176b48;
  border: none;
  border-radius: 8px;
  padding: 16px 28px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.home-button:hover {
  background: #e8f3ec;
}

@media (max-width: 650px) {
  .confirmation-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .booking-number {
    margin-bottom: 35px;
  }

  .bike-illustration {
    align-self: center;
  }
}
</style>