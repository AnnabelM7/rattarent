<script setup>
import { ref, computed } from 'vue'
import VehicleCard from '../components/VehicleCard.vue'

const filters = [
  { id: 'all', label: 'KÕIK' },
  { id: 'e-bike', label: 'ELEKTRIRATAS' },
  { id: 'city-bike', label: 'LINNARATAS' },
  { id: 'scooter', label: 'ELEKTRITÕUKS' }
]

const vehicles = [
  {
    id: 1,
    slug: 'elektriratas',
    type: 'e-bike',
    name: 'Elektriratas',
    info: 'Kuni 80 km',
    price: 8,
    available: 4,
    icon: '🚲'
  },
  {
    id: 2,
    type: 'city-bike',
    slug: 'linnaratas',
    name: 'Linnaratas',
    info: 'Piiramatu',
    price: 4,
    available: 7,
    icon: '🚲'
  },
  {
    id: 3,
    type: 'scooter',
    slug: 'elektritouks',
    name: 'Elektritõuks',
    info: 'Kuni 40 km',
    price: 7,
    available: 2,
    icon: '🛴'
  }
]

const activeFilter = ref('all')

const filteredVehicles = computed(() => {
  if (activeFilter.value === 'all') return vehicles
  return vehicles.filter((v) => v.type === activeFilter.value)
})
</script>

<template>
  <main class="page">
    <h1>Vali endale sobiv sõiduk</h1>
    <p class="subtitle">
      Hind, sõiduulatus ja saadavus on enne broneerimist kohe nähtavad.
    </p>

    <div class="filters">
      <button
          v-for="f in filters"
          :key="f.id"
          class="chip"
          :class="{ active: activeFilter === f.id }"
          @click="activeFilter = f.id"
      >
        {{ f.label }}
      </button>
    </div>

    <div class="list">
      <VehicleCard
          v-for="v in filteredVehicles"
          :key="v.id"
          detailed
          :name="v.name"
          :slug="v.slug"
          :price="v.price"
          :info="v.info"
          :available="v.available"
          :icon="v.icon"
      />
    </div>
  </main>
</template>

<style scoped>
.page {
  flex: 1;
  padding: 24px 48px 48px;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
}

.chip {
  background: var(--green-light);
  color: var(--green-dark);
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.chip.active {
  background: var(--green-dark);
  color: var(--white);
}

.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1030px;
}

.row {
  display: grid;
  grid-template-columns: 150px 1fr 1fr auto;
  align-items: center;
  gap: 32px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 18px 20px;
}

.image {
  background: var(--green-light);
  border-radius: 16px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.details h3 {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 6px;
}

.details p {
  font-size: 12px;
  color: var(--text-muted);
}

.price {
  font-size: 18px;
  font-weight: 700;
  color: var(--green-dark);
  margin-bottom: 10px;
}

.badge {
  display: inline-block;
  background: var(--green-light);
  color: var(--green-dark);
  padding: 8px 28px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}

.select-btn {
  background: var(--green-dark);
  color: var(--white);
  padding: 16px 56px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
}

@media (max-width: 800px) {
  .page {
    padding: 24px;
  }

  .filters {
    flex-wrap: wrap;
  }

  .row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .select-btn {
    text-align: center;
  }
}
</style>