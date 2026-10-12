<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import BikeMap from '../components/BikeMap.vue'

const router = useRouter()

const selectedDuration = ref(3)

const pricePerHour = 4

const totalPrice = computed(() => {
  return pricePerHour * selectedDuration.value
})

const vehicles = ref([
  { id: 1, x: 210, y: 145 },
  { id: 2, x: 300, y: 170 },
  { id: 3, x: 420, y: 300 },
  { id: 4, x: 500, y: 130 },
  { id: 5, x: 150, y: 260 },
  { id: 6, x: 350, y: 350 },
  { id: 7, x: 550, y: 240 }
])

function continueBooking() {
  router.push({
    path: '/broneeri',
    query: {
      vehicle: 'linnaratas',
      duration: selectedDuration.value
    }
  })
}
</script>

<template>
  <main class="vehicle-page">
    <section class="station-panel">
 <BikeMap :vehicles="vehicles" />
    </section>

    <section class="vehicle-details">
      <h1>Linnaratas</h1>

      <p class="description">
        Lihtne ja mugav valik igapäevasteks sõitudeks Tartu linnas.
      </p>

      <p class="price">{{ pricePerHour }} € / tund</p>

      <div class="duration-section">
        <h3>Kestus</h3>

        <div class="duration-options">
          <button
            v-for="duration in [1, 3, 24]"
            :key="duration"
            type="button"
            :class="{ selected: selectedDuration === duration }"
            @click="selectedDuration = duration"
          >
            {{ duration }} h
          </button>
        </div>
      </div>

      <button class="book-button" type="button" @click="continueBooking">
        BRONEERI · {{ totalPrice }} €
      </button>
    </section>
  </main>
</template>

<style scoped>
.vehicle-page {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 5%;
  padding: 40px 4% 70px;
  color: #1b1f1c;
  background: #fbf8ef;
  min-height: 620px;
}

.station-panel {
  min-width: 0;
}

.station-panel :deep(.map-card) {
  width: 100%;
  height: 100%;
}

.vehicle-details {
  padding: 0 4% 20px 0;
}

.vehicle-details h1 {
  font-size: clamp(38px, 4vw, 58px);
  line-height: 1.1;
  margin: 0 0 32px;
}

.description {
  font-size: 20px;
  line-height: 1.45;
  color: #707670;
  max-width: 650px;
  margin: 0 0 82px;
}

.price {
  font-size: 40px;
  font-weight: 750;
  margin: 0 0 70px;
}

.duration-section h3 {
  color: #356348;
  font-size: 17px;
  margin: 0 0 24px;
}

.duration-options {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.duration-options button {
  border: none;
  background: #d3e6d1;
  color: #356348;
  min-width: 120px;
  padding: 18px 26px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.duration-options button.selected {
  background: #356348;
  color: white;
}

.book-button {
  display: block;
  width: min(100%, 380px);
  margin-top: 54px;
  padding: 25px 28px;
  border: none;
  border-radius: 999px;
  background: #356348;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.book-button:hover {
  background: #244c34;
}

@media (max-width: 800px) {
  .vehicle-page {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 24px;
  }

  .station-panel {
    padding: 28px;
  }

  .station-panel h2 {
    font-size: 24px;
    margin-bottom: 28px;
  }

  .station-map {
    min-height: 230px;
    padding: 24px 16px;
  }

  .station {
    font-size: 13px;
    gap: 9px;
  }

  .station-dot {
    width: 24px;
    height: 24px;
  }

  .availability {
    margin-top: 28px;
    font-size: 12px;
  }

  .vehicle-details {
    padding: 0;
  }

  .description {
    font-size: 17px;
    margin-bottom: 40px;
  }

  .price {
    font-size: 34px;
    margin-bottom: 40px;
  }

  .duration-options button {
    min-width: 90px;
  }
}
</style>